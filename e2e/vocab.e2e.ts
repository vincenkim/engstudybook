import { expect, test, type Locator, type Page } from '@playwright/test';

// Study page indexes (cover at 0) of questions whose vocabulary is used here:
// d01-01 'delay 연기하다', d01-03 'take leave 휴가를 가다', d11-13 'delay 지연',
// and the Part 4 set d34-20–22, whose translation lists 'delay 지연'.
const d01q01 = 6;
const d01q03 = 8;
const d11q13 = 17;
const d34set = 11;

const dayState = (page: number, answers: Record<string, number>, mode = 'instant') => ({
	page,
	answers,
	graded: false,
	retry: null,
	mode,
	firstScore: null
});

/** Answered in instant mode, so each explanation shows (the answer itself does not matter). */
const days = {
	1: dayState(d01q01, { 'd01-01': 1, 'd01-03': 0 }),
	11: dayState(d11q13, { 'd11-13': 1 }),
	34: dayState(d34set, { 'd34-20': 0, 'd34-21': 0, 'd34-22': 0 })
};

async function seed(
	page: Page,
	{ workbook = days, words = {} }: { workbook?: object; words?: object }
) {
	await page.goto('/');
	await page.evaluate(
		([v2, record]) => {
			localStorage.setItem('toeicBasic.v2', v2);
			localStorage.setItem('toeicBasic.words', record);
		},
		[
			JSON.stringify({ version: 2, settings: { mode: 'instant', rate: 1 }, days: workbook }),
			JSON.stringify({ version: 1, entries: {}, saved: {}, ...words })
		]
	);
}

/** Opens a Day on the page its seeded state points at. */
async function openDay(page: Page, day: number, heading: string) {
	await page.goto(`/day/${day}`);
	await expect(page.getByText(heading)).toBeVisible();
}

const chip = (page: Page, name: string) => page.getByRole('button', { name, exact: true });
const keptChip = (page: Page, name: string) =>
	page.getByRole('link', { name: `${name} 담김, 담은 단어 보기`, exact: true });
const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const rows = (page: Page) => page.getByRole('main').getByRole('listitem');
const statusChip = (row: Locator) => row.getByRole('button', { name: /^상태 / });
const savedRow = (page: Page) => page.getByRole('link', { name: /^담은 단어 \d/ });
const readWords = (page: Page) =>
	page.evaluate(() => JSON.parse(localStorage.getItem('toeicBasic.words')!));

const delaySaved = { word: 'delay', meanings: ['지연'], sources: ['d11-13'] };
const takeLeave = { word: 'take leave', meanings: ['휴가를 가다'], sources: ['d01-03'] };
const oldNew = { status: 'new', reviewed: '2026-01-01', streak: 0 };

test('saves the same vocabulary once wherever it is saved from (AE7)', async ({ page }) => {
	await seed(page, {});
	await openDay(page, 11, 'Part 5 · 단문 빈칸 · 13 / 25');
	const delay = chip(page, 'delay 지연 담기');
	await expect(delay).toHaveAttribute('aria-pressed', 'false');
	await delay.click();
	await expect(delay).toHaveAttribute('aria-pressed', 'true');
	await expect(delay).toBeFocused();

	// The set translation of another Day shows the same word as saved.
	await openDay(page, 34, 'Part 4 · 담화 · 20–22 / 25');
	await expect(chip(page, 'delay 지연 담기')).toHaveAttribute('aria-pressed', 'true');

	await page.goto('/words');
	await expect(savedRow(page)).toHaveAccessibleName('담은 단어 1');
	await savedRow(page).click();
	await expect(heading(page)).toHaveText('담은 단어');
	await expect(rows(page)).toHaveCount(1);
	await expect(rows(page).first()).toContainText('delay');
	await expect(rows(page).first()).toContainText('Week 3 · Day 2에도 있어요');
});

