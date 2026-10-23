import { z } from 'zod';
import type { QuestionItem } from '#lib/content/index.js';
import { isRevealed, scoreOf } from './attempt';

const modes = ['instant', 'exam'] as const;
const rates = [0.8, 1] as const;

const settingsSchema = z.object({
	mode: z.enum(modes),
	rate: z.literal(rates)
});

const scoreSchema = z.object({
	correct: z.number().int().min(0),
	total: z.number().int().min(0)
});

/**
 * A field added after v2 shipped. It is optional, and a malformed value reads as missing: a record
 * failing the v2 schema would fall back to the v1 path and lose its first scores.
 */
const addedField = <T extends z.ZodType>(schema: T) => schema.optional().catch(undefined);

const dayV1Schema = z.object({
	answers: z.record(z.string(), z.number().int().min(0).max(3)),
	graded: z.boolean(),
	page: z.number().int().min(0),
	retry: z.array(z.string()).nullable()
});

const dayV2Schema = dayV1Schema.extend({
	/** Fixed when the first answer is picked, so changing the setting never re-hides answers. */
	mode: z.enum(modes).nullable(),
	/** Score of the first full attempt, kept when missed questions are retried. */
	firstScore: scoreSchema.nullable(),
	/** Times each question was revealed wrong; counted on load for days saved without it. */
	misses: addedField(z.record(z.string(), z.number().int().min(0))),
	/** Ids of the flagged questions. */
	flags: addedField(z.array(z.string()))
});

const dayKey = z.string().regex(/^\d+$/);

const progressV1Schema = z.object({
	settings: settingsSchema.partial().optional(),
	days: z.record(dayKey, dayV1Schema)
});

const progressV2Schema = z.object({
	version: z.literal(2),
	settings: settingsSchema,
	/** The day studied last, to continue from. */
	lastDay: addedField(z.number().int().min(1)),
	days: z.record(dayKey, dayV2Schema)
});

export type Mode = (typeof modes)[number];
export type Rate = (typeof rates)[number];
export type Settings = z.infer<typeof settingsSchema>;
export type Score = z.infer<typeof scoreSchema>;
export type DayProgress = z.infer<typeof dayV2Schema>;
export type Progress = z.infer<typeof progressV2Schema>;

/** The questions of a day, used to migrate saved records; returns null when the day is unknown. */
export type QuestionsOfDay = (day: number) => QuestionItem[] | null;

const defaultSettings = (): Settings => ({ mode: 'instant', rate: 1 });

export const defaultProgress = (): Progress => ({
	version: 2,
	settings: defaultSettings(),
	days: {}
});

export const newDayProgress = (): DayProgress => ({
	page: 0,
	answers: {},
	graded: false,
	retry: null,
	mode: null,
	firstScore: null
});

function migrateV1(
	data: z.infer<typeof progressV1Schema>,
	questionsOfDay: QuestionsOfDay
): Progress {
	const settings = { ...defaultSettings(), ...data.settings };
	const days: Progress['days'] = {};
	for (const [key, day] of Object.entries(data.days)) {
		const questions = questionsOfDay(Number(key));
		if (!questions) continue;
		const { correct, total } = scoreOf(questions, day.answers);
		const answered = Object.keys(day.answers).length;
		const finished = day.retry === null && (day.graded || answered >= total);
		days[key] = {
			...day,
			mode: day.graded ? 'exam' : answered ? settings.mode : null,
			firstScore: finished ? { correct, total } : null
		};
	}
	return { version: 2, settings, days };
}

/**
 * Fills in misses for days saved before they were counted (KTD5): one for a revealed wrong answer,
 * for a question in a retry, and, on a day with a first score, for any answer not correct now
 * (graded blanks and blanks left by showing all pages included).
 */
function countPastMisses(progress: Progress, questionsOfDay: QuestionsOfDay): Progress {
	for (const [key, day] of Object.entries(progress.days)) {
		const questions = questionsOfDay(Number(key));
		if (!questions || day.misses) continue;
		const missed = questions.filter(
			(q) =>
				day.retry?.includes(q.id) ||
				(day.answers[q.id] !== q.answer &&
					(day.firstScore || (q.id in day.answers && isRevealed(day, progress.settings, q))))
		);
		day.misses = Object.fromEntries(missed.map((q) => [q.id, 1]));
	}
	return progress;
}

/** Parses saved or imported progress (v2, or v1 from the original single-file app). */
export function parseProgress(raw: unknown, questionsOfDay: QuestionsOfDay): Progress | null {
	const v2 = progressV2Schema.safeParse(raw);
	if (v2.success) return countPastMisses(v2.data, questionsOfDay);
	const v1 = progressV1Schema.safeParse(raw);
	return v1.success ? countPastMisses(migrateV1(v1.data, questionsOfDay), questionsOfDay) : null;
}
