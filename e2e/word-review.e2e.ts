import { expect, test, type Locator, type Page } from '@playwright/test';

const storageKey = 'toeicBasic.v2';

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

const menu = (page: Page) => page.getByRole('navigation', { name: '주 메뉴' });
const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const tab = (page: Page, name: '틀린 문제' | '단어') =>
	page.getByRole('tab', { name: new RegExp(`^${name} \\d`) });
const wordRows = (page: Page) =>
	page.getByRole('list', { name: '복습할 단어' }).getByRole('listitem');
const reviewCards = (page: Page) => page.getByRole('button', { name: /^카드로 \d+개 복습$/ });
const cardCounter = (page: Page) => page.getByRole('banner').getByRole('status');
const todayCount = (page: Page, name: '틀린 문제' | '복습할 단어') =>
	page.getByRole('region', { name: '복습', exact: true }).getByRole('group', { name });
const showAgain = (page: Page) =>
	page.evaluate(() => document.dispatchEvent(new Event('visibilitychange')));

async function seedWords(page: Page, entries: object) {
	await page.goto('/');
	await page.evaluate(
		(value) => localStorage.setItem('toeicBasic.words', value),
		JSON.stringify({ version: 1, entries, saved: {} })
	);
}

/** Week 1 · Day 1 words from number `from` on, rated `status` on `reviewed`. */
const rated = (from: number, count: number, status: string, reviewed: string) =>
	Object.fromEntries(
		Array.from({ length: count }, (_, index) => [
			`w1d1-${String(from + index).padStart(2, '0')}`,
			{ status, reviewed, streak: status === 'known' ? 1 : 0 }
		])
	);

/** Space turns the card on screen, then a digit rates it: 1 처음, 2 애매, 3 완벽. */
async function rateCard(page: Page, digit: 1 | 2 | 3) {
	await page.keyboard.press('Space');
	await page.keyboard.press(`Digit${digit}`);
}

test('says there is nothing to review and links to the workbook', async ({ page }) => {
	// A word rated today is not due yet, and a PDF status alone never is (AE1).
	await page.clock.setFixedTime(new Date('2026-10-23T09:00:00'));
	await seedWords(page, rated(5, 1, 'new', '2026-10-23'));
	await page.goto('/review');
	await expect(page.getByRole('heading', { name: '틀린 문제가 없어요' })).toBeVisible();
	await expect(page.getByRole('tablist')).toHaveCount(0);
	await expect(start(page)).toHaveCount(0);
	await page.getByRole('main').getByRole('link', { name: '문제집으로' }).click();
	await expect(page).toHaveURL(/\/days$/);
});

test('counts the same due words on Today and the word tab, and more once the app shows again', async ({
	page
}) => {
	// Rated 애매 three days ago: due today. Rated 처음 late today: due after midnight.
	await page.clock.setFixedTime(new Date('2026-10-23T23:00:00'));
	await seedWords(page, {
		...rated(1, 25, 'unsure', '2026-10-20'),
		...rated(26, 5, 'new', '2026-10-23')
	});
	await page.goto('/');
	await expect(todayCount(page, '복습할 단어')).toHaveText('복습할 단어 25');
	await expect(todayCount(page, '틀린 문제')).toHaveText('틀린 문제 0');
	await page.getByRole('link', { name: '복습하기' }).click();
	await expect(page).toHaveURL(/\/review\?tab=words$/);
	await expect(page.getByRole('tab')).toHaveText(['틀린 문제 0', '단어 25']);
	await expect(tab(page, '단어')).toHaveAttribute('aria-selected', 'true');
	await expect(wordRows(page)).toHaveCount(25);
	await expect(wordRows(page).first()).toContainText('additional');
	await expect(wordRows(page).first()).toContainText('(형) 추가의, 부가의');
	await expect(reviewCards(page)).toHaveText('카드로 20개 복습');

	await page.clock.setFixedTime(new Date('2026-10-24T00:30:00'));
	await showAgain(page);
	// The rows stay as the tab opened; the counts take in the words that came due.
	await expect(tab(page, '단어')).toHaveText('단어 30');
	await expect(wordRows(page)).toHaveCount(25);
	await page.goto('/review');
	await expect(tab(page, '단어')).toHaveAttribute('aria-selected', 'true');
	await expect(wordRows(page)).toHaveCount(30);
});

test('reviews 20 cards, keeps them as more words come due and goes back to the word tab', async ({
	page
}, testInfo) => {
	// 25 words due today, 5 more due tomorrow.
	await page.clock.setFixedTime(new Date('2026-10-23T09:00:00'));
	await seedWords(page, {
		...rated(1, 25, 'unsure', '2026-10-20'),
		...rated(26, 5, 'unsure', '2026-10-21')
	});
	await page.goto('/review');
	await reviewCards(page).click();
	await expect(heading(page)).toHaveText('단어 복습 카드');
	await expect(cardCounter(page)).toHaveText('1 / 20');
	if (testInfo.project.name === 'phone') await expect(menu(page)).toBeHidden();
	await rateCard(page, 3);
	await page.clock.setFixedTime(new Date('2026-10-24T09:00:00'));
	await showAgain(page);
	await rateCard(page, 3);
	await expect(cardCounter(page)).toHaveText('3 / 20');
	await expect(page.getByRole('link', { name: '그만하고 복습으로' })).toHaveAttribute(
		'href',
		/\/review\?tab=words$/
	);

	await page.goBack();
	await expect(tab(page, '단어')).toHaveAttribute('aria-selected', 'true');
	await expect(tab(page, '단어')).toHaveText('단어 28');
	await expect(wordRows(page).first()).toContainText('attend');
	await expect(menu(page)).toBeVisible();
});

