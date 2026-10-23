import { describe, expect, it } from 'vitest';
import { recordKey, wordDays, wordsOf, type WordStatus } from '#lib/content/words.js';
import {
	addDays,
	countStatuses,
	deckOf,
	dueItems,
	dueOn,
	localDate,
	nextStatus,
	normalizeEnglish,
	pdfDaysOf,
	pdfItem,
	rated,
	savedItem,
	starOf,
	statusOf,
	todayWordDay,
	vocabChip,
	withMeaning,
	withoutMeaning,
	withStatus,
	type StudyItem,
	type WordEntries
} from './words';

const today = '2026-10-23';
const item = (key: string, initial: WordStatus): StudyItem => ({ key, initial });
const days = wordDays.map(({ key }) => ({ key, items: wordsOf(key).map(pdfItem) }));

/** Rates every word of a Day's deck on the given date, as a card session would. */
function rateDeck(entries: WordEntries, day: string, status: WordStatus, on = today) {
	for (const { key } of deckOf(entries, wordsOf(day).map(pdfItem))) {
		entries[key] = rated(entries[key], status, on);
	}
	return entries;
}

describe('status and schedule', () => {
	it('reads a word without a record by the status it starts with, outside the review (AE1)', () => {
		const words = [item('w1d1-03', 'unsure')];
		expect(statusOf({}, words[0])).toBe('unsure');
		expect(dueItems({}, words, today)).toEqual([]);
	});

	it('starts every PDF word 처음 until the learner changes it', () => {
		const attend = pdfItem(wordsOf('w1d1')[2]);
		expect(statusOf({}, attend)).toBe('new');
		expect(statusOf({ [attend.key]: rated(undefined, 'known', today) }, attend)).toBe('known');
	});

	it('brings a word rated 처음 back the next day, not the same day (AE1)', () => {
		const words = [item('w1d1-03', 'unsure')];
		const entries = { 'w1d1-03': rated(undefined, 'new', today) };
		expect(statusOf(entries, words[0])).toBe('new');
		expect(dueItems(entries, words, today)).toEqual([]);
		expect(dueItems(entries, words, '2026-10-24')).toEqual(words);
	});

	it.each([
		['unsure', '2026-10-26'],
		['known', '2026-10-30']
	] as const)('schedules a word rated %s for %s', (status, due) => {
		expect(dueOn(rated(undefined, status, today))).toBe(due);
	});

	it('lengthens the 완벽 interval with each one in a row, up to 120 days', () => {
		let entry = undefined;
		const gaps: number[] = [];
		let on = today;
		for (let time = 0; time < 7; time++) {
			entry = rated(entry, 'known', on);
			const due = dueOn(entry)!;
			gaps.push((Date.parse(due) - Date.parse(on)) / 86_400_000);
			on = due;
		}
		expect(gaps).toEqual([7, 14, 30, 60, 120, 120, 120]);
	});

	it('starts the 완벽 run again after an 애매', () => {
		const entry = rated(rated(rated(undefined, 'known', today), 'known', today), 'unsure', today);
		expect(entry.streak).toBe(0);
		expect(dueOn(rated(entry, 'known', today))).toBe('2026-10-30');
	});

	it('cycles the status chip from 안 봄 through 처음, 애매 and 완벽 back to 처음', () => {
		const order = ['unseen', 'new', 'unsure', 'known', 'new'] as const;
		for (const [index, status] of order.slice(0, -1).entries()) {
			expect(nextStatus(status)).toBe(order[index + 1]);
		}
	});

	it('schedules a word the chip makes 완벽 like a first 완벽', () => {
		const entry = withStatus(rated(undefined, 'known', today), 'known', today);
		expect(entry).toMatchObject({ status: 'known', streak: 1, reviewed: today });
		expect(dueOn(entry)).toBe('2026-10-30');
	});

	// Regression: a 완벽 record without a run, as in an edited backup, read interval -1 and threw.
	it('schedules a 완벽 record without a run like a first 완벽', () => {
		expect(dueOn({ status: 'known', reviewed: today })).toBe('2026-10-30');
		expect(dueOn({ status: 'known', reviewed: today, streak: 0 })).toBe('2026-10-30');
	});

	it('takes the date a word was rated at 23:59 as that day', () => {
		const late = localDate(new Date(2026, 9, 23, 23, 59));
		expect(late).toBe(today);
		const words = [item('a', 'new')];
		const entries = { a: rated(undefined, 'new', late) };
		expect(dueItems(entries, words, localDate(new Date(2026, 9, 24, 0, 0)))).toEqual(words);
	});

	it('adds days across a month end', () => {
		expect(addDays('2026-10-30', 3)).toBe('2026-11-02');
	});
});

