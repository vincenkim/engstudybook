import { describe, expect, it } from 'vitest';
import { hasDay, questionsOf, type QuestionItem } from '#lib/content/index.js';
import { grade, pick, scoreOf, startRetry } from './attempt';
import {
	defaultProgress,
	newDayProgress,
	parseProgress,
	type DayProgress,
	type Mode,
	type Progress,
	type QuestionsOfDay
} from './model';
import { pickInReview, reviewList, type ReviewItem } from './review';

const questionsOfDay: QuestionsOfDay = (day) => (hasDay(day) ? questionsOf(day) : null);
const settingsOf = (mode: Mode) => ({ mode, rate: 1 as const });
const questionOf = (day: number, number: number) => questionsOf(day)[number - 1];
const wrongChoice = (question: QuestionItem) => (question.answer + 1) % question.options.length;

/** Answers the first `count` questions of a day in order, wrong for the given question numbers. */
function solve(day: number, mode: Mode, wrong: number[], count = 25) {
	const state = newDayProgress();
	const questions = questionsOf(day);
	for (const [index, question] of questions.slice(0, count).entries()) {
		const choice = wrong.includes(index + 1) ? wrongChoice(question) : question.answer;
		pick(state, settingsOf(mode), questions, question, choice);
	}
	return state;
}

const progressOf = (days: Record<number, DayProgress>, mode: Mode = 'instant'): Progress => ({
	...defaultProgress(),
	settings: settingsOf(mode),
	days
});

/** The list as the review screen labels it. */
const review = (progress: Progress) =>
	reviewList(progress, questionsOfDay).map(
		({ day, number, misses }: ReviewItem) => `Day ${day} · ${number}번 · ${misses}번 틀림`
	);

describe('reviewList', () => {
	it('lists the misses of a record saved before they were counted at once', () => {
		const saved = solve(3, 'instant', [7], 7);
		delete saved.misses;
		const progress = parseProgress(
			JSON.parse(JSON.stringify(progressOf({ 3: saved }))),
			questionsOfDay
		);
		expect(review(progress!)).toEqual(['Day 3 · 7번 · 1번 틀림']);
	});

	it('leaves out the answers of an exam day before its grading', () => {
		const progress = progressOf({
			1: solve(1, 'instant', [3]),
			5: solve(5, 'exam', [2, 4, 6], 10)
		});
		expect(review(progress)).toEqual(['Day 1 · 3번 · 1번 틀림']);
	});

	it('keeps the questions waiting to be retried', () => {
		const state = solve(2, 'instant', [3, 8]);
		startRetry(state, questionsOf(2));
		expect(review(progressOf({ 2: state }))).toEqual([
			'Day 2 · 3번 · 1번 틀림',
			'Day 2 · 8번 · 1번 틀림'
		]);
	});

	it('lists by day, then by question order', () => {
		const day4 = newDayProgress();
		for (const number of [9, 2]) {
			const question = questionOf(4, number);
			pick(day4, settingsOf('instant'), questionsOf(4), question, wrongChoice(question));
		}
		expect(review(progressOf({ 4: day4, 1: solve(1, 'instant', [6]) }))).toEqual([
			'Day 1 · 6번 · 1번 틀림',
			'Day 4 · 2번 · 1번 틀림',
			'Day 4 · 9번 · 1번 틀림'
		]);
	});

	it('hides an exam retry until it is graded again, then lists what is still wrong', () => {
		const questions = questionsOf(2);
		const state = solve(2, 'exam', [3, 8]);
		grade(state, questions);
		expect(review(progressOf({ 2: state }, 'exam'))).toHaveLength(2);
		startRetry(state, questions);
		pick(state, settingsOf('exam'), questions, questionOf(2, 3), questionOf(2, 3).answer);
		pick(state, settingsOf('exam'), questions, questionOf(2, 8), wrongChoice(questionOf(2, 8)));
		expect(review(progressOf({ 2: state }, 'exam'))).toEqual([]);
		grade(state, questions);
		expect(review(progressOf({ 2: state }, 'exam'))).toEqual(['Day 2 · 8번 · 2번 틀림']);
	});
});

describe('pickInReview', () => {
	it('takes a question answered right off the list and raises only the current score', () => {
		const questions = questionsOf(1);
		const state = solve(1, 'instant', [2, 9, 14, 20]);
		startRetry(state, questions);
		pick(state, settingsOf('instant'), questions, questionOf(1, 2), questionOf(1, 2).answer);
		state.page = 1;
		expect(state.firstScore).toEqual({ correct: 21, total: 25 });
		expect(scoreOf(questions, state.answers).correct).toBe(22);

		expect(pickInReview(state, questionOf(1, 9), questionOf(1, 9).answer)).toBe(true);
		expect(review(progressOf({ 1: state }))).toEqual([
			'Day 1 · 14번 · 1번 틀림',
			'Day 1 · 20번 · 1번 틀림'
		]);
		expect(scoreOf(questions, state.answers).correct).toBe(23);
		expect(state).toMatchObject({
			firstScore: { correct: 21, total: 25 },
			page: 1,
			retry: ['d01-02', 'd01-09', 'd01-14', 'd01-20'],
			graded: false
		});
	});

	it('counts another miss for a wrong answer and keeps the question listed', () => {
		const state = solve(1, 'instant', [9]);
		pickInReview(state, questionOf(1, 9), wrongChoice(questionOf(1, 9)));
		expect(review(progressOf({ 1: state }))).toEqual(['Day 1 · 9번 · 2번 틀림']);
	});

	it('ignores an option index past the last option', () => {
		const state = solve(1, 'instant', [16]);
		const part2 = questionOf(1, 16);
		expect(pickInReview(state, part2, part2.options.length)).toBe(false);
		expect(state.answers[part2.id]).toBe(wrongChoice(part2));
		expect(state.misses?.[part2.id]).toBe(1);
	});
});
