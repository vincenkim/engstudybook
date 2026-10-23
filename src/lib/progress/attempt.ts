import {
	dayNumbers,
	questionsOnPage,
	type DayContent,
	type Page,
	type QuestionItem
} from '#lib/content/index.js';
import type { DayProgress, Mode, Progress, Score, Settings } from './model';

type StudyPage = Page | { type: 'cover' } | { type: 'result' };

export const modeOf = (state: DayProgress, settings: Settings): Mode => state.mode ?? settings.mode;

export function isRevealed(state: DayProgress, settings: Settings, question: QuestionItem) {
	return state.graded || (modeOf(state, settings) === 'instant' && question.id in state.answers);
}

export type QuestionState = 'correct' | 'wrong' | 'answered' | 'unanswered';

/** The one source of a question's state (KTD7): an answer not revealed yet is only 'answered'. */
export function questionState(
	state: DayProgress,
	settings: Settings,
	question: QuestionItem
): QuestionState {
	if (!(question.id in state.answers)) return 'unanswered';
	if (!isRevealed(state, settings, question)) return 'answered';
	return state.answers[question.id] === question.answer ? 'correct' : 'wrong';
}

export function scoreOf(questions: QuestionItem[], answers: Record<string, number>) {
	return {
		total: questions.length,
		answered: questions.filter((q) => q.id in answers).length,
		correct: questions.filter((q) => answers[q.id] === q.answer).length
	};
}

const toScore = ({ correct, total }: Score): Score => ({ correct, total });

export const missedOf = (state: DayProgress, questions: QuestionItem[]) =>
	questions.filter((q) => state.answers[q.id] !== q.answer);

export function addMiss(state: DayProgress, questionId: string) {
	state.misses ??= {};
	state.misses[questionId] = (state.misses[questionId] ?? 0) + 1;
}

export function pagesOf(content: DayContent, state: DayProgress): StudyPage[] {
	const { retry } = state;
	const body: StudyPage[] = retry
		? content.pages.filter((page) => questionsOnPage(page).some((q) => retry.includes(q.id)))
		: [{ type: 'cover' }, ...content.pages];
	return [...body, { type: 'result' }];
}

/**
 * Index in `pagesOf` of the page holding the question; -1 when none does or a retry leaves the
 * question out, though its set page may be kept for another question (KTD13).
 */
export const pageOfQuestion = (content: DayContent, state: DayProgress, questionId: string) =>
	state.retry && !state.retry.includes(questionId)
		? -1
		: pagesOf(content, state).findIndex(
				(page) =>
					page.type !== 'cover' &&
					page.type !== 'result' &&
					questionsOnPage(page).some((q) => q.id === questionId)
			);

/** Questions answered right and never missed, so a review answer cannot lift a first score (KTD6). */
const rightFirstTime = (state: DayProgress, questions: QuestionItem[]) =>
	questions.filter((q) => state.answers[q.id] === q.answer && !state.misses?.[q.id]).length;

/** Records the answer; returns false when the question is already revealed or the index is invalid. */
export function pick(
	state: DayProgress,
	settings: Settings,
	questions: QuestionItem[],
	question: QuestionItem,
	index: number
): boolean {
	if (index >= question.options.length || isRevealed(state, settings, question)) return false;
	state.mode ??= settings.mode;
	state.answers[question.id] = index;
	if (state.mode === 'instant' && index !== question.answer) addMiss(state, question.id);
	const score = scoreOf(questions, state.answers);
	if (state.mode === 'instant' && !state.retry && score.answered === score.total) {
		state.firstScore ??= { correct: rightFirstTime(state, questions), total: score.total };
	}
	return true;
}

export function grade(state: DayProgress, questions: QuestionItem[]) {
	state.mode ??= 'exam';
	state.graded = true;
	state.firstScore ??= toScore(scoreOf(questions, state.answers));
	for (const question of missedOf(state, questions)) addMiss(state, question.id);
}

/** A day with an answer, a first score, a retry or a grading. */
export const isStarted = (state: DayProgress | undefined) =>
	Boolean(
		state && (Object.keys(state.answers).length || state.firstScore || state.retry || state.graded)
	);

/** Sets the grading mode of a day not started yet. */
export function presetMode(state: DayProgress, mode: Mode) {
	if (!isStarted(state)) state.mode = mode;
}

export function startRetry(state: DayProgress, questions: QuestionItem[]) {
	const missed = missedOf(state, questions);
	state.firstScore ??= toScore(scoreOf(questions, state.answers));
	for (const question of missed) delete state.answers[question.id];
	Object.assign(state, { retry: missed.map((q) => q.id), graded: false, page: 0 });
}

/**
 * The day to continue (KTD15): the day studied last, else the first day started but not finished
 * (no first score yet), else the first day not started; null when every day is finished. A day
 * studied last that the workbook lacks, as in an edited file, is passed over.
 */
export function resumeDay({ lastDay, days }: Progress): number | null {
	if (lastDay && dayNumbers.includes(lastDay)) return lastDay;
	const inProgress = dayNumbers.find((day) => isStarted(days[day]) && !days[day].firstScore);
	return inProgress ?? dayNumbers.find((day) => !isStarted(days[day])) ?? null;
}

export const nextDay = (day: number): number | null =>
	dayNumbers.includes(day + 1) ? day + 1 : null;

export function statusText(
	state: DayProgress | undefined,
	settings: Settings,
	questions: QuestionItem[]
): string {
	const { total, answered, correct } = scoreOf(questions, state?.answers ?? {});
	if (!state || (!answered && !state.firstScore)) return '시작 전';
	const { firstScore } = state;
	const first = firstScore && `첫 점수 ${firstScore.correct} / ${firstScore.total}`;
	// Checked before the score: an exam waiting for a grading, a retry included, hides it (R10).
	if (modeOf(state, settings) === 'exam' && !state.graded) {
		return first ? `${first} · 채점 전` : `답안 ${answered} / ${total} · 채점 전`;
	}
	if (!firstScore) return `진행 중 · ${answered} / ${total}`;
	if (state.retry && answered < total) return `${first} · 다시 푸는 중`;
	return correct === firstScore.correct ? `완료 · ${first}` : `완료 · ${first} → ${correct}`;
}
