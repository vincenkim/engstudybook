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

async function seed(page: Page) {
	await page.goto('/');
	await page.evaluate(
		(saved) => localStorage.setItem('toeicBasic.v2', JSON.stringify(saved)),
		progress
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
	for (const path of ['/', '/days', '/day/31', '/review']) {
		await page.goto(path);
		await expect(page.locator('main')).toBeVisible();
		if (path === '/days') {
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
});

test('works offline after the first visit', async ({ page, context }) => {
	await seed(page);
	await page.evaluate(() => navigator.serviceWorker.ready);
	await context.setOffline(true);
	for (const [path, title] of [
		['/', '오늘'],
		['/days', '문제집'],
		['/day/2', 'Day 2'],
		['/review', '복습']
	]) {
		await page.goto(path);
		await expect(page.getByRole('heading', { level: 1 })).toContainText(title);
	}
	await expect(page.getByText('Day 31')).toBeVisible();
});
