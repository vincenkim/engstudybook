import { expect, test, type Page } from '@playwright/test';
import { readFile } from 'node:fs/promises';

const menu = (page: Page) => page.getByRole('navigation', { name: '주 메뉴' });

const dayState = (page: number, extra = {}) => ({
	page,
	answers: {},
	graded: false,
	retry: null,
	mode: null,
	firstScore: null,
	...extra
});

async function seed(page: Page, record: { days: object; lastDay?: number; mode?: string }) {
	const { days, lastDay, mode = 'instant' } = record;
	await page.goto('/');
	await page.evaluate(
		(value) => localStorage.setItem('toeicBasic.v2', value),
		JSON.stringify({ version: 2, settings: { mode, rate: 1 }, lastDay, days })
	);
}

const openSettings = async (page: Page) => {
	await page.getByRole('button', { name: '설정' }).click();
	return page.getByRole('dialog', { name: '설정' });
};

/** The four phase triggers of the workbook, in order. */
const phases = (page: Page) => page.getByRole('main').getByRole('button', { name: /단계/ });

async function openAllPhases(page: Page) {
	await expect(phases(page)).toHaveCount(4);
	for (let index = 0; index < 4; index++) {
		const phase = phases(page).nth(index);
		if ((await phase.getAttribute('aria-expanded')) === 'false') await phase.click();
		await expect(phase).toHaveAttribute('aria-expanded', 'true');
	}
}

test('shows the main menu for the screen size', async ({ page }, testInfo) => {
	await page.goto('/');
	const links = menu(page).getByRole('link');
	await expect(links).toHaveText(['오늘', '문제집', '단어장', '복습']);
	await expect(links.first()).toHaveAttribute('aria-current', 'page');

	const viewport = page.viewportSize()!;
	const box = (await menu(page).boundingBox())!;
	if (testInfo.project.name === 'phone') {
		expect(box).toMatchObject({ x: 0, width: viewport.width });
		expect(box.y + box.height).toBe(viewport.height);
	} else {
		const width = testInfo.project.name === 'tablet' ? 88 : 240;
		expect(box).toEqual({ x: 0, y: 0, width, height: viewport.height });
	}
	for (const link of await links.all()) {
		const { width, height } = (await link.boundingBox())!;
		expect(Math.min(width, height)).toBeGreaterThanOrEqual(44);
	}
});

test('hides the tab bar while solving a Day on a phone only', async ({ page }, testInfo) => {
	await page.goto('/day/1');
	await expect(page.getByRole('heading', { level: 1 })).toContainText('Day 1');
	if (testInfo.project.name === 'phone') {
		await expect(menu(page)).toBeHidden();
	} else {
		await expect(menu(page).getByRole('link', { name: '문제집' })).toHaveAttribute(
			'aria-current',
			'page'
		);
	}
});

test('opens the workbook, wordbook and review pages from the menu', async ({ page }) => {
	await page.goto('/');
	for (const name of ['문제집', '단어장', '복습']) {
		await menu(page).getByRole('link', { name }).click();
		await expect(page.getByRole('heading', { level: 1 })).toHaveText(name);
		await expect(page.locator('main')).toHaveCount(1);
		await expect(menu(page).getByRole('link', { name })).toHaveAttribute('aria-current', 'page');
	}
	await expect(page).toHaveURL(/\/review$/);
	await menu(page).getByRole('link', { name: '오늘' }).click();
	await expect(page).toHaveURL(/\/$/);
});

