import { expect, test, type Page } from '@playwright/test';

const storageKey = 'toeicBasic.v2';
// Day 1 answer key in question order (d01-01 … d01-25).
const day1Answers = [1, 2, 0, 3, 1, 2, 0, 3, 2, 0, 1, 3, 0, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0];
const day1Ids = day1Answers.map((_, index) => `d01-${String(index + 1).padStart(2, '0')}`);
// Study page index of a Day 1 question: cover, 3 lessons and 2 guided pages come first.
const day1QuestionPage = (number: number) => (number <= 15 ? 5 + number : 8 + number);

const dayState = (page: number, extra = {}) => ({
	page,
	answers: {},
	graded: false,
	retry: null,
	mode: null,
	firstScore: null,
	...extra
});

async function seed(page: Page, days: object, mode = 'instant') {
	await page.goto('/');
	await page.evaluate(
		([key, value]) => localStorage.setItem(key, value),
		[storageKey, JSON.stringify({ version: 2, settings: { mode, rate: 1 }, days })]
	);
}

const option = (page: Page, letter: string) =>
	page.getByRole('button', { name: new RegExp(`^\\(${letter}\\)`) });
const dots = (page: Page) => page.getByRole('button', { name: /^실전 25문항 중/ });
const mapButton = (page: Page) => page.getByRole('button', { name: '문항 지도', exact: true });
const questionMap = (page: Page, day = 1) =>
	page.getByRole('dialog', { name: `Day ${day} 문항 지도` });
const cell = (page: Page, name: string) =>
	questionMap(page).getByRole('button', { name, exact: true });
const status = (page: Page) => page.getByRole('status').first();

test('starts a new Day in the grading mode chosen on its start page', async ({ page }) => {
	await page.goto('/day/1');
	await expect(page.getByRole('radio', { name: '한 문제씩 바로 확인' })).toBeChecked();
	await page.getByRole('radio', { name: '다 풀고 한 번에 채점' }).check();
	await page
		.getByRole('region', { name: '명사 자리' })
		.getByRole('button', { name: /^실전/ })
		.click();
	await expect(page.getByText('Part 5 · 단문 빈칸 · 1 / 25')).toBeVisible();

	await option(page, 'A').click();
	await expect(option(page, 'A')).toHaveAttribute('aria-pressed', 'true');
	await expect(status(page)).toHaveText('');
});

test('offers the default grading mode of the settings to a new Day', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: '설정' }).click();
	await page
		.getByRole('dialog', { name: '설정' })
		.getByRole('radio', { name: '다 풀고 채점' })
		.click();
	await page.keyboard.press('Escape');
	await page.goto('/day/2');
	await expect(page.getByRole('radio', { name: '다 풀고 한 번에 채점' })).toBeChecked();
});

test('reveals an answer instantly, marks its dot, keeps focus and survives a reload', async ({
	page
}) => {
	await seed(page, { 1: dayState(day1QuestionPage(1)) });
	await page.goto('/day/1');
	await expect(page.getByText('Part 5 · 단문 빈칸 · 1 / 25')).toBeVisible();
	await expect(page.getByText('실전 1 / 25')).toBeVisible();

	await option(page, 'A').click();
	await expect(status(page)).toHaveText('오답입니다 · 정답 (B)');
	await expect(option(page, 'A')).toBeFocused();
	await expect(dots(page)).toHaveAccessibleName('실전 25문항 중 1문항 풂, 맞힘 0, 틀림 1');
	await expect(page.getByRole('heading', { name: '해설' })).toBeVisible();
	// A revealed option stays focusable but inert: even a forced click changes nothing.
	await option(page, 'B').click({ force: true });
	await expect(status(page)).toHaveText('오답입니다 · 정답 (B)');

	await page.keyboard.press('ArrowRight');
	await expect(page.getByRole('heading', { name: 'Part 5 · 단문 빈칸 · 2 / 25' })).toBeFocused();
	await page.keyboard.press('3');
	await expect(status(page)).toHaveText('정답입니다');

	await page.reload();
	await expect(page.getByText('Part 5 · 단문 빈칸 · 2 / 25')).toBeVisible();
	await expect(status(page)).toHaveText('정답입니다');
});

