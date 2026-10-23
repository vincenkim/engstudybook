import { expect, test, type Locator, type Page } from '@playwright/test';

const heading = (page: Page) => page.getByRole('heading', { level: 1 });

/** The four Week triggers of the wordbook, in order. */
const weeks = (page: Page) => page.getByRole('main').getByRole('button', { name: /^Week \d/ });

async function seedWords(page: Page, record: object) {
	await page.goto('/');
	await page.evaluate(
		(value) => localStorage.setItem('toeicBasic.words', value),
		JSON.stringify({ version: 1, entries: {}, saved: {}, ...record })
	);
}

async function expectOpenWeeks(page: Page, expanded: string[]) {
	await expect(weeks(page)).toHaveCount(4);
	for (const [index, state] of expanded.entries()) {
		await expect(weeks(page).nth(index)).toHaveAttribute('aria-expanded', state);
	}
}

const rows = (page: Page) => page.getByRole('main').getByRole('listitem');
const statusChip = (row: Locator) => row.getByRole('button', { name: /^상태 / });
const modes = (page: Page) => page.getByRole('group', { name: '보기 방식' });
const filters = (page: Page) => page.getByRole('group', { name: '거르기' });
const cardButton = (page: Page) => page.getByRole('button', { name: /^카드로 외우기/ });
const notice = (page: Page) => page.getByRole('main').getByRole('status');
const known = { status: 'known', reviewed: '2026-10-20', streak: 1 };

interface FakeSpeech {
	spoken: { text: string; onerror: () => void }[];
	cancels: number;
}

/** Records what the app asks speechSynthesis to say, with the given voices installed. */
async function fakeSpeech(page: Page, voices: { name: string; lang: string }[]) {
	await page.addInitScript((voices) => {
		const fake: FakeSpeech = { spoken: [], cancels: 0 };
		Object.assign(window, { fake });
		window.SpeechSynthesisUtterance = class {
			text: string;
			constructor(text: string) {
				this.text = text;
			}
		} as never;
		speechSynthesis.getVoices = () => voices as never;
		speechSynthesis.speak = (utterance) => void fake.spoken.push(utterance as never);
		speechSynthesis.cancel = () => void fake.cancels++;
	}, voices);
	return () => page.evaluate(() => (window as unknown as { fake: FakeSpeech }).fake);
}