describe('repeated rows and stars', () => {
	it('gives both rows of a repeated word one record and one review entry (AE2)', () => {
		const earlier = wordsOf('w3d2').find((word) => word.word === 'temporary')!;
		const later = wordsOf('w3d3').find((word) => word.word === 'temporary')!;
		expect(recordKey(later)).toBe(recordKey(earlier));
		const entries = { [recordKey(earlier)]: rated(undefined, 'new', today) };
		const words = [...wordsOf('w3d2'), ...wordsOf('w3d3')].map(pdfItem);
		const due = dueItems(entries, words, '2026-10-24');
		expect(due.map(({ key }) => key)).toEqual([recordKey(earlier)]);
	});

	it('keeps a star turned off and uses the PDF star when there is no record (AE3)', () => {
		const desirable = pdfItem(wordsOf('w1d1').find((word) => word.word === 'desirable')!);
		expect(starOf({}, desirable)).toBe(true);
		expect(starOf({ [desirable.key]: { star: false } }, desirable)).toBe(false);
		expect(starOf({}, item('saved:take leave', 'unseen'))).toBe(false);
	});
});

describe('lists', () => {
	it('orders the review by due date, then by the order given', () => {
		const words = [item('a', 'new'), item('b', 'new'), item('c', 'new'), item('d', 'new')];
		const entries = {
			a: rated(undefined, 'unsure', '2026-10-20'),
			b: rated(undefined, 'new', '2026-10-20'),
			c: rated(undefined, 'new', '2026-10-21'),
			d: rated(undefined, 'new', '2026-10-20')
		};
		expect(dueItems(entries, words, today).map(({ key }) => key)).toEqual(['b', 'd', 'c', 'a']);
	});

	it('puts every word but the 완벽 ones in a deck, 안 봄 included', () => {
		const words = [item('a', 'unseen'), item('b', 'known'), item('c', 'unsure'), item('d', 'new')];
		const entries = { c: rated(undefined, 'known', today) };
		expect(deckOf(entries, words).map(({ key }) => key)).toEqual(['a', 'd']);
		expect(deckOf({}, [item('b', 'known')])).toEqual([]);
	});

	it('counts statuses by record, so a repeated word counts once overall', () => {
		const rows = days.flatMap((day) => day.items);
		const overall = countStatuses({}, rows);
		expect(Object.values(overall).reduce((sum, count) => sum + count, 0)).toBe(1000);
		expect(overall).toEqual({ unseen: 0, new: 1000, unsure: 0, known: 0 });
		const w3d3 = countStatuses({}, wordsOf('w3d3').map(pdfItem));
		expect(Object.values(w3d3).reduce((sum, count) => sum + count, 0)).toBe(50);
	});
});

describe('today’s word day', () => {
	it('starts on Week 1 · Day 1', () => {
		expect(todayWordDay({}, undefined, days)).toBe('w1d1');
	});

	it('stays on the day opened last while its deck has words not rated yet', () => {
		const entries = rateDeck({}, 'w1d1', 'known');
		expect(todayWordDay(entries, 'w2d3', days)).toBe('w2d3');
	});

	it('takes the day with the most words not 완벽 once every deck is rated', () => {
		const entries: WordEntries = {};
		for (const { key } of wordDays) rateDeck(entries, key, 'known');
		for (const { key } of wordsOf('w2d4').map(pdfItem))
			entries[key] = rated(undefined, 'new', today);
		expect(todayWordDay(entries, 'w1d1', days)).toBe('w2d4');
	});

	it('passes over a day opened last that the wordbook does not have', () => {
		expect(todayWordDay({}, 'w9d9', days)).toBe('w1d1');
	});
});

