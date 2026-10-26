import { expect, test, type Page } from '@playwright/test';

const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const range = (page: Page, name: string) => page.getByRole('radio', { name, exact: true });
const chip = (page: Page, group: string, name: string) =>
	page.getByLabel(group, { exact: true }).getByRole('radio', { name, exact: true });
const start = (page: Page) => page.getByRole('button', { name: /^(\d+문제로 시작|시작)$/ });
const answer = (page: Page) => page.getByRole('textbox');
const counter = (page: Page) =>
	page.getByRole('main').getByRole('status').filter({ hasText: / \/ / });
const gradeButton = (page: Page) => page.getByRole('button', { name: '채점하기' });

const savedWord = (word: string, meaning: string) => ({ word, meanings: [meaning], sources: [] });
/** Saved words and a meaning to answer each with. */
const meanings: Record<string, string> = {
	conference: '학회',
	delivery: '배송품',
	'let ~ know': '에게 알리다'
};
const threeWords = {
	conference: savedWord('conference', '회의, 학회'),
	delivery: savedWord('delivery', '배송(품)'),
	'let ~ know': savedWord('let ~ know', '~에게 알리다')
};

async function seedWords(page: Page, record: object) {
	await page.goto('/');
	await page.evaluate(
		(value) => localStorage.setItem('toeicBasic.words', value),
		JSON.stringify({ version: 1, entries: {}, saved: {}, ...record })
	);
}

/** Starts a 영어 → 뜻 test of the saved words. */
async function startSaved(page: Page) {
	await seedWords(page, { saved: threeWords });
	await page.goto('/words/test');
	await chip(page, '방향', '영어 → 뜻').click();
	await range(page, '담은 단어').check();
	await start(page).click();
}

/** The English the question shows, which names the answer box. */
const englishOf = (page: Page) =>
	answer(page).evaluate((input) => {
		const [wordId] = input.getAttribute('aria-labelledby')!.split(' ');
		return document.getElementById(wordId)!.textContent!.trim();
	});

const key = (page: Page, type: 'keydown' | 'keyup', init: object = {}) =>
	answer(page).evaluate(
		(input, [type, init]) => {
			const event = new KeyboardEvent(type, { key: 'Enter', bubbles: true, ...init });
			Object.defineProperty(event, 'keyCode', { value: 'keyCode' in init ? init.keyCode : 13 });
			input.dispatchEvent(event);
		},
		[type, init] as const
	);

interface FakeSpeech {
	spoken: { text: string }[];
	cancels: number;
}

/** Records what the app asks speechSynthesis to say, with one English voice installed. */
async function fakeSpeech(page: Page) {
	await page.addInitScript(() => {
		const fake: FakeSpeech = { spoken: [], cancels: 0 };
		Object.assign(window, { fake });
		window.SpeechSynthesisUtterance = class {
			text: string;
			constructor(text: string) {
				this.text = text;
			}
		} as never;
		speechSynthesis.getVoices = () => [{ name: 'Test Voice', lang: 'en-US' }] as never;
		speechSynthesis.speak = (utterance) => void fake.spoken.push(utterance as never);
		speechSynthesis.cancel = () => void fake.cancels++;
	});
	return () => page.evaluate(() => (window as unknown as { fake: FakeSpeech }).fake);
}

test('chooses the direction, which changes the copy and the saved words it can ask (AE1)', async ({
	page
}) => {
	await seedWords(page, {
		saved: { delay: savedWord('delay', '지연'), 'let ~ know': threeWords['let ~ know'] }
	});
	await page.goto('/words/test');
	await expect(chip(page, '방향', '뜻 → 영어')).toHaveAttribute('aria-checked', 'true');
	await expect(page.getByText('뜻을 보고 영어로 써요.', { exact: false })).toBeVisible();
	await range(page, '담은 단어').check();
	await expect(start(page)).toHaveText('1문제로 시작');
	await expect(page.getByText('~·A/B 같은 표현이 든 1개는 빠져요')).toBeVisible();

	await chip(page, '방향', '영어 → 뜻').click();
	await expect(page.getByText('영어를 보고 뜻을 써요.', { exact: false })).toBeVisible();
	await expect(start(page)).toHaveText('2문제로 시작');
	await expect(page.getByText('~·A/B 같은 표현이 든 1개는 빠져요')).toHaveCount(0);
});

test('shows the English, its IPA and part of speech, and reads it aloud', async ({ page }) => {
	const speech = await fakeSpeech(page);
	await page.goto('/words/test');
	await chip(page, '방향', '영어 → 뜻').click();
	await range(page, '별표').check();
	await start(page).click();

	const english = await englishOf(page);
	await expect(answer(page)).toHaveAccessibleName(`${english} 뜻`);
	await expect(answer(page)).toHaveAttribute('lang', 'ko');
	await expect(answer(page)).toBeFocused();
	await expect(page.getByText(/^\[.+\]$/)).toBeVisible();
	await expect(page.getByText(/^첫 글자/)).toHaveCount(0);
	await expect(counter(page)).toContainText(`1 / 8 · ${english}`);

	await page.getByRole('button', { name: '발음 듣기' }).click();
	await expect.poll(async () => (await speech()).spoken.map(({ text }) => text)).toEqual([english]);
	await expect(answer(page)).toBeFocused();
	// Moving on stops the word being read (R6).
	const { cancels } = await speech();
	await page.getByRole('button', { name: '다음', exact: true }).click();
	expect((await speech()).cancels).toBeGreaterThan(cancels);
});

