import { expect, test, type Page } from '@playwright/test';

const menu = (page: Page) => page.getByRole('navigation', { name: '주 메뉴' });
const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const cardButton = (page: Page) => page.getByRole('button', { name: /^카드로 외우기/ });
const counter = (page: Page) => page.getByRole('banner').getByRole('status');
const front = (page: Page) => page.getByRole('button', { name: /카드를 누르면/ });
const direction = (page: Page) => page.getByRole('group', { name: '카드 방향' });
const speakButton = (page: Page) => page.getByRole('button', { name: '발음 듣기' });
const results = (page: Page) => page.getByRole('list', { name: '평가 결과' }).getByRole('listitem');
const closeLink = (page: Page) => page.getByRole('link', { name: '그만하고 목록으로' });
const firstChip = (page: Page) =>
	page
		.getByRole('main')
		.getByRole('listitem')
		.first()
		.getByRole('button', { name: /^상태 / });

const known = { status: 'known', reviewed: '2026-10-20', streak: 1 };
// Week 1 · Day 1 with every word 완벽 but additional (1), attend (3) and available (4).
const threeLeft = Object.fromEntries(
	Array.from({ length: 50 }, (_, index) => `w1d1-${String(index + 1).padStart(2, '0')}`)
		.filter((id) => !['w1d1-01', 'w1d1-03', 'w1d1-04'].includes(id))
		.map((id) => [id, known])
);

async function seedWords(page: Page, record: object) {
	await page.goto('/');
	await page.evaluate(
		(value) => localStorage.setItem('toeicBasic.words', value),
		JSON.stringify({ version: 1, entries: {}, saved: {}, ...record })
	);
}

const savedEntries = (page: Page, ids: string[]) =>
	page.evaluate((ids) => {
		const { entries } = JSON.parse(localStorage.getItem('toeicBasic.words')!);
		return ids.map((id) => entries[id]);
	}, ids);

/** Turns the card over with its button and rates it. */
async function rate(page: Page, label: '처음' | '애매' | '완벽') {
	await page.getByRole('button', { name: '뜻 보기', exact: true }).click();
	await page
		.getByRole('group', { name: '이 단어 평가' })
		.getByRole('button', { name: new RegExp(`^${label}`) })
		.click();
}

interface FakeSpeech {
	spoken: { text: string }[];
	cancels: number;
}

/** Records what the app asks speechSynthesis to say, with one English voice installed. */
async function fakeSpeech(page: Page) {
	await page.addInitScript(() => {
		const fake: FakeSpeech = { spoken: [], cancels: 0 };
		Object.assign(window, { fake });
		window.SpeechSynthesisUtterance = class {
			text: string;
			constructor(text: string) {
				this.text = text;
			}
		} as never;
		speechSynthesis.getVoices = () => [{ name: 'Test Voice', lang: 'en-US' }] as never;
		speechSynthesis.speak = (utterance) => void fake.spoken.push(utterance as never);
		speechSynthesis.cancel = () => void fake.cancels++;
	});
	return () => page.evaluate(() => (window as unknown as { fake: FakeSpeech }).fake);
}

test('brings a 처음 card back once, then starts again with 처음 and 애매 (AE4)', async ({
	page
}) => {
	await seedWords(page, { entries: threeLeft });
	await page.goto('/words/w1d1');
	await expect(cardButton(page)).toHaveText('카드로 외우기 · 외울 단어 3개');
	await cardButton(page).click();
	await expect(heading(page)).toHaveText('Week 1 · Day 1 카드');
	await expect(counter(page)).toHaveText('1 / 3');
	await expect(front(page)).toContainText('additional');

	await rate(page, '처음');
	await expect(counter(page)).toHaveText('2 / 4');
	await expect(front(page)).toContainText('attend');
	await rate(page, '애매');
	await rate(page, '완벽');
	await expect(counter(page)).toHaveText('4 / 4');
	await expect(front(page)).toContainText('additional');
	await rate(page, '처음');

	await expect(page.getByRole('heading', { name: '이번 세트 끝' })).toBeFocused();
	await expect(results(page)).toHaveText(['처음 1', '애매 1', '완벽 1']);
	const [a, b, c] = await savedEntries(page, ['w1d1-01', 'w1d1-03', 'w1d1-04']);
	expect([a.status, b.status, c.status]).toEqual(['new', 'unsure', 'known']);

	await page.getByRole('button', { name: '처음·애매만 한 번 더' }).click();
	await expect(counter(page)).toHaveText('1 / 2');
	await expect(front(page)).toContainText('additional');
	await rate(page, '완벽');
	await expect(front(page)).toContainText('attend');
});

test('records 완벽 for a word rated 처음 and then 완벽, and goes back to the list', async ({
	page
}) => {
	await seedWords(page, { entries: threeLeft });
	await page.goto('/words/w1d1');
	await cardButton(page).click();
	for (const label of ['처음', '완벽', '완벽', '완벽'] as const) await rate(page, label);

	await expect(results(page)).toHaveText(['처음 0', '애매 0', '완벽 3']);
	await expect(page.getByRole('button', { name: '처음·애매만 한 번 더' })).toHaveCount(0);
	const [additional] = await savedEntries(page, ['w1d1-01']);
	expect(additional).toMatchObject({ status: 'known', streak: 1 });

	await page.getByRole('main').getByRole('link', { name: '목록으로' }).click();
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	await expect(cardButton(page)).toBeDisabled();
});

