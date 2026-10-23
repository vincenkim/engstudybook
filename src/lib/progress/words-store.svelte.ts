import { on } from 'svelte/events';
import { createSubscriber } from 'svelte/reactivity';
import { z } from 'zod';
import type { WordStatus } from '#lib/content/words.js';
import {
	localDate,
	nextStatus,
	rated,
	savedWordSchema,
	starOf,
	statusOf,
	wordEntrySchema,
	withStatus,
	type StudyItem
} from './words';

/**
 * Word progress lives under its own key (KTD4): a tab still running older code rewrites
 * `toeicBasic.v2` without the fields it does not know, which would wipe word progress kept there.
 */
const wordsKey = 'toeicBasic.words';

const directions = ['en-ko', 'ko-en'] as const;
export type CardDirection = (typeof directions)[number];

/** Keeps the entries that parse, so one malformed entry never drops the rest. */
const validEntries = <T extends z.ZodType>(schema: T) =>
	z.record(z.string(), z.unknown()).transform((record) =>
		Object.fromEntries(
			Object.entries(record).flatMap(([key, value]) => {
				const parsed = schema.safeParse(value);
				return parsed.success ? [[key, parsed.data as z.infer<T>]] : [];
			})
		)
	);

const wordsRecordSchema = z.object({
	version: z.literal(1),
	entries: validEntries(wordEntrySchema),
	/** Saved question vocabulary, keyed by its normalized English. */
	saved: validEntries(savedWordSchema),
	/** The word Day opened last (KTD8). */
	lastDay: z.string().optional().catch(undefined),
	direction: z.enum(directions).optional().catch(undefined)
});

export type WordsRecord = z.infer<typeof wordsRecordSchema>;

export const defaultWordsRecord = (): WordsRecord => ({ version: 1, entries: {}, saved: {} });

export function parseWordsRecord(raw: unknown): WordsRecord | null {
	const parsed = wordsRecordSchema.safeParse(raw);
	return parsed.success ? parsed.data : null;
}

function readWords(): WordsRecord {
	try {
		const raw = localStorage.getItem(wordsKey);
		if (raw) return parseWordsRecord(JSON.parse(raw)) ?? defaultWordsRecord();
	} catch {
		// Storage blocked or corrupt: start with an empty record.
	}
	return defaultWordsRecord();
}

export const wordsRecord = $state(readWords());

function save() {
	try {
		localStorage.setItem(wordsKey, JSON.stringify(wordsRecord));
	} catch {
		// Storage blocked (private mode): word progress lives for this session only.
	}
}

function apply(next: WordsRecord) {
	wordsRecord.entries = next.entries;
	wordsRecord.saved = next.saved;
	wordsRecord.lastDay = next.lastDay;
	wordsRecord.direction = next.direction;
}

// Another tab saved word progress: take it, so this tab's next save does not undo it.
globalThis.addEventListener?.('storage', (event) => {
	if (event.key === wordsKey) apply(readWords());
});

const today = () => localDate(new Date());

const watchShown = createSubscriber((update) => {
	const offFocus = on(window, 'focus', update);
	const offVisible = on(document, 'visibilitychange', update);
	return () => {
		offFocus();
		offVisible();
	};
});

/** Today for due words, read again when the app shows again or takes focus (KTD6). */
export function currentDate() {
	watchShown();
	return today();
}

/** A rating from a card. */
export function rateWord(item: StudyItem, status: WordStatus) {
	wordsRecord.entries[item.key] = rated(wordsRecord.entries[item.key], status, today());
	save();
}

/** The status chip of a list moves the word to its next status (R7, R11). */
export function setStatusFromList(item: StudyItem) {
	const next = nextStatus(statusOf(wordsRecord.entries, item));
	wordsRecord.entries[item.key] = withStatus(wordsRecord.entries[item.key], next, today());
	save();
}

export function toggleStar(item: StudyItem) {
	const star = !starOf(wordsRecord.entries, item);
	wordsRecord.entries[item.key] = { ...wordsRecord.entries[item.key], star };
	save();
}

export function setLastWordDay(day: string) {
	wordsRecord.lastDay = day;
	save();
}

export function setCardDirection(direction: CardDirection) {
	wordsRecord.direction = direction;
	save();
}

export function replaceWords(next: WordsRecord) {
	apply(next);
	save();
}
