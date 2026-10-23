import type { QuestionItem } from '#lib/content/index.js';
import { addMiss, modeOf, questionState } from './attempt';
import type { DayProgress, Progress, QuestionsOfDay } from './model';

/** A question to review, with its number in its day (from 1) and how often it was revealed wrong. */
export interface ReviewItem {
	day: number;
	number: number;
	question: QuestionItem;
	misses: number;
}

/**
 * Questions missed at least once and not answered right since, by day, then question order (KTD5).
 * An exam day waiting for a grading, first or after a retry, stays out whole: its retried questions
 * were missed before, so listing them would tell which new answers are right. The list length is the
 * review count.
 */
export function reviewList(progress: Progress, questionsOfDay: QuestionsOfDay): ReviewItem[] {
	const { days, settings } = progress;
	return Object.keys(days)
		.map(Number)
		.sort((a, b) => a - b)
		.flatMap((day) => {
			const state = days[day];
			const questions = questionsOfDay(day) ?? [];
			if (modeOf(state, settings) === 'exam' && !state.graded) return [];
			return questions.flatMap((question, index) => {
				const misses = state.misses?.[question.id] ?? 0;
				const missed = misses > 0 && questionState(state, settings, question) !== 'correct';
				return missed ? [{ day, number: index + 1, question, misses }] : [];
			});
		});
}

/**
 * Writes a review answer into the day's own answer, even over a revealed one (KTD6), counting a miss
 * when it is wrong. The page, retry and grading of the day stay as they are. Returns false for an
 * index past the last option.
 */
export function pickInReview(state: DayProgress, question: QuestionItem, index: number): boolean {
	if (index >= question.options.length) return false;
	state.answers[question.id] = index;
	if (index !== question.answer) addMiss(state, question.id);
	return true;
}