test('shares the PDF word’s record, so delay comes up once in review (AE7)', async ({ page }) => {
	await seed(page, { words: { saved: { delay: delaySaved }, entries: { 'w3d2-17': oldNew } } });
	await page.goto('/review?tab=words');
	const due = page.getByRole('list', { name: '복습할 단어' }).getByRole('listitem');
	await expect(due).toHaveCount(1);
	await expect(due.first()).toContainText('delay');

	await page.goto('/words/w3d2');
	await expect(statusChip(rows(page).nth(16))).toHaveAccessibleName('상태 처음, 눌러서 바꾸기');
	await page.goto('/words/saved');
	const status = statusChip(rows(page).first());
	await status.click();
	await status.click();
	await expect(status).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
	await page.goto('/words/w3d2');
	await expect(rows(page).nth(16)).toContainText('delay');
	await expect(statusChip(rows(page).nth(16))).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
});

test('keeps a word the PDF lacks under its own record', async ({ page }) => {
	await seed(page, { workbook: { 1: dayState(d01q03, { 'd01-03': 0 }) } });
	await openDay(page, 1, 'Part 5 · 단문 빈칸 · 3 / 25');
	await chip(page, 'take leave 휴가를 가다 담기').click();
	await page.goto('/words/saved');
	await expect(rows(page).first()).not.toContainText('에도 있어요');
	const status = statusChip(rows(page).first());
	await expect(status).toHaveAccessibleName('상태 안 봄, 눌러서 바꾸기');
	await status.click();
	await expect(status).toHaveAccessibleName('상태 처음, 눌러서 바꾸기');
	const record = await readWords(page);
	expect(Object.keys(record.entries)).toEqual(['saved:take leave']);
	expect(record.saved).toEqual({ 'take leave': takeLeave });
});

test('gathers a second meaning of the same English under one word', async ({ page }) => {
	await seed(page, {});
	await openDay(page, 1, 'Part 5 · 단문 빈칸 · 1 / 25');
	await chip(page, 'delay 연기하다 담기').click();
	// Another meaning is a chip of its own: not saved yet, and saving it adds to the same word.
	await openDay(page, 11, 'Part 5 · 단문 빈칸 · 13 / 25');
	await expect(chip(page, 'delay 지연 담기')).toHaveAttribute('aria-pressed', 'false');
	await chip(page, 'delay 지연 담기').click();

	await page.goto('/words/saved');
	await page
		.getByRole('group', { name: '보기 방식' })
		.getByRole('button', { name: '다 보기' })
		.click();
	await expect(rows(page)).toHaveCount(1);
	await expect(rows(page).first()).toContainText('연기하다, 지연');
	expect((await readWords(page)).saved.delay.sources).toEqual(['d01-01', 'd11-13']);
});

test('takes an unrated word back from its chip', async ({ page }) => {
	await seed(page, {});
	await openDay(page, 11, 'Part 5 · 단문 빈칸 · 13 / 25');
	const delay = chip(page, 'delay 지연 담기');
	await delay.click();
	await expect(delay).toHaveAttribute('aria-pressed', 'true');
	await delay.click();
	await expect(delay).toHaveAttribute('aria-pressed', 'false');
	expect((await readWords(page)).saved).toEqual({});
	await page.goto('/words');
	await expect(heading(page)).toHaveText('단어장');
	await expect(savedRow(page)).toHaveCount(0);
});

test('removes a rated word from the saved list only, keeping its record', async ({ page }) => {
	await seed(page, { words: { saved: { delay: delaySaved }, entries: { 'w3d2-17': oldNew } } });
	await openDay(page, 11, 'Part 5 · 단문 빈칸 · 13 / 25');
	await expect(chip(page, 'delay 지연 담기')).toHaveCount(0);
	await keptChip(page, 'delay 지연').click();

	await expect(page).toHaveURL(/\/words\/saved$/);
	await rows(page).first().getByRole('button', { name: '1번 빼기' }).click();
	await expect(heading(page)).toBeFocused();
	await expect(page.getByRole('heading', { name: '아직 담은 단어가 없어요' })).toBeVisible();
	const record = await readWords(page);
	expect(record.saved).toEqual({});
	expect(record.entries['w3d2-17']).toEqual(oldNew);
});

