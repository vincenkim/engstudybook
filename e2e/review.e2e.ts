import { expect, test, type Locator, type Page } from '@playwright/test';

const storageKey = 'toeicBasic.v2';
// Answer keys in question order (d01-01 … d01-25, d02-01 … d02-25).
const day1Answers = [1, 2, 0, 3, 1, 2, 0, 3, 2, 0, 1, 3, 0, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0];
const day2Answers = [1, 3, 0, 2, 1, 3, 0, 2, 2, 0, 1, 3, 2, 0, 1, 1, 0, 2, 0, 2, 1, 0, 1, 2, 0];
const day1ResultPage = 34;

const allRight = (day: number, key: number[]) =>
	Object.fromEntries(
		key.map((answer, index) => [
			`d${String(day).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}`,
			answer
		])
	);

const dayState = (page: number, extra = {}) => ({
	page,
	answers: {},
	graded: false,
	retry: null,
	mode: 'instant',
	firstScore: null,
	...extra
});

async function seed(page: Page, days: object) {
	await page.goto('/');
	await page.evaluate(
		([key, value]) => localStorage.setItem(key, value),
		[storageKey, JSON.stringify({ version: 2, settings: { mode: 'instant', rate: 1 }, days })]
	);
}

const dayGroup = (page: Page, day: number) =>
	page.getByRole('region', { name: new RegExp(`^Day ${day} `) });
const listed = (group: Locator, number: number) =>
	group.getByRole('listitem').filter({ hasText: new RegExp(`^${number}번 ·`) });
const start = (page: Page) => page.getByRole('button', { name: /^틀린 문제 \d+개 다시 풀기$/ });
const option = (scope: Page | Locator, letter: string) =>
	scope.getByRole('button', { name: new RegExp(`^\\(${letter}\\)`) });
const status = (page: Page) => page.getByRole('status').first();
const part5Heading = (page: Page, number: number) =>
	page.getByRole('heading', { name: `Part 5 · 단문 빈칸 · ${number} / 25` });
const setQuestion = (page: Page, number: number) =>
	page.getByRole('region', { name: `${number}번`, exact: true });
const passage = (page: Page) => page.getByRole('region', { name: '지문', exact: true });

test('lists a wrong answer of an older record by Day (AE1)', async ({ page }) => {
	// Saved without miss counts: Day 3 question 7 answered (B), question 16 (Part 2) answered (B).
	await seed(page, { 3: dayState(12, { answers: { 'd03-07': 1, 'd03-16': 1 } }) });
	await page.goto('/review');
	const day3 = dayGroup(page, 3);
	await expect(listed(day3, 7)).toContainText('1번 틀림');
	await expect(listed(day3, 7).locator('[lang="en"]')).toContainText('but is more expensive.');
	// A Part 2 summary names the question kind and keeps the script hidden.
	await expect(listed(day3, 16)).toContainText('듣기 · 질문 응답');
	await expect(listed(day3, 16)).not.toContainText('deadline');
	await expect(start(page)).toHaveText('틀린 문제 2개 다시 풀기');
});

test('leaves out an exam Day waiting for its grading (AE2)', async ({ page }) => {
	// Day 5: ten exam answers, not graded. Day 4: an exam retry not graded yet.
	const day5 = Object.fromEntries(
		Array.from({ length: 10 }, (_, index) => [`d05-${String(index + 1).padStart(2, '0')}`, 0])
	);
	await seed(page, {
		3: dayState(12, { answers: { 'd03-07': 1 } }),
		4: dayState(5, {
			mode: 'exam',
			answers: { 'd04-01': 0 },
			retry: ['d04-01'],
			firstScore: { correct: 24, total: 25 },
			misses: { 'd04-01': 1 }
		}),
		5: dayState(14, { mode: 'exam', answers: day5 })
	});
	await page.goto('/review');
	await expect(dayGroup(page, 3)).toBeVisible();
	await expect(dayGroup(page, 4)).toHaveCount(0);
	await expect(dayGroup(page, 5)).toHaveCount(0);
	await expect(start(page)).toHaveText('틀린 문제 1개 다시 풀기');
});

test('takes a right answer off the list without skipping the next question (AE3)', async ({
	page
}) => {
	// Day 1: first score 21, now 22, with questions 4, 9 and 12 still wrong.
	const answers = allRight(1, day1Answers);
	for (const id of ['d01-04', 'd01-09', 'd01-12']) answers[id] = (answers[id] + 1) % 4;
	const firstScore = { correct: 21, total: 25 };
	await seed(page, { 1: dayState(day1ResultPage, { answers, firstScore }) });
	await page.goto('/review');
	await start(page).click();
	await expect(part5Heading(page, 4)).toBeFocused();
	await page.keyboard.press('ArrowRight');
	await expect(part5Heading(page, 9)).toBeFocused();
	await expect(page.getByText('Day 1 · 2 / 3')).toBeVisible();

	// The Day's old wrong answer (D) stays hidden until the question is answered again.
	await expect(option(page, 'D')).toHaveAttribute('aria-pressed', 'false');
	await expect(status(page)).toHaveText('');
	await option(page, 'C').click();
	await expect(status(page)).toHaveText('정답입니다');
	await expect(page.getByRole('heading', { name: '해설' })).toBeVisible();
	await page.getByRole('button', { name: '다음', exact: true }).click();
	await expect(part5Heading(page, 12)).toBeFocused();

	await page.getByRole('button', { name: '나가기' }).click();
	const day1 = dayGroup(page, 1);
	await expect(listed(day1, 4)).toBeVisible();
	await expect(listed(day1, 12)).toBeVisible();
	await expect(listed(day1, 9)).toHaveCount(0);
	await page.goto('/day/1');
	await expect(page.getByText('첫 점수 21 → 23')).toBeVisible();
});