describe('saved words (KTD14)', () => {
	const delay = pdfItem(wordsOf('w3d2').find((word) => word.word === 'delay')!);

	it('keys a saved word by its English in lowercase with single spaces', () => {
		expect(normalizeEnglish('  Take   Leave ')).toBe('take leave');
		expect(normalizeEnglish('take leave')).toBe(normalizeEnglish('Take Leave'));
	});

	it('keeps the first spelling and gathers new meanings and questions in save order', () => {
		const first = withMeaning(undefined, 'How long', '얼마나 오래', 'd05-01');
		const again = withMeaning(first, 'how long', '얼마 동안', 'd07-02');
		expect(again).toEqual({
			word: 'How long',
			meanings: ['얼마나 오래', '얼마 동안'],
			sources: ['d05-01', 'd07-02']
		});
		expect(withMeaning(again, 'how long', '얼마나 오래', 'd05-01')).toEqual(again);
	});

	it('takes a meaning back off, and the word with its last one', () => {
		const one = withMeaning(undefined, 'delay', '연기하다', 'd01-01');
		const both = withMeaning(one, 'delay', '지연', 'd11-13');
		expect(withoutMeaning(both, '연기하다', 'd01-01')).toEqual({
			word: 'delay',
			meanings: ['지연'],
			sources: ['d11-13']
		});
		expect(withoutMeaning(one, '연기하다', 'd01-01')).toBeNull();
	});

	it('studies a word the PDF has under the PDF word’s record, so it comes up once (AE7)', () => {
		expect(savedItem('delay')).toEqual(delay);
		expect(pdfDaysOf('delay')).toEqual([{ week: 3, day: 2 }]);
		const entries = { [savedItem('delay').key]: rated(undefined, 'known', '2026-10-01') };
		expect(statusOf(entries, delay)).toBe('known');
		expect(dueItems(entries, [delay, savedItem('delay')], today)).toEqual([delay]);
	});

	it('gives a word the PDF lacks its own record, 안 봄 until rated', () => {
		expect(savedItem('take leave')).toEqual({ key: 'saved:take leave', initial: 'unseen' });
		expect(pdfDaysOf('take leave')).toEqual([]);
		const entries = { 'saved:take leave': rated(undefined, 'new', today) };
		expect(statusOf(entries, delay)).toBe(delay.initial);
	});

	it('names both Days of a repeated word and shares the record of its rows', () => {
		expect(pdfDaysOf('temporary')).toEqual([
			{ week: 3, day: 2 },
			{ week: 3, day: 3 }
		]);
		const [later] = wordsOf('w3d3').filter((word) => word.word === 'temporary');
		expect(savedItem('temporary').key).toBe(recordKey(later));
	});

	it('lets the chip take its meaning back until the word is rated, then not (R15)', () => {
		const saved = { delay: withMeaning(undefined, 'delay', '지연', 'd11-13') };
		expect(vocabChip({}, {}, 'delay', '지연')).toBe('off');
		expect(vocabChip(saved, {}, 'Delay', '지연')).toBe('on');
		expect(vocabChip(saved, {}, 'delay', '연기하다')).toBe('off');
		// A star alone is no rating.
		expect(vocabChip(saved, { [delay.key]: { star: true } }, 'delay', '지연')).toBe('on');
		// Rated on the PDF list, which shares the record: kept from the start.
		const ratedDelay = { [delay.key]: rated(undefined, 'new', today) };
		expect(vocabChip(saved, ratedDelay, 'delay', '지연')).toBe('kept');
	});
});
