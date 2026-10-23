import { beforeEach, describe, expect, it } from 'vitest';
import { questionsOf, type QuestionItem } from '#lib/content/index.js';
import {
	defaultProgress,
	newDayProgress,
	parseProgress,
	type Progress,
	type QuestionsOfDay
} from './model';
import {
	goToPage,
	pickAnswer,
	progress,
	readProgressFile,
	replaceProgress,
	resetDay,
	toggleFlag
} from './store.svelte';

const question = (id: string): QuestionItem => ({
	id,
	part: 5,
	options: ['a', 'b', 'c', 'd'],
	answer: 0,
	why: 'why'
});

// Day 1 serves the v1 fixtures; day 2 has room for every kind of miss.
const days: Record<number, QuestionItem[]> = {
	1: [question('a'), question('b')],
	2: ['q1', 'q2', 'q3', 'q4'].map((id) => question(id))
};

const questionsOfDay: QuestionsOfDay = (day) => days[day] ?? null;

const v1Day = (answers: Record<string, unknown>, extra = {}) => ({
	answers,
	graded: false,
	page: 3,
	retry: null,
	...extra
});

/** A day 2 record saved as v2. The settings differ from the day's mode, so a v1 fallback shows. */
const savedV2 = (day2: Record<string, unknown>) => ({
	version: 2,
	settings: { mode: 'exam', rate: 1 },
	days: { 2: { ...newDayProgress(), ...day2 } }
});

const firstScore = (correct: number) => ({ correct, total: 4 });

const retrying = {
	mode: 'instant',
	answers: { q1: 0 },
	retry: ['q2', 'q3', 'q4'],
	firstScore: firstScore(1)
};

describe('parseProgress', () => {
	it('accepts its own v2 format unchanged', () => {
		const progress = defaultProgress();
		expect(parseProgress(structuredClone(progress), questionsOfDay)).toEqual(progress);
	});

	// Regression: a stricter v2 schema reads old records as v1, which drops the first score of a
	// day being retried and takes every mode from the settings.
	it('reads a record saved before misses existed as v2, keeping first scores and modes', () => {
		const saved = savedV2(retrying);
		expect(parseProgress(structuredClone(saved), questionsOfDay)?.days).toMatchObject(saved.days);
	});

	it('reads malformed new fields as missing and keeps the record v2', () => {
		const saved = { ...savedV2({ ...retrying, misses: 'many', flags: 'q2' }), lastDay: 'two' };
		const parsed = parseProgress(saved, questionsOfDay);
		expect(parsed?.days[2]).toMatchObject({ ...retrying, misses: { q2: 1, q3: 1, q4: 1 } });
		expect(parsed?.days[2].flags).toBeUndefined();
		expect(parsed?.lastDay).toBeUndefined();
	});

	it('keeps a chosen theme and reads a malformed one as missing, keeping the record v2', () => {
		const withTheme = (theme: unknown) => ({
			...savedV2(retrying),
			settings: { mode: 'exam', rate: 1, theme }
		});
		expect(parseProgress(withTheme('dark'), questionsOfDay)?.settings.theme).toBe('dark');
		const parsed = parseProgress(withTheme('neon'), questionsOfDay);
		expect(parsed?.settings).toEqual({ mode: 'exam', rate: 1, theme: undefined });
		expect(parsed?.days[2]).toMatchObject(retrying);
	});

	it('migrates a finished v1 day and keeps its first score', () => {
		const v1 = { settings: { mode: 'instant', rate: 0.8 }, days: { 1: v1Day({ a: 0, b: 1 }) } };
		expect(parseProgress(v1, questionsOfDay)).toEqual({
			version: 2,
			settings: { mode: 'instant', rate: 0.8 },
			days: {
				1: {
					...v1Day({ a: 0, b: 1 }),
					mode: 'instant',
					firstScore: { correct: 1, total: 2 },
					misses: { b: 1 }
				}
			}
		});
	});

	it('marks a graded v1 day as an exam attempt and leaves unfinished days open', () => {
		const v1 = {
			settings: { mode: 'instant', rate: 1 },
			days: { 1: v1Day({ a: 0 }, { graded: true }) }
		};
		expect(parseProgress(v1, questionsOfDay)?.days[1]).toMatchObject({
			mode: 'exam',
			firstScore: { correct: 1, total: 2 }
		});
		const open = parseProgress({ days: { 1: v1Day({ a: 0 }) } }, questionsOfDay);
		expect(open?.settings).toEqual({ mode: 'instant', rate: 1 });
		expect(open?.days[1].firstScore).toBeNull();
	});

	it('drops v1 days that no longer exist', () => {
		expect(parseProgress({ days: { 99: v1Day({}) } }, questionsOfDay)?.days).toEqual({});
	});

	// Regression: the original import accepted `days: null` and broke the app.
	it.each([
		['null days', { days: null }],
		['wrong answer type', { days: { 1: v1Day({ a: 'x' }) } }],
		['answer out of range', { days: { 1: v1Day({ a: 7 }) } }],
		['unknown mode', { version: 2, settings: { mode: 'fast', rate: 1 }, days: {} }],
		['not an object', 'hello']
	])('rejects %s', (_, raw) => {
		expect(parseProgress(raw, questionsOfDay)).toBeNull();
	});
});

