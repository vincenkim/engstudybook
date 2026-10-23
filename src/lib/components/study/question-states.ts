import type { QuestionState } from '#lib/progress/attempt.js';

/** Words for each question state (KTD7); an answer not revealed yet is only 'answered'. */
export const questionStateNames: Record<QuestionState, string> = {
	correct: '맞힘',
	wrong: '틀림',
	answered: '답함',
	unanswered: '안 풂'
};

/** Dot colors for each state; an answer not revealed yet stays neutral, so an exam waiting for a grading shows nothing (R10). */
export const questionDotStyles: Record<QuestionState, string> = {
	correct: 'bg-ok',
	wrong: 'bg-bad',
	answered: 'bg-muted-foreground',
	unanswered: 'bg-border'
};
