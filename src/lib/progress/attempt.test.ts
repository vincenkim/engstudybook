import { describe, expect, it } from 'vitest';
import {
	dayContent,
	dayNumbers,
	sectionsOf,
	type DayContent,
	type QuestionItem
} from '#lib/content/index.js';
import {
	grade,
	isRevealed,
	nextDay,
	pageOfQuestion,
	pagesOf,
	pick,
	presetMode,
	questionState,
	resumeDay,
	startRetry,
	statusText
} from './attempt';
import { defaultProgress, newDayProgress, type DayProgress, type Settings } from './model';
import { pickInReview } from './review';

const question = (id: string, answer: number): QuestionItem => ({
	id,
	part: 5,
	text: '-------',
	options: ['a', 'b', 'c', 'd'],
	answer,
	why: 'why'
});

const questions = [question('d01-01', 0), question('d01-02', 1), question('d01-03', 2)];
const instant: Settings = { mode: 'instant', rate: 1 };
const exam: Settings = { mode: 'exam', rate: 1 };

function answerAll(state = newDayProgress(), settings = instant, picks = [0, 0, 2]) {
	questions.forEach((q, index) => pick(state, settings, questions, q, picks[index]));
	return state;
}

describe('pick', () => {
	it('reveals instantly and refuses to change a revealed answer', () => {
		const state = newDayProgress();
		expect(pick(state, instant, questions, questions[0], 1)).toBe(true);
		expect(isRevealed(state, instant, questions[0])).toBe(true);
		expect(pick(state, instant, questions, questions[0], 0)).toBe(false);
		expect(state.answers['d01-01']).toBe(1);
	});

	it('ignores an option index past the last option', () => {
		expect(pick(newDayProgress(), instant, questions, questions[0], 4)).toBe(false);
	});

	// Regression: switching the setting to exam used to re-hide answers already checked.
	it('locks the grading mode at the first answer', () => {
		const state = newDayProgress();
		pick(state, instant, questions, questions[0], 1);
		expect(state.mode).toBe('instant');
		expect(isRevealed(state, exam, questions[0])).toBe(true);
		expect(pick(state, exam, questions, questions[0], 0)).toBe(false);
	});

	it('keeps answers editable in exam mode until graded', () => {
		const state = newDayProgress();
		pick(state, exam, questions, questions[0], 1);
		expect(pick(state, exam, questions, questions[0], 0)).toBe(true);
		grade(state, questions);
		expect(isRevealed(state, exam, questions[0])).toBe(true);
	});
});

describe('questionState', () => {
	const states = (state: DayProgress, settings: Settings) =>
		questions.map((q) => questionState(state, settings, q));

	it('shows an instant answer as right or wrong at once', () => {
		const state = newDayProgress();
		pick(state, instant, questions, questions[0], 1);
		pick(state, instant, questions, questions[1], 1);
		expect(states(state, instant)).toEqual(['wrong', 'correct', 'unanswered']);
	});

	it('shows exam answers only as answered until they are graded', () => {
		const state = newDayProgress();
		pick(state, exam, questions, questions[0], 1);
		pick(state, exam, questions, questions[1], 1);
		expect(states(state, exam)).toEqual(['answered', 'answered', 'unanswered']);
		grade(state, questions);
		expect(states(state, exam)).toEqual(['wrong', 'correct', 'unanswered']);
	});

	it('hides whether an earlier answer was right while an exam is retried', () => {
		const state = answerAll(newDayProgress(), exam);
		grade(state, questions);
		startRetry(state, questions);
		expect(states(state, exam)).toEqual(['answered', 'unanswered', 'answered']);
	});
});

describe('misses', () => {
	it('grow when an instant answer is wrong, not when it is right', () => {
		const state = newDayProgress();
		pick(state, instant, questions, questions[0], 1);
		pick(state, instant, questions, questions[1], 1);
		expect(state.misses).toEqual({ 'd01-01': 1 });
	});

	it('grow for wrong and blank answers at grading, not for answers changed before it', () => {
		const state = newDayProgress();
		pick(state, exam, questions, questions[0], 1);
		pick(state, exam, questions, questions[0], 2);
		pick(state, exam, questions, questions[1], 1);
		expect(state.misses ?? {}).toEqual({});
		grade(state, questions);
		expect(state.misses).toEqual({ 'd01-01': 1, 'd01-03': 1 });
	});
});

describe('presetMode', () => {
	it('sets the mode of a day not started yet, kept after the first answer', () => {
		const state = newDayProgress();
		presetMode(state, 'exam');
		pick(state, instant, questions, questions[0], 0);
		expect(state.mode).toBe('exam');
	});

	it('keeps the mode of a day already answered', () => {
		const state = newDayProgress();
		pick(state, instant, questions, questions[0], 0);
		presetMode(state, 'exam');
		expect(state.mode).toBe('instant');
	});

	it('keeps the mode of an exam day graded without answers', () => {
		const state = newDayProgress();
		grade(state, questions);
		presetMode(state, 'instant');
		expect(state.mode).toBe('exam');
	});
});

