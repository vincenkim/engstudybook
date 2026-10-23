import { describe, expect, it } from 'vitest';
import { dayContent, questionsOf, type Passage, type SetPage } from '#lib/content/index.js';
import type { ReviewItem } from '#lib/progress/review.js';
import { reviewByDay, reviewScreens, reviewSummary, setOf } from './review-screens';

const item = (day: number, number: number, misses = 1): ReviewItem => ({
	day,
	number,
	question: questionsOf(day)[number - 1],
	misses
});
const pagesOf = (day: number) => dayContent(day).pages;
const screensOf = (...items: ReviewItem[]) =>
	reviewScreens(items, pagesOf).map((screen) => ({
		day: screen.day,
		numbers: screen.items.map((i) => i.number),
		set: screen.set?.questions.map((q) => q.id) ?? null
	}));
const textOf = (passages: Passage[]) =>
	passages.flatMap((p) => p.body.filter((block) => typeof block === 'string')).join(' ');
const setFor = (day: number, number: number) =>
	setOf(pagesOf(day), questionsOf(day)[number - 1].id) as SetPage;

describe('reviewScreens', () => {
	it('gives each single question its own screen in list order', () => {
		expect(screensOf(item(1, 4), item(1, 9), item(2, 3))).toEqual([
			{ day: 1, numbers: [4], set: null },
			{ day: 1, numbers: [9], set: null },
			{ day: 2, numbers: [3], set: null }
		]);
	});

	it('puts consecutive questions of a set on one screen with only those questions', () => {
		expect(screensOf(item(25, 1), item(25, 2), item(25, 4))).toEqual([
			{ day: 25, numbers: [1, 2], set: ['d25-01', 'd25-02'] },
			{ day: 25, numbers: [4], set: ['d25-04'] }
		]);
	});

	it('puts questions of a set on one screen with a question left out between them', () => {
		expect(screensOf(item(25, 1), item(25, 3))).toEqual([
			{ day: 25, numbers: [1, 3], set: ['d25-01', 'd25-03'] }
		]);
	});

	it("takes the number of the set's first question, which seeds the voices as in the Day", () => {
		const screens = reviewScreens([item(1, 4), item(25, 3), item(25, 15), item(25, 16)], pagesOf);
		expect(screens.map((screen) => screen.first)).toEqual([4, 1, 14]);
	});

	it('keeps the passage of a Part 7 set', () => {
		const [screen] = reviewScreens([item(25, 2)], pagesOf);
		const set = setFor(25, 2);
		expect(screen.set?.part === 7 && screen.set.passages).toEqual(set.part === 7 && set.passages);
	});

	it('keeps the numbers of the Part 6 blanks shown and empties the others', () => {
		const [screen] = reviewScreens([item(17, 14), item(17, 15)], pagesOf);
		const passages = screen.set?.part === 6 ? screen.set.passages : [];
		const text = textOf(passages);
		expect(text.match(/\{\d\}/g)).toEqual(['{2}', '{3}']);
		expect(text).toContain('The cleaning crew ----- at 9 A.M.');
		expect(text).toContain('{2} left on the floor');
		expect(text).toContain('The work will be done {3}');
		expect(text).toContain('Thank you for your -----.');
	});

	it('leaves the set in the content as it was', () => {
		reviewScreens([item(17, 14)], pagesOf);
		const set = setFor(17, 14);
		expect(set.questions).toHaveLength(4);
		expect(set.part === 6 && textOf(set.passages).match(/\{\d\}/g)).toEqual([
			'{1}',
			'{2}',
			'{3}',
			'{4}'
		]);
	});
});

describe('reviewSummary', () => {
	it('names a Part 2 question without its script', () => {
		const listening = item(3, 16);
		expect(reviewSummary(listening, setOf(pagesOf(3), listening.question.id))).toEqual({
			text: '듣기 · 질문 응답',
			english: false
		});
	});

	it('names a Part 6 question by its blank in the set', () => {
		const blank = item(17, 14);
		expect(reviewSummary(blank, setFor(17, 14))).toEqual({
			text: '빈칸 (2) · 이메일',
			english: false
		});
	});

	it('shows the question text of other parts', () => {
		const single = item(3, 7);
		expect(reviewSummary(single, null)).toEqual({
			text: 'The new printer is faster than the old one, but ------- is more expensive.',
			english: true
		});
		const reading = item(25, 2);
		expect(reviewSummary(reading, setFor(25, 2))).toEqual({
			text: 'Why was the meeting moved?',
			english: true
		});
	});
});

describe('reviewByDay', () => {
	it('groups the list by Day in its order', () => {
		const groups = reviewByDay([item(1, 4), item(1, 9), item(3, 7)]);
		expect(groups.map(({ day, items }) => [day, items.map((i) => i.number)])).toEqual([
			[1, [4, 9]],
			[3, [7]]
		]);
	});
});
