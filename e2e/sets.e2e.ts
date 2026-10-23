import { expect, test, type Locator, type Page } from '@playwright/test';

const storageKey = 'toeicBasic.v2';

// Study pages (cover at 0) of the sets used here, with their questions and answers.
const day25Email = 3; // Part 7, questions 1–3: B, C, D
const day25Talk = 8; // Part 3, questions 14–16
const day17Notice = 18; // Part 6, questions 13–16: C, B, A, D
const day36Double = 4; // Part 7 with two passages, questions 4–8
const day1Response = 24; // Part 2, question 16

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

const question = (page: Page, number: number) =>
	page.getByRole('region', { name: `${number}번`, exact: true });
const option = (scope: Locator, letter: string) =>
	scope.getByRole('button', { name: new RegExp(`^\\(${letter}\\)`) });
const passage = (page: Page) => page.getByRole('region', { name: '지문', exact: true });
const next = (page: Page) => page.getByRole('button', { name: '다음', exact: true });
const sideBySide = (page: Page) => page.viewportSize()!.width >= 1024;

/** Answers a set question; narrow screens show one at a time, so 다음 brings the next one. */
async function answer(page: Page, number: number, letter: string) {
	const target = question(page, number);
	if (!(await target.isVisible())) await next(page).click();
	await option(target, letter).click();
}

test('opens the passage translation only once every question is answered', async ({ page }) => {
	await seed(page, { 25: dayState(day25Email) });
	await page.goto('/day/25');
	await expect(page.getByText('Part 7 · 독해 · 1–3 / 25')).toBeVisible();
	const translation = page.getByRole('heading', { name: '지문 해석' });

	await answer(page, 1, 'B');
	await answer(page, 2, 'C');
	await expect(question(page, 2).getByRole('status')).toHaveText('정답입니다');
	await expect(translation).toHaveCount(0);
	await expect(page.getByRole('button', { name: /해석/ })).toHaveCount(0);
	await answer(page, 3, 'D');
	await expect(translation).toBeVisible();
});

test('hides right and wrong and the translation of an exam before grading', async ({ page }) => {
	await seed(page, { 17: dayState(day17Notice) }, 'exam');
	await page.goto('/day/17');
	await expect(page.getByText('Part 6 · 장문 빈칸 · 13–16 / 25')).toBeVisible();

	await answer(page, 13, 'A');
	await answer(page, 14, 'B');
	// The passage marks the blank of the current question.
	await expect(passage(page).locator('.blank[data-current]')).toHaveText('(2)');
	if (sideBySide(page)) {
		await expect(question(page, 13).getByRole('button')).toHaveAccessibleName(/^13번 답함/);
	}
	await answer(page, 15, 'A');
	await answer(page, 16, 'D');
	await expect(page.getByRole('main')).not.toContainText(/맞힘|틀림|정답/);
	await expect(page.getByRole('button', { name: /해석/ })).toHaveCount(0);
	await expect(page.getByRole('heading', { name: /해석/ })).toHaveCount(0);
});

test('stacks two passages in the panel under their own titles', async ({ page }) => {
	await seed(page, { 36: dayState(day36Double) });
	await page.goto('/day/36');
	const first = passage(page).getByText('지문 1 · 안내문');
	const second = passage(page).getByText('지문 2 · 이메일');
	await expect(first).toBeVisible();
	await expect(second).toBeVisible();
	expect((await first.boundingBox())!.y).toBeLessThan((await second.boundingBox())!.y);
});

test('shows every question of a conversation on one screen', async ({ page }) => {
	await seed(page, { 25: dayState(day25Talk) });
	await page.goto('/day/25');
	await expect(page.getByText('Part 3 · 대화 · 14–16 / 25')).toBeVisible();
	for (const number of [14, 15, 16]) {
		await expect(option(question(page, number), 'A')).toBeVisible();
	}
	await expect(page.getByText(/^문제 \d \/ \d$/)).toHaveCount(0);
});

test('shows the script of a conversation on request', async ({ page }) => {
	await seed(page, { 25: dayState(day25Talk) });
	await page.goto('/day/25');
	await expect(page.getByText('Part 3 · 대화 · 14–16 / 25')).toBeVisible();
	await page.getByRole('button', { name: '스크립트 보기' }).click();
	await expect(page.locator('.passage b').first()).toHaveText(/^(남|여)\d?$/);
});

test('lists the listening order and offers a restart', async ({ page }) => {
	await seed(page, { 1: dayState(day1Response) });
	await page.goto('/day/1');
	await expect(page.getByText('Part 2 · 질의응답 · 16 / 25')).toBeVisible();
	const order = page.getByRole('list', { name: '듣기 순서' });
	await expect(order.getByRole('listitem')).toHaveText(['질문', 'A', 'B', 'C']);
	await expect(page.getByRole('button', { name: '처음부터' })).toBeVisible();
	await expect(page.getByRole('button', { name: '스크립트 보기' })).toBeVisible();

	await seed(page, { 25: dayState(day25Talk) });
	await page.goto('/day/25');
	await expect(order.getByRole('listitem')).not.toHaveCount(0);
	await expect(order.getByRole('listitem').first()).toHaveText('1');
});