test('shows the meanings first from 뜻 to 영어 and keeps the direction', async ({ page }) => {
	await page.goto('/words/w1d1');
	await cardButton(page).click();
	await expect(direction(page).getByRole('button', { name: '영어 → 뜻' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await expect(front(page)).toContainText('additional');
	await expect(speakButton(page)).toBeVisible();

	await direction(page).getByRole('button', { name: '뜻 → 영어' }).click();
	await expect(front(page)).toContainText('추가의, 부가의');
	await expect(front(page)).not.toContainText('additional');
	await expect(speakButton(page)).toHaveCount(0);
	await page.getByRole('button', { name: '영어 보기' }).click();
	await expect(page.getByRole('main')).toContainText('additional');
	await expect(speakButton(page)).toBeVisible();

	await closeLink(page).click();
	await page.reload();
	await cardButton(page).click();
	await expect(direction(page).getByRole('button', { name: '뜻 → 영어' })).toHaveAttribute(
		'aria-pressed',
		'true'
	);
	await expect(front(page)).toContainText('추가의, 부가의');
});

test('flips with Space and rates the back with 1–3, moving focus for the next key', async ({
	page
}) => {
	await seedWords(page, { entries: threeLeft });
	await page.goto('/words/w1d1');
	await cardButton(page).click();
	await expect(heading(page)).toBeFocused();
	await page.keyboard.press('Digit1');
	await expect(counter(page)).toHaveText('1 / 3');

	await page.keyboard.press('Space');
	// Focus sits on the back itself, not on a button that Space would press.
	const focused = page.locator(':focus');
	await expect(focused).toContainText('추가의');
	await expect(page.locator('button:focus')).toHaveCount(0);
	await page.keyboard.press('Space');
	await page.keyboard.press('Digit4');
	await expect(counter(page)).toHaveText('1 / 3');

	await page.keyboard.press('Digit2');
	await expect(counter(page)).toHaveText('2 / 3');
	await expect(front(page)).toBeFocused();
	await expect(front(page)).toContainText('attend');
	// The focused front is a button, so Space presses it and turns the card once.
	await page.keyboard.press('Space');
	await expect(focused).toContainText('참석하다');
	await page.keyboard.press('Digit3');
	await expect(counter(page)).toHaveText('3 / 3');

	const [additional, attend] = await savedEntries(page, ['w1d1-01', 'w1d1-03']);
	expect([additional.status, attend.status]).toEqual(['unsure', 'known']);
});

test('closes the cards with the back button and keeps the ratings given', async ({ page }) => {
	await page.goto('/words/w1d1');
	await cardButton(page).click();
	await rate(page, '완벽');
	await expect(counter(page)).toHaveText('2 / 43');

	await page.goBack();
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	await expect(page).toHaveURL(/\/words\/w1d1$/);
	await expect(firstChip(page)).toHaveAccessibleName('상태 완벽, 눌러서 바꾸기');
	await expect(cardButton(page)).toHaveText('카드로 외우기 · 외울 단어 42개');
});

test('closes the cards from the header without leaving a card entry behind', async ({
	page
}, testInfo) => {
	await page.goto('/words');
	await page.getByRole('link', { name: /^Day 1 / }).click();
	await cardButton(page).click();
	await expect(heading(page)).toHaveText('Week 1 · Day 1 카드');
	if (testInfo.project.name === 'phone') await expect(menu(page)).toBeHidden();
	else await expect(menu(page)).toBeVisible();

	await expect(closeLink(page)).toHaveAttribute('href', /\/words\/w1d1$/);
	await closeLink(page).click();
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	await page.goBack();
	await expect(heading(page)).toHaveText('단어장');
});

test('opens the cards from a link to the Day, and back reaches the Day list first', async ({
	page
}) => {
	await page.goto('/');
	await page.goto('/words/w1d1?cards');
	await expect(heading(page)).toHaveText('Week 1 · Day 1 카드');
	await expect(page).toHaveURL(/\/words\/w1d1$/);

	await page.goBack();
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	await expect(page).toHaveURL(/\/words\/w1d1$/);
	await page.goBack();
	await expect(heading(page)).toHaveText('오늘');
});

test('opens the word list without the cards after a reload', async ({ page }) => {
	await page.goto('/words/w1d1');
	await cardButton(page).click();
	await expect(heading(page)).toHaveText('Week 1 · Day 1 카드');
	await page.reload();
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	await expect(page.getByRole('main').getByRole('listitem')).toHaveCount(50);
});

test('reads the word aloud and stops speaking when the card changes or closes', async ({
	page
}) => {
	const speech = await fakeSpeech(page);
	await page.goto('/words/w1d1');
	await cardButton(page).click();
	await speakButton(page).click();
	await expect
		.poll(async () => (await speech()).spoken.map(({ text }) => text))
		.toEqual(['additional']);

	const before = (await speech()).cancels;
	await rate(page, '애매');
	await expect(counter(page)).toHaveText('2 / 43');
	const afterRating = (await speech()).cancels;
	expect(afterRating).toBeGreaterThan(before);

	await closeLink(page).click();
	await expect(heading(page)).toHaveText('Week 1 · Day 1');
	expect((await speech()).cancels).toBeGreaterThan(afterRating);
});
