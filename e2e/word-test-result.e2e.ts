import { expect, test, type Page } from '@playwright/test';

const heading = (page: Page) => page.getByRole('heading', { level: 1 });
const range = (page: Page, name: string) => page.getByRole('radio', { name, exact: true });
const chip = (page: Page, group: string, name: string) =>
	page.getByLabel(group, { exact: true }).getByRole('radio', { name, exact: true });
const start = (page: Page) => page.getByRole('button', { name: /^\d+문제로 시작$/ });
const answer = (page: Page) => page.getByRole('textbox');
const gradeButton = (page: Page) => page.getByRole('button', { name: '채점하기' });
const cardsButton = (page: Page) => page.getByRole('button', { name: '카드로 다시 보기' });
const wrongRows = (page: Page) =>
	page.getByRole('list', { name: '틀린 단어' }).getByRole('listitem');
const cardCounter = (page: Page) => page.getByRole('banner').getByRole('status');
const readWords = (page: Page) => page.evaluate(() => localStorage.getItem('toeicBasic.words'));

const savedWord = (word: string, meaning: string) => ({ word, meanings: [meaning], sources: [] });
const threeWords = {
	delay: savedWord('delay', '지연'),
	'take leave': savedWord('take leave', '휴가를 내다'),
	refund: savedWord('refund', '환불')
};

async function seedWords(page: Page, record: object) {
	await page.goto('/');
	await page.evaluate(
		(value) => localStorage.setItem('toeicBasic.words', value),
		JSON.stringify({ version: 1, entries: {}, saved: {}, ...record })
	);
}

/** The English of the saved word whose meaning the question shows. */
async function rightAnswer(page: Page) {
	const meaning = await answer(page).evaluate(
		(input) => document.getElementById(input.getAttribute('aria-labelledby')!)!.textContent!
	);
	return Object.values(threeWords).find(({ meanings }) => meaning.includes(meanings[0]))!.word;
}

/** Takes a test of the three saved words, answering each with what `respond` gives. */
async function takeTest(page: Page, respond: (word: string) => string) {
	await seedWords(page, { saved: threeWords });
	await page.goto('/words/test');
	await range(page, '담은 단어').check();
	await start(page).click();
	for (let question = 1; question <= 3; question++) {
		await answer(page).fill(respond(await rightAnswer(page)));
		if (question < 3) await answer(page).press('Enter');
	}
	await gradeButton(page).click();
	await expect(heading(page)).toHaveText('시험 결과');
}

test('shows the score and each wrong word with the answer given', async ({ page }) => {
	await takeTest(page, (word) => (word === 'delay' ? 'dellay' : word === 'refund' ? '' : word));
	await expect(page.getByText('1 / 3')).toBeVisible();
	await expect(wrongRows(page)).toHaveCount(2);
	const delay = wrongRows(page).filter({ hasText: 'delay' });
	await expect(delay).toContainText('내 답 dellay');
	await expect(delay).toContainText('지연');
	await expect(wrongRows(page).filter({ hasText: 'refund' })).toContainText('내 답 (쓰지 않음)');
});

test('keeps each word’s result for the word list, leaving its status alone', async ({ page }) => {
	await takeTest(page, (word) => (word === 'delay' ? 'dellay' : word));
	const entries = Object.values(JSON.parse((await readWords(page))!).entries);
	expect(entries).toHaveLength(3);
	for (const entry of entries) expect(entry).not.toHaveProperty('status');

	await page.goto('/words/saved');
	const row = (english: string) =>
		page.getByRole('main').getByRole('listitem').filter({ hasText: english });
	await expect(row('delay')).toContainText('단어시험 불합격');
	await expect(row('take leave')).toContainText('단어시험 합격');
	await expect(row('refund')).toContainText('단어시험 합격');
});

