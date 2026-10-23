import { z } from 'zod';

const text = z.string().min(1);
const wordId = z.string().regex(/^w[1-4]d[1-5]-\d{2}$/);

/** 명사, 형용사, 부사, 자동사, 타동사, 동사, 전치사 as the PDF marks them. */
export const partsOfSpeech = ['명', '형', '부', '자', '타', '동', '전'] as const;

/** 안 봄, 처음, 애매, 완벽. */
export const wordStatuses = ['unseen', 'new', 'unsure', 'known'] as const;

const sense = z.strictObject({ text, key: z.literal(true).optional() });

const posGroup = z.strictObject({
	pos: z.enum(partsOfSpeech),
	senses: z.array(sense).min(1)
});

const wordSchema = z.strictObject({
	id: wordId,
	no: z.number().int().min(1),
	word: text,
	ipa: text,
	groups: z.array(posGroup).min(1),
	initial: z.enum(wordStatuses),
	star: z.literal(true).optional(),
	/** The id of the earlier row when a Day repeats the last words of the Day before. */
	same: wordId.optional()
});

export const wordDaySchema = z.array(wordSchema).min(1);

export type PartOfSpeech = (typeof partsOfSpeech)[number];
export type WordStatus = (typeof wordStatuses)[number];
export type Sense = z.infer<typeof sense>;
export type PosGroup = z.infer<typeof posGroup>;
export type Word = z.infer<typeof wordSchema>;
export type WordDay = z.infer<typeof wordDaySchema>;