test('opens every page at the top of the content area', async ({ page }) => {
	// Day 25 opens on a long Part 7 set, so a kept scroll position would still show there.
	// Its three questions are answered, so 다음 turns the page on a phone too instead of stepping the set.
	const answers = { 'd25-01': 1, 'd25-02': 2, 'd25-03': 3 };
	await seed(page, { days: { 25: dayState(3, { answers, mode: 'instant' }) } });
	await page.goto('/days');
	await openAllPhases(page);
	const content = page.locator('#app-content');
	const scrollTop = () => content.evaluate((region) => region.scrollTop);

	const day25 = page.getByRole('link', { name: /^Day 25 / });
	await day25.scrollIntoViewIfNeeded();
	expect(await scrollTop()).toBeGreaterThan(0);
	await day25.click();
	await expect(page.getByText('Part 7 · 독해 · 1–3 / 25')).toBeVisible();
	expect(await content.evaluate((region) => region.scrollHeight > region.clientHeight)).toBe(true);
	expect(await scrollTop()).toBe(0);

	// Turning a Day page starts the next one at the top as well.
	await content.evaluate((region) => region.scrollTo(0, region.scrollHeight));
	expect(await scrollTop()).toBeGreaterThan(0);
	await page.getByRole('button', { name: '다음', exact: true }).click();
	await expect(page.getByText(/^Part 7 · 독해 · 4–/)).toBeVisible();
	expect(await scrollTop()).toBe(0);
});

test('offers Day 1 with nothing to review when there is no record', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('오늘');
	const review = page.getByRole('region', { name: '복습', exact: true });
	await expect(review.getByRole('group', { name: '틀린 문제' })).toHaveText('틀린 문제 0');
	await expect(review.getByRole('group', { name: '복습할 단어' })).toHaveText('복습할 단어 0');
	await page.getByRole('link', { name: 'Day 1 시작하기' }).click();
	await expect(page).toHaveURL(/\/day\/1$/);
	await expect(page.getByRole('button', { name: '처음부터 시작' })).toBeVisible();
});

test('continues the last Day at its saved page', async ({ page }) => {
	// Day 3 in exam mode: d03-01 answered right, d03-02 wrong, not graded yet; page 8 holds d03-03.
	const answers = { 'd03-01': 1, 'd03-02': 1 };
	await seed(page, { lastDay: 3, days: { 3: dayState(8, { answers, mode: 'exam' }) } });
	await page.goto('/');
	await expect(page.getByText('답안 2 / 25 · 채점 전')).toBeVisible();
	// An exam waiting for a grading shows its answers only as answered (R10).
	await expect(page.getByRole('img', { name: /^25문항 중/ })).toHaveAccessibleName(
		'25문항 중 답함 2, 안 풂 23'
	);

	await page.getByRole('link', { name: '이어서 하기' }).click();
	await expect(page).toHaveURL(/\/day\/3$/);
	await expect(page.getByText('Part 5 · 단문 빈칸 · 3 / 25')).toBeVisible();
});

test('opens the phase of the Day in progress and lists every Day', async ({ page }) => {
	await seed(page, { lastDay: 25, days: { 25: dayState(3) } });
	await page.goto('/days');
	for (const [index, expanded] of ['false', 'false', 'true', 'false'].entries()) {
		await expect(phases(page).nth(index)).toHaveAttribute('aria-expanded', expanded);
	}
	await expect(page.getByRole('link', { name: /^Day 25 · 이어서 하기/ })).toBeVisible();
	await expect(page.getByRole('link', { name: /^Day 1 / })).toHaveCount(0);

	await openAllPhases(page);
	await expect(page.getByRole('link', { name: /^Day \d+ / })).toHaveCount(40);

	await page.getByRole('link', { name: /^Day 1 / }).click();
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(
		'Day 1 · 명사 자리 · Who 의문문'
	);
	await page.goBack();
	await expect(page).toHaveURL(/\/days$/);
});