describe('first score', () => {
	it('is recorded when an instant attempt answers everything', () => {
		expect(answerAll().firstScore).toEqual({ correct: 2, total: 3 });
	});

	it('is recorded when an exam attempt is graded, counting blanks as wrong', () => {
		const state = newDayProgress();
		pick(state, exam, questions, questions[0], 0);
		expect(state.firstScore).toBeNull();
		grade(state, questions);
		expect(state.firstScore).toEqual({ correct: 1, total: 3 });
	});

	// Regression: retrying missed questions used to overwrite the first score.
	it('survives retrying the missed questions', () => {
		const state = answerAll();
		startRetry(state, questions);
		expect(state.retry).toEqual(['d01-02']);
		expect(state.answers).not.toHaveProperty('d01-02');
		pick(state, instant, questions, questions[1], 1);
		expect(state.firstScore).toEqual({ correct: 2, total: 3 });
	});

	it('leaves out a question fixed in review before the first attempt ends', () => {
		const state = newDayProgress();
		pick(state, instant, questions, questions[0], 1);
		pickInReview(state, questions[0], 0);
		pick(state, instant, questions, questions[1], 1);
		pick(state, instant, questions, questions[2], 2);
		expect(state.firstScore).toEqual({ correct: 2, total: 3 });
	});
});

describe('pageOfQuestion', () => {
	const day1 = dayContent(1);

	it('finds the first practice page for the first question of day 1', () => {
		expect(pageOfQuestion(day1, newDayProgress(), 'd01-01')).toBe(sectionsOf(1)[0].start.practice);
	});

	it('places only the questions being retried during a retry', () => {
		const state = { ...newDayProgress(), retry: ['d01-05', 'd01-20'] };
		expect(['d01-05', 'd01-20', 'd01-01'].map((id) => pageOfQuestion(day1, state, id))).toEqual([
			0, 1, -1
		]);
	});

	it('leaves out the questions not retried on a set page being retried', () => {
		const state = { ...newDayProgress(), retry: ['d17-14'] };
		expect(['d17-14', 'd17-13'].map((id) => pageOfQuestion(dayContent(17), state, id))).toEqual([
			0, -1
		]);
	});
});

describe('resumeDay', () => {
	const started = (): DayProgress => ({ ...newDayProgress(), mode: 'instant', answers: { x: 0 } });
	const finished = (): DayProgress => ({ ...started(), firstScore: { correct: 20, total: 25 } });
	const withDays = (days: Record<number, DayProgress>, lastDay?: number) => ({
		...defaultProgress(),
		lastDay,
		days
	});

	it('is the day studied last', () => {
		expect(resumeDay(withDays({ 2: started() }, 7))).toBe(7);
	});

	it('passes over a day studied last that the workbook does not have', () => {
		expect(resumeDay(withDays({ 2: started() }, 999))).toBe(2);
	});

	it('falls back to the first day in progress, then to the first day not started', () => {
		expect(resumeDay(withDays({ 2: finished(), 5: started(), 9: started() }))).toBe(5);
		expect(resumeDay(withDays({ 1: finished(), 2: finished() }))).toBe(3);
		expect(resumeDay(withDays({}))).toBe(1);
	});

	it('is none when every day is finished', () => {
		const days = Object.fromEntries(dayNumbers.map((day) => [day, finished()]));
		expect(resumeDay(withDays(days))).toBeNull();
	});
});

describe('nextDay', () => {
	it('is the following day, none after the last', () => {
		expect(nextDay(1)).toBe(2);
		expect(nextDay(dayNumbers.length)).toBeNull();
	});
});

describe('pagesOf', () => {
	const content: DayContent = {
		goals: ['goal'],
		pages: [
			{ type: 'lesson', section: 'RC', title: 'lesson', blocks: [{ type: 'p', text: 'p' }] },
			...questions.map((q) => ({
				...q,
				type: 'question' as const,
				part: 5 as const,
				text: '-------',
				ko: 'ko',
				notes: ['a', 'b', 'c', 'd'],
				vocab: [['w', 'm']] as [string, string][]
			}))
		]
	};
	const types = (state = newDayProgress()) =>
		pagesOf(content, state).map((page) => ('id' in page ? page.id : page.type));

	it('wraps the day in a cover and a result page', () => {
		expect(types()).toEqual(['cover', 'lesson', 'd01-01', 'd01-02', 'd01-03', 'result']);
	});

	it('shows only the pages of missed questions while retrying', () => {
		const state = answerAll();
		startRetry(state, questions);
		expect(types(state)).toEqual(['d01-02', 'result']);
	});
});

describe('statusText', () => {
	it('reports each stage of a day', () => {
		expect(statusText(undefined, instant, questions)).toBe('시작 전');
		const state = newDayProgress();
		pick(state, instant, questions, questions[0], 0);
		expect(statusText(state, instant, questions)).toBe('진행 중 · 1 / 3');
		answerAll(state);
		expect(statusText(state, instant, questions)).toBe('완료 · 첫 점수 2 / 3');
	});

	// Regression: a finished day showed "진행 중" again while missed questions were retried.
	it('stays finished while retrying and shows the improvement', () => {
		const state = answerAll();
		startRetry(state, questions);
		expect(statusText(state, instant, questions)).toBe('첫 점수 2 / 3 · 다시 푸는 중');
		pick(state, instant, questions, questions[1], 1);
		expect(statusText(state, instant, questions)).toBe('완료 · 첫 점수 2 / 3 → 3');
	});

	it('waits for grading in exam mode', () => {
		const state = newDayProgress();
		pick(state, exam, questions, questions[0], 0);
		expect(statusText(state, exam, questions)).toBe('답안 1 / 3 · 채점 전');
	});

	// Regression: a retried exam day showed its current score before it was graded again (R10).
	it('waits for grading an exam retry without showing the current score', () => {
		const state = answerAll(newDayProgress(), exam);
		grade(state, questions);
		startRetry(state, questions);
		pick(state, exam, questions, questions[1], 1);
		expect(statusText(state, exam, questions)).toBe('첫 점수 2 / 3 · 채점 전');
	});
});
