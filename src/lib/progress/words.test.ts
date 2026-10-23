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
	pdfItem,
	rated,
	starOf,
	statusOf,
	todayWordDay,
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
	it('reads a word without a record by its PDF status, outside the review (AE1)', () => {
		const words = [item('w1d1-03', 'unsure')];
		expect(statusOf({}, words[0])).toBe('unsure');
		expect(dueItems({}, words, today)).toEqual([]);
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
		expect(overall).toEqual({ unseen: 2, new: 248, unsure: 603, known: 147 });
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

	// Regression: PDF 완벽 words never reach a deck, so counting them kept the day from moving on.
	it('moves on once the deck of the day is rated, PDF 완벽 words left unrated', () => {
		expect(wordsOf('w1d1').some((word) => word.initial === 'known')).toBe(true);
		const entries = rateDeck({}, 'w1d1', 'unsure');
		expect(todayWordDay(entries, 'w1d1', days)).toBe('w1d2');
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
