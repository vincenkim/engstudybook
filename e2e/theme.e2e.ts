import { expect, test, type Page } from '@playwright/test';
import { readFile } from 'node:fs/promises';

// A cached app could answer the blocked requests below, so the service worker stays off.
test.use({ serviceWorkers: 'block' });

const storageKey = 'toeicBasic.v2';
const darkBar = '#111513';
const lightBar = '#2556c4';
const darkBackground = 'rgb(17, 21, 19)';

async function seedRaw(page: Page, value: string) {
	await page.goto('/');
	await page.evaluate(([key, raw]) => localStorage.setItem(key, raw), [storageKey, value]);
}

const seedTheme = (page: Page, theme: string) =>
	seedRaw(
		page,
		JSON.stringify({ version: 2, settings: { mode: 'instant', rate: 1, theme }, days: {} })
	);

const html = (page: Page) => page.locator('html');
const themeColor = (page: Page) => page.locator('meta[name="theme-color"]');

const openSettings = async (page: Page) => {
	await page.getByRole('button', { name: '설정' }).click();
	return page.getByRole('dialog', { name: '설정' });
};

test('paints the dark theme before the app starts (AE6)', async ({ page }) => {
	await seedTheme(page, 'dark');
	// With the app's scripts blocked, only the page's own first script can set the theme.
	await page.route('**/_app/**', (route) => route.abort());
	await page.goto('/days');
	await expect(html(page)).toHaveAttribute('data-theme', 'dark');
	await expect(themeColor(page)).toHaveCount(1);
	await expect(themeColor(page)).toHaveAttribute('content', darkBar);
});

test('follows the system until a theme is chosen, then keeps it', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'dark' });
	await page.goto('/');
	await expect(html(page)).toHaveAttribute('data-theme', 'dark');
	await expect(page.locator('body')).toHaveCSS('background-color', darkBackground);

	// The system setting changes while the app is open.
	await page.emulateMedia({ colorScheme: 'light' });
	await expect(html(page)).toHaveAttribute('data-theme', 'light');
	await expect(themeColor(page)).toHaveAttribute('content', lightBar);

	const settings = await openSettings(page);
	await settings.getByRole('radio', { name: '어둡게' }).click();
	await expect(html(page)).toHaveAttribute('data-theme', 'dark');
	await expect(themeColor(page)).toHaveAttribute('content', darkBar);
	await page.reload();
	await expect(html(page)).toHaveAttribute('data-theme', 'dark');
	await expect(themeColor(page)).toHaveCount(1);
});

test('keeps a light theme under a dark system', async ({ page }) => {
	await page.emulateMedia({ colorScheme: 'dark' });
	await seedTheme(page, 'light');
	await page.reload();
	await expect(html(page)).toHaveAttribute('data-theme', 'light');
	await expect(themeColor(page)).toHaveAttribute('content', lightBar);
});

test('follows the system when the saved record cannot be read', async ({ page }) => {
	const errors: string[] = [];
	page.on('pageerror', (error) => errors.push(error.message));
	await page.emulateMedia({ colorScheme: 'dark' });
	await seedRaw(page, '{');
	await page.reload();
	await expect(html(page)).toHaveAttribute('data-theme', 'dark');
	await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
	expect(errors).toEqual([]);
});

test('saves the chosen theme with the exported record', async ({ page }) => {
	await page.goto('/');
	const settings = await openSettings(page);
	await settings.getByRole('radio', { name: '어둡게' }).click();
	const download = page.waitForEvent('download');
	await settings.getByRole('button', { name: '기록 내보내기' }).click();
	const exported = await readFile(await (await download).path(), 'utf8');
	expect(JSON.parse(exported)).toMatchObject({ settings: { theme: 'dark' } });
});
