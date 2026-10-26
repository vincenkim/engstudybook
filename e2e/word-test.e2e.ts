import { expect, test, type Page } from '@playwright/test';

const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const menu = (page: Page) => page.getByRole('navigation', { name: '주 메뉴' });
const range = (page: Page, name: string) => page.getByRole('radio', { name, exact: true });
const chip = (page: Page, group: string, name: string) =>
	page.getByLabel(group, { exact: true }).getByRole('radio', { name, exact: true });
const start = (page: Page) => page.getByRole('button', { name: /^(\d+문제로 시작|시작)$/ });
const answer = (page: Page) => page.getByRole('textbox');
const counter = (page: Page) => page.getByRole('main').getByRole('status');
const nextButton = (page: Page) => page.getByRole('button', { name: '다음', exact: true });
const gradeButton = (page: Page) => page.getByRole('button', { name: '채점하기' });

const savedWord = (word: string, meaning: string) => ({ word, meanings: [meaning], sources: [] });
/** Three saved words with meanings that tell them apart, so a test of 담은 단어 can be answered. */
const threeWords = {
	delay: savedWord('delay', '지연'),
	'take leave': savedWord('take leave', '휴가를 내다'),
	refund: savedWord('refund', '환불')
};

async function seedWords(page: Page, record: object) {
	await page.goto('/');
	await page.evaluate(
		(value) => localStorage.setItem('toeicBasic.words', value),
		JSON.stringify({ version: 1, entries: {}, saved: {}, ...record })
	);
}

/** Starts a test of the saved words, whatever order the questions come in. */
async function startSaved(page: Page, saved: object = threeWords) {
	await seedWords(page, { saved });
	await page.goto('/words/test');
	await range(page, '담은 단어').check();
	await start(page).click();
}

/** The meaning the question shows, which names the answer box. */
const meaningOf = (page: Page) =>
	answer(page).evaluate(
		(input) => document.getElementById(input.getAttribute('aria-labelledby')!)!.textContent!
	);

/** The English of the saved word whose meaning the question shows. */
async function rightAnswer(page: Page) {
	const meaning = await meaningOf(page);
	return Object.values(threeWords).find(({ meanings }) => meaning.includes(meanings[0]))!.word;
}

const pressEnter = (page: Page, init: object) =>
	answer(page).evaluate((input, init) => {
		const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, ...init });
		Object.defineProperty(event, 'keyCode', { value: 'keyCode' in init ? init.keyCode : 13 });
		input.dispatchEvent(event);
	}, init);

test('opens the test from the wordbook on today’s Day with 20 questions', async ({ page }) => {
	await page.goto('/words');
	await page.getByRole('link', { name: /^단어시험/ }).click();
	await expect(page).toHaveURL(/\/words\/test$/);
	await expect(heading(page)).toHaveText('단어시험');
	await expect(page).toHaveTitle('단어시험 · 토익 문제집');
	await expect(range(page, 'Day')).toBeChecked();
	await expect(chip(page, 'Week', '1')).toHaveAttribute('aria-checked', 'true');
	await expect(chip(page, 'Day', '1')).toHaveAttribute('aria-checked', 'true');
	await expect(chip(page, '문항 수', '20')).toHaveAttribute('aria-checked', 'true');
	await expect(start(page)).toHaveText('20문제로 시작');
	await page.getByRole('link', { name: '단어장으로 돌아가기' }).click();
	await expect(heading(page)).toHaveText('단어장');
});

test('starts with every word of a Day shorter than the count (AE1)', async ({ page }) => {
	await page.goto('/words/test');
	await chip(page, 'Day', '4').click();
	await chip(page, '문항 수', '50').click();
	await expect(start(page)).toHaveText('49문제로 시작');
	await range(page, 'Week').check();
	await expect(start(page)).toHaveText('50문제로 시작');
});