test('covers the meanings first and covers every row again when the mode changes', async ({
	page
}) => {
	await page.goto('/words/w1d1');
	await expect(modes(page).getByRole('button', { name: '뜻 가리기' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	const third = rows(page).nth(2);
	await expect(third).toContainText('attend');
	await expect(third).not.toContainText('참석하다');
	await third.getByRole('button', { name: '3번 뜻 보기' }).click();
	await expect(third.locator(':focus')).toHaveText(/참석하다/);
	await expect(page.getByRole('button', { name: /번 뜻 보기$/ })).toHaveCount(49);

	await modes(page).getByRole('button', { name: '단어 가리기' }).click();
	await expect(page.getByRole('button', { name: /번 뜻 보기$/ })).toHaveCount(0);
	await expect(page.getByRole('button', { name: /번 단어 보기$/ })).toHaveCount(50);
	// A covered row never names its word, not even to a screen reader.
	await expect(third).not.toContainText('attend');
	await expect(page.getByRole('button', { name: /attend/ })).toHaveCount(0);
	await expect(third).toContainText('참석하다');
	await third.getByRole('button', { name: '3번 단어 보기' }).click();
	await expect(third.locator(':focus')).toHaveText(/attend/);

	await modes(page).getByRole('button', { name: '뜻 가리기' }).click();
	await expect(page.getByRole('button', { name: /번 뜻 보기$/ })).toHaveCount(50);
});

test('moves a status on from its chip, keeps focus there and saves it', async ({ page }) => {
	await page.goto('/words/w1d1');
	const chip = statusChip(rows(page).first());
	await expect(chip).toHaveAccessibleName('상태 애매, 눌러서 바꾸기');
	await chip.click();
	await expect(chip).toBeFocused();
	await expect(chip).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
	await page.reload();
	await expect(chip).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
});

test('keeps the rows of a filter while their status changes', async ({ page }) => {
	await page.goto('/words/w1d1');
	await expect(filters(page).getByRole('button')).toHaveText([
		'전체 50',
		'처음 25',
		'애매 18',
		'완벽 7',
		'별표 3'
	]);
	await filters(page).getByRole('button', { name: '처음 25' }).click();
	await expect(filters(page).getByRole('button', { name: '처음 25' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await expect(rows(page)).toHaveCount(25);
	const chip = statusChip(rows(page).first());
	await chip.click();
	await chip.click();
	await expect(chip).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
	await expect(rows(page)).toHaveCount(25);
	await expect(filters(page).getByRole('button')).toHaveText([
		'전체 50',
		'처음 24',
		'애매 18',
		'완벽 8',
		'별표 3'
	]);
	await expect(cardButton(page)).toHaveText('카드로 외우기 · 외울 단어 42개');
});

test('offers the star and 안 봄 filters only on Days that have such words', async ({ page }) => {
	await page.goto('/words/w1d1');
	await filters(page).getByRole('button', { name: '별표 3' }).click();
	await expect(rows(page)).toHaveCount(3);
	for (const [index, word] of ['desirable', 'incidental', 'relevant'].entries()) {
		await expect(rows(page).nth(index)).toContainText(word);
	}
	const star = rows(page).first().getByRole('button', { name: '15번 별표' });
	await expect(star).toHaveAttribute('aria-pressed', 'true');
	await star.click();
	await expect(star).toHaveAttribute('aria-pressed', 'false');
	await expect(rows(page)).toHaveCount(3);
	await expect(filters(page).getByRole('button', { name: /^별표/ })).toHaveText('별표 2');

	await page.goto('/words/w1d4');
	await expect(filters(page).getByRole('button', { name: /^(별표|안 봄)/ })).toHaveCount(0);
	await page.goto('/words/w3d3');
	await filters(page).getByRole('button', { name: '안 봄 2' }).click();
	await expect(rows(page)).toHaveCount(2);
	await expect(rows(page).first()).toContainText('balance');
	await expect(rows(page).last()).toContainText('besides');
});

test('marks the key senses in bold', async ({ page }) => {
	await page.goto('/words/w1d3');
	await modes(page).getByRole('button', { name: '다 보기' }).click();
	await expect(rows(page).first().locator('strong')).toHaveText('(규칙 등을) 지키다');
	await expect(rows(page).first()).toContainText('자 (규칙 등을) 지키다, 준수하다(by)');
	await expect(page.getByRole('main').locator('strong')).toHaveCount(6);
});

test('reads a word aloud and says when speaking fails', async ({ page }) => {
	const speech = await fakeSpeech(page, [{ name: 'Test Voice', lang: 'en-US' }]);
	await page.goto('/words/w1d1');
	await expect(notice(page)).toHaveText('');
	await page.getByRole('button', { name: '1번 발음 듣기', exact: true }).click();
	await expect
		.poll(async () => (await speech()).spoken.map(({ text }) => text))
		.toEqual(['additional']);

	await page.evaluate(() => (window as unknown as { fake: FakeSpeech }).fake.spoken[0].onerror());
	await expect(notice(page)).toHaveText('발음을 재생하지 못했어요.');
	await page.getByRole('button', { name: '2번 발음 듣기', exact: true }).click();
	await expect(notice(page)).toHaveText('');
	expect((await speech()).spoken.map(({ text }) => text)).toEqual(['additional', 'applicant']);

	const { cancels } = await speech();
	await page.getByRole('link', { name: '단어장으로 돌아가기' }).click();
	await expect(heading(page)).toHaveText('단어장');
	expect((await speech()).cancels).toBe(cancels + 1);
});

test('says so when the device has no English voice', async ({ page }) => {
	await fakeSpeech(page, []);
	await page.goto('/words/w1d1');
	await page.getByRole('button', { name: '1번 발음 듣기', exact: true }).click();
	await expect(notice(page)).toContainText('영어 음성을 찾지 못했습니다');
});

test('turns the card button off when every word of the Day is 완벽', async ({ page }) => {
	await page.goto('/words/w1d1');
	await expect(cardButton(page)).toBeEnabled();
	await expect(cardButton(page)).toHaveText('카드로 외우기 · 외울 단어 43개');

	const entries = Object.fromEntries(
		Array.from({ length: 50 }, (_, index) => [`w1d1-${String(index + 1).padStart(2, '0')}`, known])
	);
	await seedWords(page, { entries });
	await page.goto('/words/w1d1');
	await expect(cardButton(page)).toBeDisabled();
	await expect(cardButton(page)).toHaveAccessibleDescription('외울 단어가 없어요');
	await expect(page.getByText('외울 단어가 없어요')).toBeVisible();
});

test('keeps the last row clear of the card button and remembers the Day', async ({ page }) => {
	await page.goto('/words/w2d3');
	await expect(rows(page)).toHaveCount(52);
	await page.locator('#app-content').evaluate((region) => region.scrollTo(0, region.scrollHeight));
	const covered = await rows(page)
		.last()
		.evaluate((row) => {
			const { left, width, bottom } = row.getBoundingClientRect();
			return !row.contains(document.elementFromPoint(left + width / 2, bottom - 2));
		});
	expect(covered).toBe(false);

	await page.getByRole('link', { name: '단어장으로 돌아가기' }).click();
	await expectOpenWeeks(page, ['false', 'true', 'false', 'false']);
});

test('shows a status changed in another tab without reloading', async ({ page, context }) => {
	const other = await context.newPage();
	await page.goto('/words/w1d1');
	await other.goto('/words/w1d1');
	await statusChip(rows(page).first()).click();
	await expect(statusChip(rows(other).first())).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
});

test('leaves the word record as it is when the workbook saves', async ({ page }) => {
	await seedWords(page, { entries: { 'w1d1-05': known }, lastDay: 'w1d1' });
	const read = (key: string) => page.evaluate((key) => localStorage.getItem(key), key);
	const words = await read('toeicBasic.words');
	await page.goto('/');
	await page.getByRole('button', { name: '설정' }).click();
	await page.getByRole('dialog', { name: '설정' }).getByRole('radio', { name: '느리게' }).click();
	await expect.poll(async () => JSON.parse((await read('toeicBasic.v2'))!).settings.rate).toBe(0.8);
	expect(await read('toeicBasic.words')).toBe(words);
});
