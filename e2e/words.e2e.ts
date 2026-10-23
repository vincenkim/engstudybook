import { expect, test, type Page } from '@playwright/test';

const menu = (page: Page) => page.getByRole('navigation', { name: '주 메뉴' });
const heading = (page: Page) => page.getByRole('heading', { level: 1 });

/** The four Week triggers of the wordbook, in order. */
const weeks = (page: Page) => page.getByRole('main').getByRole('button', { name: /^Week \d/ });
const week = (page: Page, number: number) =>
	page.getByRole('button', { name: new RegExp(`^Week ${number} `) });
// Only one Week is open in these tests, so a Day number names a single row.
const dayRow = (page: Page, day: number) =>
	page.getByRole('link', { name: new RegExp(`^Day ${day} `) });

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

test('counts every unique word by its PDF status when there is no record', async ({ page }) => {
	await page.goto('/words');
	await expect(page).toHaveTitle('단어장 · 토익 문제집');
	await expect(page.locator('main')).toHaveCount(1);
	await expect(heading(page)).toHaveText('단어장');
	await expect(page.getByText('4주 · 20일 · 1,000단어')).toBeVisible();

	const overall = page.getByRole('region', { name: '전체 단어 상태' });
	await expect(overall.getByRole('img')).toHaveAccessibleName(
		'처음 248개, 애매 603개, 완벽 147개, 안 봄 2개'
	);
	// Each status names itself in words next to its icon, not by color alone.
	await expect(overall.getByRole('listitem')).toHaveText([
		'처음 248',
		'애매 603',
		'완벽 147',
		'안 봄 2'
	]);
	await expect(overall.getByRole('listitem').locator('svg')).toHaveCount(4);
});

test('opens the Week of the Day to study and goes to its word list', async ({ page }) => {
	await page.goto('/words');
	await expectOpenWeeks(page, ['true', 'false', 'false', 'false']);
	await expect(page.getByRole('link', { name: /^Day \d/ })).toHaveCount(5);
	await expect(week(page, 1)).toContainText('5일 · 250단어 · 외울 단어 228');
	await expect(dayRow(page, 1)).toContainText('50단어 · 외울 단어 43');
	await expect(dayRow(page, 1).getByRole('img')).toHaveAccessibleName(
		'처음 25개, 애매 18개, 완벽 7개, 안 봄 0개'
	);

	await dayRow(page, 1).click();
	await expect(page).toHaveURL(/\/words\/w1d1$/);
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	await expect(page.locator('main')).toHaveCount(1);
	await expect(page.getByRole('main').getByRole('listitem')).toHaveCount(50);

	await page.getByRole('link', { name: '단어장으로 돌아가기' }).click();
	await expect(page).toHaveURL(/\/words$/);
	await expect(heading(page)).toHaveText('단어장');
});

test('opens the Week of the word Day opened last', async ({ page }) => {
	await seedWords(page, { lastDay: 'w3d2' });
	await page.goto('/words');
	await expectOpenWeeks(page, ['false', 'false', 'true', 'false']);
	// Days 3 and 5 repeat the last two words of the Day before; a Day counts its rows (R2).
	await expect(week(page, 3)).toContainText('5일 · 253단어');
	await expect(dayRow(page, 3)).toContainText('50단어');
	await expect(dayRow(page, 5)).toContainText('51단어');

	await dayRow(page, 2).click();
	await expect(page).toHaveURL(/\/words\/w3d2$/);
	await expect(heading(page)).toHaveText('Week 3 · Day 2');
});

test('shows the saved words row only when words are saved', async ({ page }) => {
	await page.goto('/words');
	await expect(weeks(page)).toHaveCount(4);
	await expect(page.getByRole('link', { name: /담은 단어/ })).toHaveCount(0);

	const delay = { word: 'delay', meanings: ['지연'], sources: ['d01-01'] };
	await seedWords(page, { saved: { delay } });
	await page.goto('/words');
	await expect(page.getByRole('link', { name: '담은 단어 1' })).toHaveAttribute(
		'href',
		/\/words\/saved$/
	);
});

test('hides the tab bar on a word list on a phone only', async ({ page }, testInfo) => {
	const wordbookTab = menu(page).getByRole('link', { name: '단어장' });
	await page.goto('/words');
	await expect(wordbookTab).toHaveAttribute('aria-current', 'page');

	await page.goto('/words/w1d1');
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	if (testInfo.project.name === 'phone') {
		await expect(menu(page)).toBeHidden();
	} else {
		await expect(wordbookTab).toHaveAttribute('aria-current', 'page');
	}
});