test('moves on once per Enter, as the key comes up with the last syllable in (AE2)', async ({
	page
}) => {
	await startSaved(page);
	const first = await englishOf(page);
	await answer(page).fill(meanings[first]);
	// Chrome's Korean IME: the Enter that ends composing, then the same Enter once more.
	await key(page, 'keydown', { isComposing: true, keyCode: 229 });
	await key(page, 'keydown');
	await expect(counter(page)).toContainText('1 / 3');
	await key(page, 'keyup');
	await expect(counter(page)).toContainText('2 / 3');
	await expect(answer(page)).toBeFocused();

	// Held down, Enter repeats; it still moves one question.
	await key(page, 'keydown');
	await key(page, 'keydown', { repeat: true });
	await key(page, 'keydown', { repeat: true });
	await key(page, 'keyup');
	await expect(counter(page)).toContainText('3 / 3');

	// On the last question it goes to 채점하기 and grades nothing.
	await key(page, 'keydown');
	await key(page, 'keyup');
	await expect(gradeButton(page)).toBeFocused();
	await expect(heading(page)).toHaveText('단어시험');

	await page.getByRole('button', { name: '이전' }).click();
	await page.getByRole('button', { name: '이전' }).click();
	await expect(answer(page)).toHaveValue(meanings[first]);
});

test('keeps the direction for a retake and a range change (R1)', async ({ page }) => {
	await startSaved(page);
	for (let question = 1; question <= 3; question++) {
		await answer(page).fill(meanings[await englishOf(page)]);
		if (question < 3) await answer(page).press('Enter');
	}
	await gradeButton(page).click();
	await expect(heading(page)).toHaveText('시험 결과');
	await page.getByRole('button', { name: '같은 범위로 다시' }).click();
	await expect(answer(page)).toHaveAttribute('lang', 'ko');
	await page.getByRole('button', { name: '나가기' }).click();
	await expect(chip(page, '방향', '영어 → 뜻')).toHaveAttribute('aria-checked', 'true');
});

const wrongRow = (page: Page, english: string) =>
	page.getByRole('list', { name: '틀린 단어' }).getByRole('listitem').filter({ hasText: english });
const markButton = (page: Page, english: string) =>
	wrongRow(page, english).getByRole('button', { name: '맞은 걸로' });
const cardsButton = (page: Page) => page.getByRole('button', { name: '카드로 다시 보기' });
const readWords = (page: Page) => page.evaluate(() => localStorage.getItem('toeicBasic.words'));

/** Takes a 영어 → 뜻 test of the saved words, answering each with what `respond` gives. */
async function takeTest(page: Page, respond: Record<string, string>) {
	await startSaved(page);
	for (let question = 1; question <= 3; question++) {
		await answer(page).fill(respond[await englishOf(page)]);
		if (question < 3) await answer(page).press('Enter');
	}
	await gradeButton(page).click();
	await expect(heading(page)).toHaveText('시험 결과');
}

test('marks a wrong answer right, which the cards and the score keep (AE4)', async ({ page }) => {
	await takeTest(page, { conference: '학회', delivery: '택배', 'let ~ know': '' });
	const before = await readWords(page);
	await expect(page.getByText('1 / 3')).toBeVisible();
	await expect(wrongRow(page, 'delivery')).toContainText('내 답 택배');
	await expect(wrongRow(page, 'delivery')).toContainText('배송(품)');
	await expect(wrongRow(page, 'let ~ know')).toContainText('(쓰지 않음)');
	await expect(markButton(page, 'let ~ know')).toHaveCount(0);

	await markButton(page, 'delivery').click();
	await expect(markButton(page, 'delivery')).toHaveAttribute('aria-pressed', 'true');
	await expect(wrongRow(page, 'delivery')).toContainText('맞음으로 침');
	await expect(page.getByText('2 / 3')).toBeVisible();

	await cardsButton(page).click();
	await expect(page.getByRole('banner').getByRole('status')).toHaveText('1 / 1');
	await page.getByRole('link', { name: '그만하고 결과로' }).click();
	await expect(page.getByText('2 / 3')).toBeVisible();
	await expect(markButton(page, 'delivery')).toHaveAttribute('aria-pressed', 'true');
	expect(await readWords(page)).toBe(before);

	// A retake starts with nothing marked.
	await page.getByRole('button', { name: '같은 범위로 다시' }).click();
	for (let question = 1; question <= 3; question++) {
		await answer(page).fill(
			{ conference: '학회', delivery: '택배', 'let ~ know': '' }[await englishOf(page)]!
		);
		if (question < 3) await answer(page).press('Enter');
	}
	await gradeButton(page).click();
	await expect(markButton(page, 'delivery')).toHaveAttribute('aria-pressed', 'false');
});

test('says every answer is right once each wrong one is marked (AE5)', async ({ page }) => {
	await takeTest(page, { conference: '회합', delivery: '택배', 'let ~ know': '에게 알리다' });
	await markButton(page, 'conference').click();
	await markButton(page, 'delivery').click();
	await expect(page.getByText('3 / 3')).toBeVisible();
	await expect(page.getByText('모두 맞혔어요')).toBeVisible();
	await expect(cardsButton(page)).toHaveCount(0);
	await expect(markButton(page, 'delivery')).toBeFocused();

	await markButton(page, 'delivery').click();
	await expect(page.getByText('2 / 3')).toBeVisible();
	await expect(cardsButton(page)).toBeVisible();
});
