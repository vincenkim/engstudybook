import { expect, test, type Page } from '@playwright/test';

// A Day 31 Part 5 question answered wrong, so the review list and its session have content.
const progress = {
	version: 2,
	settings: { mode: 'instant', rate: 1 },
	days: {
		31: {
			page: 0,
			answers: { 'd31-01': 0 },
			graded: false,
			retry: null,
			mode: 'instant',
			firstScore: null,
			misses: { 'd31-01': 1 }
		}
	}
};

// One saved word not rated yet, so the saved words page and its cards have content.
const words = {
	version: 1,
	entries: {},
	saved: { 'take leave': { word: 'take leave', meanings: ['휴가를 내다'], sources: ['d03-12'] } }
};

async function seed(page: Page) {
	await page.goto('/');
	await page.evaluate(
		([saved, savedWords]) => {
			localStorage.setItem('toeicBasic.v2', JSON.stringify(saved));
			localStorage.setItem('toeicBasic.words', JSON.stringify(savedWords));
		},
		[progress, words]
	);
}

async function expectNoSidewaysScroll(page: Page) {
	expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
	// Pages scroll inside the shell's content region, which hides overflow from the document.
	const region = page.locator('#app-content');
	expect(await region.evaluate((r) => r.scrollWidth - r.clientWidth)).toBeLessThanOrEqual(0);
}

test('fits a phone screen without sideways scrolling', async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 667 });
	await seed(page);
	for (const path of [
		'/',
		'/days',
		'/day/31',
		'/words',
		'/words/w1d1',
		'/words/saved',
		'/words/test',
		// Last, so its session opens next.
		'/review'
	]) {
		await page.goto(path);
		await expect(page.locator('main')).toBeVisible();
		if (path === '/days' || path === '/words') {
			// Open every phase; each click takes one button out of the collapsed set.
			const collapsed = page.getByRole('button', { expanded: false });
			while ((await collapsed.count()) > 0) await collapsed.first().click();
		}
		await expectNoSidewaysScroll(page);
	}
	await page.getByRole('button', { name: /다시 풀기$/ }).click();
	// Day 31 opens on a Part 7 set, the widest review screen.
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('틀린 문제 다시 풀기');
	await expect(page.getByText(/^Part 7 · 독해/)).toBeVisible();
	await expectNoSidewaysScroll(page);

	// A word test of the saved word: its question, then its result.
	await page.goto('/words/test');
	await page.getByRole('radio', { name: '담은 단어', exact: true }).check();
	await page.getByRole('button', { name: '1문제로 시작' }).click();
	await expectNoSidewaysScroll(page);
	await page.getByRole('button', { name: '채점하기' }).click();
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('시험 결과');
	await expectNoSidewaysScroll(page);
});

test('works offline after the first visit', async ({ page, context }) => {
	await seed(page);
	await page.evaluate(() => navigator.serviceWorker.ready);
	await context.setOffline(true);
	for (const [path, title] of [
		['/', '오늘'],
		['/days', '문제집'],
		['/day/2', 'Day 2'],
		['/review', '복습'],
		['/words', '단어장'],
		['/words/w1d1', 'Week 1 · Day 1'],
		['/words/test', '단어시험'],
		// Last, so its cards open next.
		['/words/saved', '담은 단어']
	]) {
		await page.goto(path);
		await expect(page.getByRole('heading', { level: 1 })).toContainText(title);
	}
	// The cards of the saved words, through to their summary, with no network.
	await page.getByRole('button', { name: /^카드로 외우기/ }).click();
	await page.getByRole('button', { name: '뜻 보기', exact: true }).click();
	await page
		.getByRole('group', { name: '이 단어 평가' })
		.getByRole('button', { name: /^완벽/ })
		.click();
	await expect(page.getByText('단어 1개를 봤어요')).toBeVisible();
	// A word test of the saved word, graded with no network.
	await page.goto('/words/test');
	await page.getByRole('radio', { name: '담은 단어', exact: true }).check();
	await page.getByRole('button', { name: '1문제로 시작' }).click();
	await page.getByRole('textbox').fill('take leave');
	await page.getByRole('button', { name: '채점하기' }).click();
	await expect(page.getByText('1 / 1')).toBeVisible();
	await page.goto('/review');
	await expect(page.getByText('Day 31')).toBeVisible();
});