describe('misses of a record saved before they were counted', () => {
	it.each<[string, Record<string, unknown>, Record<string, number>]>([
		[
			'the revealed wrong answers of an instant day',
			{ mode: 'instant', answers: { q1: 1, q2: 2, q3: 0 } },
			{ q1: 1, q2: 1 }
		],
		[
			'questions waiting to be retried',
			{
				mode: 'instant',
				answers: { q1: 0, q2: 0 },
				retry: ['q3', 'q4'],
				firstScore: firstScore(2)
			},
			{ q3: 1, q4: 1 }
		],
		[
			'nothing on an exam day before its first grading',
			{ mode: 'exam', answers: { q1: 1, q2: 0 } },
			{}
		],
		[
			'every question of an exam retry, answered again or not',
			{
				mode: 'exam',
				answers: { q1: 0, q2: 0, q3: 1 },
				retry: ['q2', 'q3', 'q4'],
				firstScore: firstScore(1)
			},
			{ q2: 1, q3: 1, q4: 1 }
		],
		[
			'the blanks of a graded exam day',
			{ mode: 'exam', graded: true, answers: { q1: 0, q2: 1 }, firstScore: firstScore(1) },
			{ q2: 1, q3: 1, q4: 1 }
		],
		[
			'blanks left by showing all pages during an instant retry',
			{ mode: 'instant', answers: { q1: 0, q2: 0 }, firstScore: firstScore(2) },
			{ q3: 1, q4: 1 }
		]
	])('counts %s', (_, day2, misses) => {
		expect(parseProgress(savedV2(day2), questionsOfDay)?.days[2].misses).toEqual(misses);
	});

	it('counts the misses of an imported v1 record', () => {
		const v1 = { days: { 1: v1Day({ a: 0 }, { retry: ['b'] }) } };
		expect(parseProgress(v1, questionsOfDay)?.days[1]).toMatchObject({
			firstScore: null,
			misses: { b: 1 }
		});
	});
});

describe('progress store', () => {
	const [first] = questionsOf(1);
	const wrongChoice = (first.answer + 1) % first.options.length;

	beforeEach(() => replaceProgress(defaultProgress()));

	it('keeps misses, flags and the last day through export and import', async () => {
		const exported: Progress = {
			version: 2,
			settings: { mode: 'exam', rate: 1 },
			lastDay: 2,
			days: {
				2: {
					...newDayProgress(),
					mode: 'instant',
					answers: { q1: 1 },
					misses: { q1: 2 },
					flags: ['q3']
				}
			}
		};
		replaceProgress(structuredClone(exported));
		const file = new File([JSON.stringify(progress)], 'toeic-basic-progress.json');
		replaceProgress(defaultProgress());
		replaceProgress((await readProgressFile(file))!);
		expect(progress).toEqual(exported);
	});

	it('remembers the day studied last', () => {
		goToPage(3, 1);
		expect(progress.lastDay).toBe(3);
		pickAnswer(1, first, first.answer);
		expect(progress.lastDay).toBe(1);
	});

	it('toggles a flag on and off', () => {
		toggleFlag(1, 'd01-05');
		toggleFlag(1, 'd01-07');
		toggleFlag(1, 'd01-05');
		expect(progress.days[1].flags).toEqual(['d01-07']);
	});

	it('forgets the misses and flags of a reset day', () => {
		pickAnswer(1, first, wrongChoice);
		toggleFlag(1, first.id);
		expect(progress.days[1]).toMatchObject({ misses: { [first.id]: 1 }, flags: [first.id] });
		resetDay(1);
		expect(progress.days[1]).toBeUndefined();
	});
});