test('treats a PDF word rated already as rated once it is saved', async ({ page }) => {
	await seed(page, { words: { entries: { 'w3d2-17': oldNew } } });
	await openDay(page, 11, 'Part 5 · 단문 빈칸 · 13 / 25');
	await chip(page, 'delay 지연 담기').click();
	await expect(keptChip(page, 'delay 지연')).toBeFocused();
});

test('says how to save words when none are saved', async ({ page }) => {
	await page.goto('/words/saved');
	await expect(page).toHaveTitle('담은 단어 · 토익 문제집');
	await expect(heading(page)).toHaveText('담은 단어');
	await expect(page.getByRole('heading', { name: '아직 담은 단어가 없어요' })).toBeVisible();
	await expect(page.getByText('해설의 어휘에서 단어를 누르면 여기에 담겨요.')).toBeVisible();
	await page.getByRole('link', { name: '단어장으로 돌아가기' }).click();
	await expect(heading(page)).toHaveText('단어장');
});

test('hides the vocabulary before an exam is graded', async ({ page }) => {
	await seed(page, { workbook: { 11: dayState(d11q13, { 'd11-13': 1 }, 'exam') } });
	await openDay(page, 11, 'Part 5 · 단문 빈칸 · 13 / 25');
	await expect(page.getByRole('button', { name: /담기$/ })).toHaveCount(0);
	await expect(page.getByRole('heading', { name: '어휘' })).toHaveCount(0);
});

test('starts the saved words’ cards with a word not seen yet', async ({ page }) => {
	await seed(page, { words: { saved: { 'take leave': takeLeave, delay: delaySaved } } });
	await page.goto('/words/saved');
	// delay starts 처음 like every PDF word; take leave, saved first, has not been seen.
	const cards = page.getByRole('button', { name: /^카드로 외우기/ });
	await expect(cards).toHaveText('카드로 외우기 · 외울 단어 2개');
	await cards.click();
	await expect(heading(page)).toHaveText('담은 단어 카드');
	await expect(page.getByRole('main')).toContainText('take leave');
	await expect(page.getByRole('main')).toContainText('안 봄');

	await page.keyboard.press('Space');
	await page.keyboard.press('Digit3');
	await expect(page.getByRole('main')).toContainText('delay');
	await page.keyboard.press('Space');
	await page.keyboard.press('Digit3');
	await page.getByRole('main').getByRole('link', { name: '담은 단어로' }).click();
	await expect(heading(page)).toHaveText('담은 단어');
	await expect(statusChip(rows(page).first())).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
});

test('reads a saved word aloud without its placeholders', async ({ page }) => {
	await page.addInitScript(() => {
		const spoken: string[] = [];
		Object.assign(window, { spoken });
		window.SpeechSynthesisUtterance = class {
			constructor(public text: string) {}
		} as never;
		speechSynthesis.getVoices = () => [{ name: 'Test Voice', lang: 'en-US' }] as never;
		speechSynthesis.speak = (utterance) => void spoken.push(utterance.text);
		speechSynthesis.cancel = () => {};
	});
	const keepClean = {
		word: 'keep ~ clean',
		meanings: ['~을 깨끗하게 유지하다'],
		sources: ['d03-04']
	};
	await seed(page, { words: { saved: { 'keep ~ clean': keepClean } } });
	await page.goto('/words/saved');
	await page.getByRole('button', { name: '1번 발음 듣기', exact: true }).click();
	await expect
		.poll(() => page.evaluate(() => (window as unknown as { spoken: string[] }).spoken))
		.toEqual(['keep clean']);
});

test('leaves the Day keys working while a chip has focus', async ({ page }) => {
	await seed(page, {});
	await openDay(page, 11, 'Part 5 · 단문 빈칸 · 13 / 25');
	const delay = chip(page, 'delay 지연 담기');
	await delay.focus();
	await page.keyboard.press('Digit2');
	await expect(delay).toHaveAttribute('aria-pressed', 'false');
	await page.keyboard.press('f');
	await expect(page.getByRole('button', { name: '깃발' })).toHaveAttribute('aria-pressed', 'true');
	await page.keyboard.press('ArrowRight');
	await expect(page.getByRole('heading', { name: 'Part 5 · 단문 빈칸 · 14 / 25' })).toBeFocused();
});