// Regression: switching to exam mode used to hide answers already checked and let them change.
test('keeps a started Day in its grading mode when the default changes', async ({ page }) => {
	const option = (letter: string) =>
		page.getByRole('button', { name: new RegExp(`^\\(${letter}\\)`) });
	// Page 6 of Day 1 holds its first question, d01-01 (answer B).
	await seed(page, { days: { 1: dayState(6) } });
	await page.goto('/day/1');
	await option('A').click();

	await page.goto('/');
	const settings = await openSettings(page);
	await expect(settings).toContainText('새로 시작하는 Day의 기본값');
	await settings.getByRole('radio', { name: '다 풀고 채점' }).click();
	await page.keyboard.press('Escape');
	await expect(settings).toBeHidden();
	await expect(page.getByText('진행 중 · 1 / 25')).toBeVisible();

	await page.goto('/day/1');
	await expect(page.getByRole('status').first()).toHaveText('오답입니다 · 정답 (B)');
	// A revealed option stays focusable but inert: even a forced click changes nothing.
	await option('B').click({ force: true });
	await expect(page.getByRole('status').first()).toHaveText('오답입니다 · 정답 (B)');
});

test('exports and imports progress, including files from the original app', async ({ page }) => {
	const firstScore = { correct: 20, total: 25 };
	const day1 = dayState(6, { answers: { 'd01-01': 1 }, mode: 'instant', firstScore });
	await seed(page, { days: { 1: day1 } });
	await page.goto('/');
	const phase1 = page.getByRole('region', { name: '전체 진도' }).getByRole('listitem').first();
	await expect(phase1).toContainText('1 / 16일 완료');

	const settings = await openSettings(page);
	const download = page.waitForEvent('download');
	await settings.getByRole('button', { name: '기록 내보내기' }).click();
	const exported = await readFile(await (await download).path(), 'utf8');
	expect(JSON.parse(exported)).toMatchObject({ version: 2, days: { 1: { firstScore } } });

	await page.evaluate(() => localStorage.clear());
	await page.reload();
	await expect(phase1).toContainText('0 / 16일 완료');

	const dialogs: string[] = [];
	page.on('dialog', (dialog) => {
		dialogs.push(dialog.type());
		void dialog.accept();
	});
	async function importFile(name: string, text: string) {
		const chooser = page.waitForEvent('filechooser');
		await settings.getByRole('button', { name: '기록 가져오기' }).click();
		await (
			await chooser
		).setFiles({ name, mimeType: 'application/json', buffer: Buffer.from(text) });
	}
	await openSettings(page);
	await importFile('bad.json', '{');
	await expect(settings.getByRole('status')).toHaveText('기록 파일을 읽을 수 없습니다.');
	expect(dialogs).toEqual([]);

	await importFile('p.json', exported);
	await expect(settings.getByRole('status')).toHaveText('기록을 가져왔습니다.');
	expect(dialogs).toEqual(['confirm']);
	await page.keyboard.press('Escape');
	await expect(phase1).toContainText('1 / 16일 완료');

	const original = {
		settings: { mode: 'instant', rate: 1 },
		days: { 2: { answers: { 'd02-01': 0, 'd02-02': 1 }, graded: false, page: 0, retry: null } }
	};
	await openSettings(page);
	await importFile('v1.json', JSON.stringify(original));
	await expect.poll(() => dialogs).toEqual(['confirm', 'confirm']);
	await page.keyboard.press('Escape');
	await expect(phase1).toContainText('0 / 16일 완료');
	await expect(page.getByText('진행 중 · 2 / 25')).toBeVisible();
});

test('stops the voice test when the settings close', async ({ page }) => {
	await page.addInitScript(() => {
		const counter = window as unknown as { cancels: number };
		const cancel = speechSynthesis.cancel.bind(speechSynthesis);
		counter.cancels = 0;
		speechSynthesis.cancel = () => {
			counter.cancels++;
			cancel();
		};
	});
	const cancels = () => page.evaluate(() => (window as unknown as { cancels: number }).cancels);
	await page.goto('/');
	const settings = await openSettings(page);
	expect(await cancels()).toBe(0);
	await settings.getByRole('button', { name: '닫기' }).click();
	await expect(settings).toBeHidden();
	expect(await cancels()).toBe(1);
});
