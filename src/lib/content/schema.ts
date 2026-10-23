import { z } from 'zod';

const text = z.string().min(1);
const texts = z.array(text).min(1);
const answerIndex = z.number().int().min(0).max(3);
const questionId = z.string().regex(/^d\d{2}-\d{2}$/);
const vocab = z.array(z.tuple([text, text])).min(1);
const fourOptions = z.array(text).length(4);
const threeOptions = z.array(text).length(3);

export const speakers = ['M', 'W', 'M1', 'M2', 'W1', 'W2'] as const;

const table = z.strictObject({
	title: text.optional(),
	head: texts,
	rows: z.array(z.array(z.string())).min(1)
});

const blockSchema = z.discriminatedUnion('type', [
	z.strictObject({ type: z.literal('p'), text }),
	z.strictObject({ type: z.literal('tip'), text }),
	z.strictObject({ type: z.literal('box'), title: text, items: texts }),
	z.strictObject({
		type: z.literal('examples'),
		items: z.array(z.strictObject({ en: text, ko: text, note: text })).min(1)
	}),
	table.extend({ type: z.literal('table') })
]);

const lessonPage = z.strictObject({
	type: z.literal('lesson'),
	section: z.enum(['RC', 'LC']),
	tag: text.optional(),
	title: text,
	blocks: z.array(blockSchema).min(1)
});

const guidedPage = z.discriminatedUnion('part', [
	z.strictObject({
		type: z.literal('guided'),
		part: z.literal(5),
		text,
		options: fourOptions,
		answer: answerIndex,
		ko: text,
		steps: texts
	}),
	z.strictObject({
		type: z.literal('guided'),
		part: z.literal(2),
		script: text,
		options: threeOptions,
		optionsKo: threeOptions,
		answer: answerIndex.max(2),
		ko: text,
		steps: texts
	})
]);

const questionPage = z.discriminatedUnion('part', [
	z.strictObject({
		type: z.literal('question'),
		part: z.literal(5),
		id: questionId,
		text,
		options: fourOptions,
		answer: answerIndex,
		ko: text,
		why: text,
		notes: fourOptions,
		vocab
	}),
	z.strictObject({
		type: z.literal('question'),
		part: z.literal(2),
		id: questionId,
		script: text,
		options: threeOptions,
		optionsKo: threeOptions,
		answer: answerIndex.max(2),
		ko: text,
		why: text,
		notes: threeOptions,
		vocab
	})
]);

const translatedQuestion = z.strictObject({
	id: questionId,
	text,
	ko: text,
	options: fourOptions,
	optionsKo: fourOptions,
	answer: answerIndex,
	why: text
});

const blankQuestion = z.strictObject({
	id: questionId,
	options: fourOptions,
	answer: answerIndex,
	why: text,
	notes: fourOptions.optional(),
	optionsKo: fourOptions.optional()
});

const passageBlock = z.union([
	text,
	z.strictObject({ table }),
	z.strictObject({ chat: z.array(z.tuple([text, text, text])).min(1) })
]);

const passage = z.strictObject({
	kind: text,
	title: text.optional(),
	head: z.array(z.tuple([text, text])).optional(),
	body: z.array(passageBlock).min(1),
	ko: texts
});

const setBase = { type: z.literal('set'), label: text, vocab };

const setPage = z.discriminatedUnion('part', [
	z.strictObject({
		...setBase,
		part: z.union([z.literal(3), z.literal(4)]),
		script: z.array(z.tuple([z.enum(speakers), text])).min(1),
		scriptKo: texts,
		graphic: table.optional(),
		questions: z.array(translatedQuestion).min(1)
	}),
	z.strictObject({
		...setBase,
		part: z.literal(6),
		passages: z.array(passage).min(1),
		questions: z.array(blankQuestion).min(1)
	}),
	z.strictObject({
		...setBase,
		part: z.literal(7),
		passages: z.array(passage).min(1),
		questions: z.array(translatedQuestion).min(1)
	})
]);

const pageSchema = z.discriminatedUnion('type', [lessonPage, guidedPage, questionPage, setPage]);

export const dayContentSchema = z.strictObject({
	goals: texts,
	pages: z.array(pageSchema).min(1)
});

const partCount = z.number().int().min(1);

export const curriculumSchema = z
	.array(
		z.strictObject({
			phase: text,
			mix: text,
			parts: z.partialRecord(z.enum(['2', '3', '4', '5', '6', '7']), partCount),
			days: z.array(z.strictObject({ day: z.number().int().min(1), topics: texts })).min(1)
		})
	)
	.min(1);

export type Block = z.infer<typeof blockSchema>;
export type Table = z.infer<typeof table>;
export type Passage = z.infer<typeof passage>;
export type Page = z.infer<typeof pageSchema>;
export type LessonPage = z.infer<typeof lessonPage>;
export type GuidedPage = z.infer<typeof guidedPage>;
export type QuestionPage = z.infer<typeof questionPage>;
export type SetPage = z.infer<typeof setPage>;
export type DayContent = z.infer<typeof dayContentSchema>;
export type Curriculum = z.infer<typeof curriculumSchema>;
export type Speaker = (typeof speakers)[number];
export type Part = 2 | 3 | 4 | 5 | 6 | 7;