test('shows only answered before an exam is graded, then grades it', async ({ page }) => {
	await seed(page, { 1: dayState(day1QuestionPage(1)) }, 'exam');
	await page.goto('/day/1');
	await option(page, 'A').click();
	await expect(option(page, 'A')).toHaveAttribute('aria-pressed', 'true');
	await option(page, 'B').click();
	await expect(status(page)).toHaveText('');
	await expect(dots(page)).toHaveAccessibleName('실전 25문항 중 1문항 풂');

	await mapButton(page).click();
	await expect(cell(page, '1번, 답함')).toBeVisible();
	await expect(questionMap(page).getByRole('button', { name: /맞힘|틀림/ })).toHaveCount(0);
	await questionMap(page).getByRole('button', { name: '지금까지 결과 보기' }).click();
	await expect(page.getByRole('heading', { name: '답안 1 / 25 작성' })).toBeVisible();
	await page.getByRole('button', { name: '채점하기' }).click();
	await expect(page.getByRole('heading', { name: 'Day 1 결과' })).toBeFocused();
	await expect(page.getByText('1 / 25', { exact: true })).toBeVisible();
	await expect(dots(page)).toHaveAccessibleName('실전 25문항 중 1문항 풂, 맞힘 1, 틀림 0');
});

test('names each map cell by its state and opens the question tapped', async ({ page }) => {
	const answers = { 'd01-01': 1, 'd01-04': 0 };
	await seed(page, { 1: dayState(day1QuestionPage(1), { answers, mode: 'instant' }) });
	await page.goto('/day/1');
	expect((await dots(page).boundingBox())!.height).toBeGreaterThanOrEqual(44);

	await page.keyboard.press('g');
	await expect(cell(page, '1번, 맞힘')).toBeVisible();
	await expect(cell(page, '4번, 틀림')).toBeVisible();
	const twelve = cell(page, '12번, 안 풂');
	expect((await twelve.boundingBox())!.height).toBeGreaterThanOrEqual(44);
	await twelve.click();
	await expect(questionMap(page)).toBeHidden();
	await expect(page.getByText('Part 5 · 단문 빈칸 · 12 / 25')).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Part 5 · 단문 빈칸 · 12 / 25' })).toBeFocused();
});

test('keeps a flag on the map after a reload', async ({ page }) => {
	await seed(page, { 1: dayState(day1QuestionPage(3)) });
	await page.goto('/day/1');
	const flag = page.getByRole('button', { name: '깃발', exact: true });
	await flag.click();
	await expect(flag).toHaveAttribute('aria-pressed', 'true');

	await page.reload();
	await expect(flag).toHaveAttribute('aria-pressed', 'true');
	await mapButton(page).click();
	await expect(cell(page, '3번, 안 풂, 깃발')).toBeVisible();
	await page.keyboard.press('g');
	await expect(questionMap(page)).toBeHidden();
	await page.keyboard.press('f');
	await expect(flag).toHaveAttribute('aria-pressed', 'false');
});

test('opens only the retried questions from the map during a retry', async ({ page }) => {
	const answers = Object.fromEntries(day1Ids.map((id, index) => [id, day1Answers[index]]));
	delete answers['d01-02'];
	const firstScore = { correct: 24, total: 25 };
	await seed(page, {
		1: dayState(0, { answers, mode: 'instant', retry: ['d01-02'], firstScore })
	});
	await page.goto('/day/1');
	await expect(page.getByText('Part 5 · 단문 빈칸 · 2 / 25')).toBeVisible();

	await mapButton(page).click();
	await expect(cell(page, '1번, 맞힘')).toBeDisabled();
	await expect(cell(page, '2번, 안 풂')).toBeEnabled();
	await expect(questionMap(page).getByRole('button', { name: /^(개념|따라 풀기)/ })).toHaveCount(0);
});