test('keeps a speed chosen on the page in the settings', async ({ page }) => {
	await seed(page, { 1: dayState(day1Response) });
	await page.goto('/day/1');
	const speed = page.getByRole('group', { name: '음성 속도' });
	await expect(speed.getByRole('button', { name: '1배' })).toHaveAttribute('aria-pressed', 'true');
	await speed.getByRole('button', { name: '0.8배' }).click();
	await expect(speed.getByRole('button', { name: '0.8배' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);

	await page.goto('/');
	await page.getByRole('button', { name: '설정' }).click();
	const settings = page.getByRole('dialog', { name: '설정' });
	await expect(settings.getByRole('radio', { name: '느리게' })).toBeChecked();
});

test.describe('below 1024px', () => {
	test.skip(({ viewport }) => viewport!.width >= 1024, 'Wide screens set questions beside it');

	test('keeps the passage pinned while moving to the next question', async ({ page }) => {
		await seed(page, { 25: dayState(day25Email) });
		await page.goto('/day/25');
		const panel = passage(page);
		const { y, height } = (await panel.boundingBox())!;
		expect(height / page.viewportSize()!.height).toBeGreaterThan(0.3);
		expect(height / page.viewportSize()!.height).toBeLessThan(0.5);

		await option(question(page, 1), 'B').click();
		await expect(page.getByRole('heading', { name: '해설' })).toBeVisible();
		await page.locator('#app-content').evaluate((region) => region.scrollTo(0, 400));
		expect((await panel.boundingBox())!.y).toBe(y);
		await next(page).click();
		await expect(question(page, 2)).toBeVisible();
		await expect(question(page, 1)).toBeHidden();
		await expect(panel).toBeInViewport();
		expect((await panel.boundingBox())!.y).toBe(y);
	});

	test('steps through the set with 다음 before turning the page', async ({ page }) => {
		await seed(page, { 25: dayState(day25Email) });
		await page.goto('/day/25');
		const counter = page.getByText(/^문제 \d \/ 3$/);
		await expect(counter).toHaveText('문제 1 / 3');
		await next(page).click();
		await expect(counter).toHaveText('문제 2 / 3');
		await page.getByRole('button', { name: '이전' }).click();
		await expect(counter).toHaveText('문제 1 / 3');
		await next(page).click();
		await next(page).click();
		await expect(counter).toHaveText('문제 3 / 3');
		await next(page).click();
		await expect(page.getByText('Part 7 · 독해 · 4–6 / 25')).toBeVisible();
	});

	test('enlarges the passage and returns to the same scroll position', async ({ page }) => {
		await seed(page, { 36: dayState(day36Double) });
		await page.goto('/day/36');
		const panel = passage(page);
		const text = panel.locator('.passage');
		const height = (await panel.boundingBox())!.height;
		await text.evaluate((element) => element.scrollTo(0, 150));

		const enlarge = page.getByRole('button', { name: '크게 보기' });
		await enlarge.click();
		await expect(enlarge).toHaveAttribute('aria-pressed', 'true');
		expect((await panel.boundingBox())!.height).toBeGreaterThan(height * 1.8);
		await text.evaluate((element) => element.scrollTo(0, 500));
		await enlarge.click();
		await expect(enlarge).toHaveAttribute('aria-pressed', 'false');
		expect((await panel.boundingBox())!.height).toBe(height);
		expect(await text.evaluate((element) => element.scrollTop)).toBe(150);
	});
});

test.describe('from 1024px', () => {
	test.skip(({ viewport }) => viewport!.width < 1024, 'Narrow screens pin the passage on top');

	test('sets the questions beside the passage and folds an answered one', async ({ page }) => {
		await seed(page, { 25: dayState(day25Email) });
		await page.goto('/day/25');
		const panel = (await passage(page).boundingBox())!;
		const first = (await question(page, 1).boundingBox())!;
		expect(panel.x + panel.width).toBeLessThanOrEqual(first.x);

		await option(question(page, 1), 'B').click();
		await option(question(page, 2), 'A').click();
		const summary = question(page, 1).getByRole('button');
		await expect(summary).toHaveAccessibleName(/^1번 맞힘/);
		await expect(option(question(page, 1), 'A')).toHaveCount(0);
		expect((await question(page, 1).boundingBox())!.height).toBeLessThan(80);

		await summary.click();
		await expect(option(question(page, 1), 'B')).toBeVisible();
		await expect(question(page, 2).getByRole('button')).toHaveAccessibleName(/^2번 틀림/);
	});
});

test.describe('on an iPad held upright', () => {
	test.use({ viewport: { width: 820, height: 1180 } });

	test('shows the left rail and pins the passage above one question', async ({ page }) => {
		await seed(page, { 25: dayState(day25Email) });
		await page.goto('/day/25');
		const rail = (await page.getByRole('navigation', { name: '주 메뉴' }).boundingBox())!;
		expect(rail.x).toBe(0);
		expect(rail.height).toBeGreaterThan(rail.width);

		await expect(page.getByText('문제 1 / 3')).toBeVisible();
		await expect(question(page, 2)).toBeHidden();
		await expect(page.getByRole('button', { name: '크게 보기' })).toBeVisible();
		const panel = (await passage(page).boundingBox())!;
		expect(panel.y + panel.height).toBeLessThanOrEqual((await question(page, 1).boundingBox())!.y);
	});
});