test('turns the start off with the reason when a range has no words to test', async ({ page }) => {
	await page.goto('/words/test');
	await range(page, '담은 단어').check();
	await expect(start(page)).toBeDisabled();
	await expect(start(page)).toHaveAccessibleDescription('담은 단어가 없어요');

	// AE2: a saved word with a placeholder has no spelling to type.
	await seedWords(page, { saved: { 'let ~ know': savedWord('let ~ know', '~에게 알리다') } });
	await page.goto('/words/test');
	await range(page, '담은 단어').check();
	await expect(start(page)).toBeDisabled();
	await expect(start(page)).toHaveAccessibleDescription(
		'담은 단어 1개 모두 ~·A/B 같은 표현이라 빠져요'
	);

	await seedWords(page, {
		saved: { delay: threeWords.delay, 'let ~ know': savedWord('let ~ know', '~에게 알리다') }
	});
	await page.goto('/words/test');
	await range(page, '담은 단어').check();
	await expect(start(page)).toHaveText('1문제로 시작');
	await expect(page.getByText('~·A/B 같은 표현이 든 1개는 빠져요')).toBeVisible();

	const starred = [
		'w1d1-15',
		'w1d1-24',
		'w1d1-42',
		'w1d2-21',
		'w1d2-27',
		'w1d2-35',
		'w1d2-45',
		'w1d2-46'
	];
	await seedWords(page, {
		entries: Object.fromEntries(starred.map((id) => [id, { star: false }]))
	});
	await page.goto('/words/test');
	await range(page, '별표').check();
	await expect(start(page)).toBeDisabled();
	await expect(start(page)).toHaveAccessibleDescription('별표한 단어가 없어요');
});

test('hides the phone tab bar and keeps the wordbook tab current', async ({ page }, testInfo) => {
	await page.goto('/words/test');
	if (testInfo.project.name === 'phone') await expect(menu(page)).toBeHidden();
	else
		await expect(menu(page).getByRole('link', { name: '단어장' })).toHaveAttribute(
			'aria-current',
			'page'
		);
});

test('asks for the English of each meaning and keeps the answers while moving', async ({
	page
}) => {
	await startSaved(page);
	await expect(counter(page)).toContainText('1 / 3');
	await expect(answer(page)).toBeFocused();
	await expect(page.getByText(/^첫 글자 [drt]/)).toBeAttached();

	const first = await rightAnswer(page);
	await answer(page).fill(first);
	await answer(page).press('Enter');
	await expect(counter(page)).toContainText('2 / 3');
	await expect(answer(page)).toBeFocused();
	await expect(answer(page)).toHaveValue('');

	await page.getByRole('button', { name: '이전' }).click();
	await expect(counter(page)).toContainText('1 / 3');
	await expect(answer(page)).toHaveValue(first);
	await expect(answer(page)).toBeFocused();
	await nextButton(page).click();
	await expect(counter(page)).toContainText('2 / 3');
});

test('moves on once for an Enter that ends a Korean composition (AE5)', async ({ page }) => {
	await startSaved(page);
	await pressEnter(page, { isComposing: true, keyCode: 229 });
	await answer(page).evaluate((input) =>
		input.dispatchEvent(new CompositionEvent('compositionend'))
	);
	await pressEnter(page, {});
	await expect(counter(page)).toContainText('1 / 3');
	await answer(page).evaluate((input) =>
		input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }))
	);
	await pressEnter(page, {});
	await expect(counter(page)).toContainText('2 / 3');
});

test('grades only from the button and says how many answers are blank', async ({ page }) => {
	await startSaved(page);
	await answer(page).press('Enter');
	await answer(page).fill(await rightAnswer(page));
	await answer(page).press('Enter');
	await expect(counter(page)).toContainText('3 / 3');
	await answer(page).press('Enter');
	await expect(gradeButton(page)).toBeFocused();
	await expect(
		page.getByText('쓰지 않은 답이 2개 있어요. 채점하면 틀린 것으로 쳐요.')
	).toBeVisible();
	await gradeButton(page).click();
	await expect(heading(page)).toHaveText('시험 결과');
});

test('asks before leaving with answers, and drops the test on reload', async ({ page }) => {
	await startSaved(page);
	await page.getByRole('button', { name: '나가기' }).click();
	await expect(start(page)).toBeVisible();

	await start(page).click();
	await answer(page).fill('delay');
	const messages: string[] = [];
	page.once('dialog', (dialog) => {
		messages.push(dialog.message());
		void dialog.accept();
	});
	await page.getByRole('button', { name: '나가기' }).click();
	expect(messages).toEqual(['지금까지 쓴 답이 사라져요. 시험을 그만둘까요?']);
	await expect(range(page, '담은 단어')).toBeChecked();

	await start(page).click();
	await page.reload();
	await expect(start(page)).toBeVisible();
});

test('never shows English in the meanings of a Day (AE3)', async ({ page }) => {
	await page.goto('/words/test');
	await chip(page, '문항 수', '50').click();
	await start(page).click();
	for (let question = 1; question <= 50; question++) {
		await expect(counter(page)).toContainText(`${question} / 50`);
		expect(await meaningOf(page)).not.toMatch(/[A-Za-z]/);
		if (question < 50) await answer(page).press('Enter');
	}
});
