import { expect, test } from '@playwright/test';

// Regression: a deployed version waited for every tab to close, while the old worker kept serving
// the old screens from its cache, so the wordbook never showed in a browser that had the app open.
test('offers a new version and reloads into it', async ({ page }) => {
	await page.goto('/');
	await page.evaluate(() => navigator.serviceWorker.ready);
	await page.reload();
	await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);

	// The next deployment. Playwright cannot change the worker script the browser fetches, but a
	// worker at another address in the same scope installs as a new version all the same.
	await page.evaluate(() => navigator.serviceWorker.register('./service-worker.js?next'));
	await expect(page.getByRole('status').filter({ hasText: '새 버전이 있어요' })).toBeVisible();

	await page.evaluate(() => Object.assign(window, { beforeUpdate: true }));
	await Promise.all([
		page.waitForEvent('load'),
		page.getByRole('button', { name: '새로고침' }).click()
	]);
	expect(await page.evaluate(() => 'beforeUpdate' in window)).toBe(false);
	await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
	expect(await page.evaluate(() => navigator.serviceWorker.controller?.scriptURL)).toMatch(
		/service-worker\.js\?next$/
	);
});