test('ignores study keys while a sheet is open', async ({ page }) => {
	await seed(page, { 1: dayState(day1QuestionPage(1)) });
	await page.goto('/day/1');
	const unchanged = async () => {
		await expect(page.getByText('Part 5 · 단문 빈칸 · 1 / 25')).toBeVisible();
		await expect(status(page)).toHaveText('');
		await expect(option(page, 'B')).toHaveAttribute('aria-pressed', 'false');
	};

	await page.getByRole('button', { name: '개념 다시 보기' }).click();
	const concept = page.getByRole('dialog', { name: '개념 다시 보기' });
	await expect(concept.getByRole('heading', { name: 'Part 5는 이런 문제입니다' })).toBeVisible();
	await page.keyboard.press('ArrowRight');
	await page.keyboard.press('2');
	await page.keyboard.press('Escape');
	await expect(concept).toBeHidden();
	await unchanged();

	await mapButton(page).click();
	await page.keyboard.press('ArrowRight');
	await page.keyboard.press('2');
	await page.keyboard.press('g');
	await expect(questionMap(page)).toBeHidden();
	await unchanged();
});

test('keeps the end of an explanation above the action bar', async ({ page }) => {
	await seed(page, {
		1: dayState(day1QuestionPage(1), { answers: { 'd01-01': 0 }, mode: 'instant' })
	});
	await page.goto('/day/1');
	await expect(page.getByRole('heading', { name: '해설' })).toBeVisible();
	await page.locator('#app-content').evaluate((region) => region.scrollTo(0, region.scrollHeight));

	const bar = (await page.getByRole('navigation', { name: '페이지 이동' }).boundingBox())!;
	const lastLine = (await page.locator('.explain > *').last().boundingBox())!;
	expect(lastLine.y + lastLine.height).toBeLessThanOrEqual(bar.y);
});

test('continues a started Day at its first unanswered question', async ({ page }) => {
	const answers = { 'd04-01': 0, 'd04-02': 0, 'd04-03': 0 };
	await seed(page, { 4: dayState(0, { answers, mode: 'instant' }) });
	await page.goto('/day/4');
	await expect(page.getByText('한 문제씩 바로 확인')).toBeVisible();
	await expect(page.getByRole('radio')).toHaveCount(0);

	await page.getByRole('button', { name: '이어서 하기' }).click();
	await expect(page.getByText('Part 5 · 단문 빈칸 · 4 / 25')).toBeVisible();
});

test('restarts a started Day after warning that misses and flags go too', async ({ page }) => {
	const answers = { 'd04-01': 0 };
	await seed(page, { 4: dayState(0, { answers, mode: 'exam', flags: ['d04-01'] }) });
	await page.goto('/day/4');
	const messages: string[] = [];
	page.on('dialog', (dialog) => {
		messages.push(dialog.message());
		void dialog.accept();
	});
	await page.getByRole('button', { name: '처음부터 다시 풀기' }).click();
	await expect(page.getByRole('radio', { name: '한 문제씩 바로 확인' })).toBeChecked();
	expect(messages).toEqual([expect.stringMatching(/틀린 기록과 깃발/)]);
});

test('opens the first practice question of a section from the start page', async ({ page }) => {
	await page.goto('/day/1');
	await page
		.getByRole('region', { name: 'Who 의문문' })
		.getByRole('button', { name: /^실전/ })
		.click();
	await expect(page.getByText('Part 2 · 질의응답 · 16 / 25')).toBeVisible();
	await expect(page.getByText('실전 16 / 25')).toBeVisible();
});

test('opens a Day saved before this version at its saved page', async ({ page }) => {
	const answers = { 'd01-01': 1 };
	await seed(page, { 1: dayState(day1QuestionPage(7), { answers, mode: 'instant' }) });
	await page.goto('/day/1');
	await expect(page.getByText('Part 5 · 단문 빈칸 · 7 / 25')).toBeVisible();
});

const openResult = async (page: Page) => {
	await mapButton(page).click();
	await questionMap(page).getByRole('button', { name: '지금까지 결과 보기' }).click();
};