test('reviews the wrong words as cards and comes back to the same result (AE6)', async ({
	page
}) => {
	await takeTest(page, (word) => (word === 'take leave' ? word : ''));
	await cardsButton(page).click();
	await expect(heading(page)).toHaveText('틀린 단어 카드');
	await expect(cardCounter(page)).toHaveText('1 / 2');
	await page.keyboard.press('Space');
	await page.keyboard.press('Digit3');
	await expect(cardCounter(page)).toHaveText('2 / 2');

	await page.getByRole('link', { name: '그만하고 결과로' }).click();
	await expect(heading(page)).toHaveText('시험 결과');
	await expect(page.getByText('1 / 3')).toBeVisible();
	await expect(cardsButton(page)).toBeFocused();
	const entries: Record<string, object> = JSON.parse((await readWords(page))!).entries;
	expect(Object.values(entries).filter((entry) => 'status' in entry)).toEqual([
		expect.objectContaining({ status: 'known' })
	]);
});

test('opens setup, not stale cards, when back reaches the test again (AE7)', async ({
	page
}, testInfo) => {
	test.skip(testInfo.project.name === 'phone', 'The cards hide the phone tab bar.');
	await takeTest(page, () => '');
	await cardsButton(page).click();
	await expect(heading(page)).toHaveText('틀린 단어 카드');
	await page
		.getByRole('navigation', { name: '주 메뉴' })
		.getByRole('link', { name: '오늘' })
		.click();
	await expect(heading(page)).toHaveText('오늘');
	await page.goBack();
	await expect(start(page)).toBeVisible();

	// A fresh page: the range starts on today's Day again.
	await range(page, '담은 단어').check();
	await start(page).click();
	for (let question = 1; question < 3; question++)
		await page.getByRole('button', { name: '다음', exact: true }).click();
	await gradeButton(page).click();
	await expect(heading(page)).toHaveText('시험 결과');
});

test('keeps closed cards closed when forward reaches their entry again', async ({ page }) => {
	await takeTest(page, () => '');
	await cardsButton(page).click();
	await page.getByRole('link', { name: '그만하고 결과로' }).click();
	await page.getByRole('button', { name: '같은 범위로 다시' }).click();
	await page.goForward();
	await expect(answer(page)).toBeVisible();
	for (let question = 1; question < 3; question++)
		await page.getByRole('button', { name: '다음', exact: true }).click();
	await gradeButton(page).click();
	await expect(heading(page)).toHaveText('시험 결과');
});

test('goes back to setup when the range empties before a retake', async ({ page }) => {
	await takeTest(page, () => '');
	// Another tab removes the saved words.
	await page.evaluate(() => {
		localStorage.setItem(
			'toeicBasic.words',
			JSON.stringify({ version: 1, entries: {}, saved: {} })
		);
		window.dispatchEvent(new StorageEvent('storage', { key: 'toeicBasic.words' }));
	});
	await page.getByRole('button', { name: '같은 범위로 다시' }).click();
	await expect(heading(page)).toHaveText('단어시험');
	await expect(page.getByRole('button', { name: '시작' })).toBeDisabled();
	await expect(page.getByRole('button', { name: '시작' })).toHaveAccessibleDescription(
		'담은 단어가 없어요'
	);
});

test('praises a perfect score and retakes the test or changes the range', async ({ page }) => {
	await takeTest(page, (word) => word.toUpperCase());
	await expect(page.getByText('3 / 3')).toBeVisible();
	await expect(page.getByText('모두 맞혔어요')).toBeVisible();
	await expect(cardsButton(page)).toHaveCount(0);

	await page.getByRole('button', { name: '같은 범위로 다시' }).click();
	await expect(page.getByRole('main').getByRole('status')).toContainText('1 / 3');
	await expect(answer(page)).toHaveValue('');
	await page.getByRole('button', { name: '나가기' }).click();
	await expect(range(page, '담은 단어')).toBeChecked();

	await chip(page, '문항 수', '10').click();
	await start(page).click();
	for (let question = 1; question <= 3; question++) {
		await answer(page).fill(await rightAnswer(page));
		if (question < 3) await answer(page).press('Enter');
	}
	await gradeButton(page).click();
	await page.getByRole('button', { name: '범위 바꾸기' }).click();
	await expect(range(page, '담은 단어')).toBeChecked();
	await expect(chip(page, '문항 수', '10')).toHaveAttribute('aria-checked', 'true');
});