test('keeps a question missed again with its second miss, then sums up', async ({ page }) => {
	await seed(page, { 3: dayState(12, { answers: { 'd03-07': 1 } }) });
	await page.goto('/review');
	await start(page).click();
	await expect(part5Heading(page, 7)).toBeFocused();
	await page.keyboard.press('3');
	await expect(status(page)).toHaveText('오답입니다 · 정답 (A)');

	await page.getByRole('button', { name: '마치기' }).click();
	await expect(page.getByRole('heading', { level: 1 })).toBeFocused();
	await expect(page.getByText('1개 중 0개 맞힘')).toBeVisible();
	await expect(page.getByRole('link', { name: '오늘로' })).toHaveAttribute('href', '/');
	await page.getByRole('button', { name: '복습으로' }).click();
	await expect(listed(dayGroup(page, 3), 7)).toContainText('2번 틀림');
});

test('keeps the questions waiting in a retry on the list (AE4)', async ({ page }) => {
	// Day 2 retry started: the wrong answers of questions 3 and 9 were cleared.
	const answers = allRight(2, day2Answers);
	delete answers['d02-03'];
	delete answers['d02-09'];
	const firstScore = { correct: 23, total: 25 };
	await seed(page, { 2: dayState(0, { answers, firstScore, retry: ['d02-03', 'd02-09'] }) });
	await page.goto('/review');
	const day2 = dayGroup(page, 2);
	await expect(day2.getByRole('listitem')).toHaveCount(2);
	await expect(listed(day2, 3)).toContainText('1번 틀림');
	await expect(listed(day2, 9)).toContainText('1번 틀림');
});

test('shows a set passage with only the question to review', async ({ page }) => {
	// Day 25 email, questions 1–3: only 2 is wrong.
	const answers = { 'd25-01': 1, 'd25-02': 0, 'd25-03': 3 };
	await seed(page, { 25: dayState(3, { answers }) });
	await page.goto('/review');
	await start(page).click();
	await expect(passage(page)).toBeVisible();
	await expect(setQuestion(page, 2)).toBeVisible();
	await expect(setQuestion(page, 1)).toHaveCount(0);
	await expect(setQuestion(page, 3)).toHaveCount(0);
	await option(setQuestion(page, 2), 'C').click();
	await expect(setQuestion(page, 2).getByRole('status')).toHaveText('정답입니다');
});

test('shows the questions of a set left between them on one screen', async ({ page }) => {
	// Day 25 email, questions 1–3: 1 and 3 are wrong, 2 is right.
	const answers = { 'd25-01': 0, 'd25-02': 2, 'd25-03': 0 };
	await seed(page, { 25: dayState(3, { answers }) });
	await page.goto('/review');
	await start(page).click();
	await expect(page.getByText('Part 7 · 독해 · 1, 3 / 25')).toBeVisible();
	await expect(passage(page)).toBeVisible();
	await expect(setQuestion(page, 1)).toBeVisible();
	await expect(setQuestion(page, 2)).toHaveCount(0);
	await option(setQuestion(page, 1), 'B').click();
	await page.getByRole('button', { name: '다음', exact: true }).click();
	await expect(setQuestion(page, 3)).toBeVisible();
	await expect(page.getByText('Day 25 · 2 / 2')).toBeVisible();
});

test('numbers the blank of a Part 6 question as the list does', async ({ page }) => {
	// Day 17 email, questions 13–16: only 14, blank (2) of the passage, is wrong.
	await seed(page, { 17: dayState(18, { answers: { 'd17-13': 2, 'd17-14': 0 } }) });
	await page.goto('/review');
	await expect(listed(dayGroup(page, 17), 14)).toContainText('빈칸 (2) · 이메일');
	await start(page).click();
	await expect(setQuestion(page, 14)).toContainText('빈칸 (2)');
	await expect(passage(page).locator('.blank[data-current]')).toHaveText('(2)');
	await expect(passage(page).locator('.blank', { hasText: /^\(\d\)/ })).toHaveCount(1);
	await option(setQuestion(page, 14), 'B').click();
	await expect(passage(page).locator('.blank.filled')).toHaveText('(2) Anything');
});

test('keeps the set translation closed while the Day has set questions unanswered', async ({
	page
}) => {
	// Day 17 email, questions 13–16: 14 is wrong, 15 and 16 are not answered yet (KTD8).
	await seed(page, { 17: dayState(18, { answers: { 'd17-13': 2, 'd17-14': 0 } }) });
	await page.goto('/review');
	await start(page).click();
	await option(setQuestion(page, 14), 'B').click();
	await expect(setQuestion(page, 14).getByRole('status')).toBeVisible();
	await expect(page.getByRole('heading', { name: '지문 해석' })).toHaveCount(0);
});

test('opens the set translation once the whole set is answered', async ({ page }) => {
	// Day 25 email, questions 1–3: only 2 is wrong.
	const answers = { 'd25-01': 1, 'd25-02': 0, 'd25-03': 3 };
	await seed(page, { 25: dayState(3, { answers }) });
	await page.goto('/review');
	await start(page).click();
	await expect(page.getByRole('heading', { name: '지문 해석' })).toHaveCount(0);
	await option(setQuestion(page, 2), 'C').click();
	await expect(page.getByRole('heading', { name: '지문 해석' })).toBeVisible();
});

test('says there is nothing to review and links to the workbook', async ({ page }) => {
	await page.goto('/review');
	await expect(page.getByRole('heading', { name: '틀린 문제가 없어요' })).toBeVisible();
	await expect(start(page)).toHaveCount(0);
	await page.getByRole('main').getByRole('link', { name: '문제집으로' }).click();
	await expect(page).toHaveURL(/\/days$/);
});