// Regression: retrying the missed questions used to erase the first score.
test('keeps the first score through a retry of the missed questions', async ({ page }) => {
	const answers = Object.fromEntries(
		day1Ids.slice(0, 24).map((id, index) => [id, day1Answers[index]])
	);
	answers['d01-02'] = 0;
	await seed(page, { 1: dayState(day1QuestionPage(25), { answers, mode: 'instant' }) });
	await page.goto('/day/1');
	await option(page, 'A').click();
	await page.keyboard.press('ArrowRight');
	await expect(page.getByRole('heading', { name: 'Day 1 결과' })).toBeFocused();
	await expect(page.getByText('24 / 25', { exact: true })).toBeVisible();

	await page.getByRole('button', { name: '틀린 문제만 다시 풀기' }).click();
	await expect(page.getByText('Part 5 · 단문 빈칸 · 2 / 25')).toBeVisible();
	await page.goto('/');
	await expect(page.getByText('첫 점수 24 / 25 · 다시 푸는 중')).toBeVisible();

	await page.goto('/day/1');
	await option(page, 'C').click();
	await page.keyboard.press('ArrowRight');
	await expect(page.getByText('25 / 25', { exact: true })).toBeVisible();
	await expect(page.getByText('첫 점수 24 → 25', { exact: true })).toBeVisible();
	await page.goto('/');
	await expect(page.getByText('완료 · 첫 점수 24 / 25 → 25')).toBeVisible();
});

test('lists the questions still wrong and opens one only outside a retry', async ({ page }) => {
	const answers = Object.fromEntries(day1Ids.map((id, index) => [id, day1Answers[index]]));
	Object.assign(answers, { 'd01-02': 0, 'd01-05': 0 });
	const extra = { answers, mode: 'instant', firstScore: { correct: 23, total: 25 } };
	await seed(page, { 1: dayState(99, { ...extra, misses: { 'd01-02': 1, 'd01-05': 2 } }) });
	await page.goto('/day/1');
	await expect(page.getByRole('heading', { name: '아직 틀린 문제 2개' })).toBeVisible();
	await page.getByRole('button', { name: '5번 · Part 5 · 2번 틀림' }).click();
	await expect(page.getByText('Part 5 · 단문 빈칸 · 5 / 25')).toBeVisible();

	await openResult(page);
	await expect(page.getByRole('heading', { name: 'Day 1 결과' })).toBeFocused();
	await page.getByRole('button', { name: '틀린 문제만 다시 풀기' }).click();
	await expect(page.getByText('Part 5 · 단문 빈칸 · 2 / 25')).toBeVisible();

	// In a retry the list only shows what is left; '전체 페이지 보기' alone ends it (KTD13).
	await openResult(page);
	await expect(page.getByRole('heading', { name: '아직 틀린 문제 2개' })).toBeVisible();
	await expect(page.getByText('2번 · Part 5 · 1번 틀림')).toBeVisible();
	await expect(page.getByRole('button', { name: /^\d+번 ·/ })).toHaveCount(0);
	await expect(page.getByRole('link', { name: '목차로' })).toHaveAttribute('href', '/days');

	const messages: string[] = [];
	page.on('dialog', (dialog) => {
		messages.push(dialog.message());
		void dialog.accept();
	});
	await page.getByRole('button', { name: '처음부터 다시 풀기' }).click();
	await expect(page.getByRole('radio', { name: '한 문제씩 바로 확인' })).toBeChecked();
	expect(messages).toEqual([expect.stringMatching(/틀린 기록과 깃발/)]);
});

test('offers no retry of the missed questions before a first score', async ({ page }) => {
	const answers = Object.fromEntries(
		day1Ids.slice(0, 10).map((id, index) => [id, day1Answers[index]])
	);
	answers['d01-02'] = 0;
	await seed(page, { 1: dayState(day1QuestionPage(10), { answers, mode: 'instant' }) });
	await page.goto('/day/1');
	await openResult(page);
	await expect(page.getByRole('heading', { name: '아직 틀린 문제 1개' })).toBeVisible();
	await expect(page.getByRole('button', { name: '틀린 문제만 다시 풀기' })).toHaveCount(0);
});

test('links the next Day from a result, and none after Day 40', async ({ page }) => {
	await seed(page, { 3: dayState(99), 40: dayState(99) });
	await page.goto('/day/40');
	await expect(page.getByRole('heading', { name: 'Day 40 결과' })).toBeVisible();
	await expect(page.getByRole('heading', { name: '다음 할 일' })).toHaveCount(0);

	await page.goto('/day/3');
	await expect(page.getByRole('heading', { name: '다음 할 일' })).toBeVisible();
	await page.getByRole('link', { name: /Day 4 ·/ }).click();
	await expect(page.getByRole('heading', { level: 1 })).toContainText('Day 4');
});