test('opens 틀린 문제 first when both have items and keeps the word tab in the address', async ({
	page
}) => {
	await page.clock.setFixedTime(new Date('2026-10-23T09:00:00'));
	await seed(page, { 3: dayState(12, { answers: { 'd03-07': 1 } }) });
	await seedWords(page, rated(1, 2, 'unsure', '2026-10-20'));
	await page.goto('/review');
	const tabs = page.getByRole('tablist', { name: '복습 종류' }).getByRole('tab');
	await expect(tabs).toHaveText(['틀린 문제 1', '단어 2']);
	await expect(tab(page, '틀린 문제')).toHaveAttribute('aria-selected', 'true');
	await expect(start(page)).toBeVisible();

	await tab(page, '틀린 문제').press('ArrowRight');
	await expect(tab(page, '단어')).toBeFocused();
	await expect(tab(page, '단어')).toHaveAttribute('aria-selected', 'true');
	await expect(page).toHaveURL(/\/review\?tab=words$/);
	await expect(start(page)).toHaveCount(0);
	await page.reload();
	// A chip change reschedules the word: the row stays, the counts drop.
	const chip = wordRows(page)
		.first()
		.getByRole('button', { name: /^상태 / });
	await chip.click();
	await expect(chip).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
	await expect(wordRows(page)).toHaveCount(2);
	await expect(tabs).toHaveText(['틀린 문제 1', '단어 1']);
	await expect(reviewCards(page)).toHaveText('카드로 1개 복습');
	await wordRows(page)
		.nth(1)
		.getByRole('button', { name: /^상태 / })
		.click();
	const noCards = page.getByRole('button', { name: '카드로 복습' });
	await expect(noCards).toBeDisabled();
	await expect(noCards).toHaveAccessibleDescription('지금 복습할 단어가 없어요');

	await tab(page, '틀린 문제').click();
	await expect(listed(dayGroup(page, 3), 7)).toBeVisible();
	// Opened again, the word tab takes the rows due now.
	await tab(page, '단어').click();
	await expect(page.getByRole('heading', { name: '복습할 단어가 없어요' })).toBeVisible();
});

// Regression: with no wrong questions, the last due word's chip change emptied the due list and
// swapped the whole screen for '틀린 문제가 없어요', so the row could not take its next status.
test('keeps the last due word in place while its status changes', async ({ page }) => {
	await page.clock.setFixedTime(new Date('2026-10-23T09:00:00'));
	await seedWords(page, rated(1, 1, 'new', '2026-10-20'));
	await page.goto('/review');
	await expect(tab(page, '단어')).toHaveAttribute('aria-selected', 'true');
	const chip = wordRows(page)
		.first()
		.getByRole('button', { name: /^상태 / });
	await chip.click();
	await expect(chip).toHaveAccessibleName('상태 애매, 눌러서 바꾸기');
	await chip.click();
	await expect(chip).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
	await expect(wordRows(page)).toHaveCount(1);
	await expect(page.getByRole('heading', { name: '틀린 문제가 없어요' })).toHaveCount(0);
});

test('opens the cards of the word Day for today, then offers the next Day', async ({ page }) => {
	await page.goto('/');
	const words = page.getByRole('region', { name: '오늘의 단어' });
	await expect(words).toContainText('Week 1 · Day 1 · 50단어');
	await expect(words.getByRole('img')).toHaveAccessibleName(
		'처음 25개, 애매 18개, 완벽 7개, 안 봄 0개'
	);
	await expect(words.getByRole('link', { name: '목록' })).toHaveAttribute('href', /\/words\/w1d1$/);
	await expect(page.getByRole('region', { name: '전체 진도' })).toContainText(
		'완벽 147 / 1,000단어'
	);
	await words.getByRole('link', { name: '카드로 외우기 · 43개' }).click();
	await expect(heading(page)).toHaveText('Week 1 · Day 1 카드');
	for (let card = 1; card <= 43; card++) {
		await expect(cardCounter(page)).toHaveText(`${card} / 43`);
		await rateCard(page, 2);
	}
	await expect(page.getByRole('heading', { name: '이번 세트 끝' })).toBeVisible();
	await page.goto('/');
	await expect(words).toContainText('Week 1 · Day 2 · 50단어');
});

test('turns the card button for today off when every word is 완벽', async ({ page }) => {
	const known = { status: 'known', reviewed: '2026-10-20', streak: 1 };
	// Every id a Day could have, so the words repeated in the next Day are covered too.
	const ids = [1, 2, 3, 4].flatMap((week) =>
		[1, 2, 3, 4, 5].flatMap((day) =>
			Array.from(
				{ length: 60 },
				(_, index) => `w${week}d${day}-${String(index + 1).padStart(2, '0')}`
			)
		)
	);
	await seedWords(page, Object.fromEntries(ids.map((id) => [id, known])));
	await page.goto('/');
	const cards = page.getByRole('region', { name: '오늘의 단어' }).getByRole('button');
	await expect(cards).toHaveText('카드로 외우기');
	await expect(cards).toBeDisabled();
	await expect(cards).toHaveAccessibleDescription('외울 단어가 없어요');
	await expect(page.getByRole('region', { name: '전체 진도' })).toContainText(
		'완벽 1,000 / 1,000단어'
	);
});
