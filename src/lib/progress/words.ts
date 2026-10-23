import { z } from 'zod';
import { wordStatuses } from '#lib/content/word-schema.js';
import { recordKey, wordDays, wordsOf, type Word, type WordStatus } from '#lib/content/words.js';

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

/**
 * What the app recorded for a word, kept only for words touched: the status and date of the last
 * rating, the 완벽 ratings in a row, and the star when it was toggled (KTD5).
 */
export const wordEntrySchema = z.object({
	status: z.enum(wordStatuses).optional(),
	/** Local date (YYYY-MM-DD) of the last rating. */
	reviewed: isoDate.optional(),
	streak: z.number().int().min(0).optional(),
	star: z.boolean().optional()
});

/** A word saved from a question's vocabulary (KTD14). */
export const savedWordSchema = z.object({
	/** The spelling it was first saved with. */
	word: z.string().min(1),
	/** Meanings in the order they were saved. */
	meanings: z.array(z.string().min(1)).min(1),
	/** Ids of the questions it was saved from. */
	sources: z.array(z.string())
});

export type WordEntry = z.infer<typeof wordEntrySchema>;
export type WordEntries = Record<string, WordEntry>;
export type SavedWord = z.infer<typeof savedWordSchema>;
/** Saved words by their normalized English. */
export type SavedWords = Record<string, SavedWord>;

/** A word as the study rules see it: its record key, its status before any rating, its star. */
export interface StudyItem {
	key: string;
	initial: WordStatus;
	star?: boolean;
}

export const pdfItem = (word: Word): StudyItem => ({
	key: recordKey(word),
	initial: word.initial,
	star: word.star === true
});

/** The app's status wins over the PDF's (R3). */
export const statusOf = (entries: WordEntries, item: StudyItem): WordStatus =>
	entries[item.key]?.status ?? item.initial;

export const starOf = (entries: WordEntries, item: StudyItem): boolean =>
	entries[item.key]?.star ?? item.star ?? false;

/** Today as a local date; days are compared as dates, never as 24-hour spans (KTD6). */
export const localDate = (date: Date) =>
	[date.getFullYear(), date.getMonth() + 1, date.getDate()]
		.map((part) => String(part).padStart(2, '0'))
		.join('-');

export function addDays(date: string, days: number) {
	const [year, month, day] = date.split('-').map(Number);
	return new Date(Date.UTC(year, month - 1, day + days)).toISOString().slice(0, 10);
}

const knownIntervals = [7, 14, 30, 60, 120];

/** Days until a rated word comes back (KTD6); 안 봄 has no schedule. */
function intervalOf(status: WordStatus, streak: number) {
	if (status === 'new') return 1;
	if (status === 'unsure') return 3;
	if (status === 'known') return knownIntervals[Math.min(streak, knownIntervals.length) - 1];
	return null;
}

/** A card rating: 완벽 extends a run of 완벽 ratings, anything else ends it. */
export function rated(entry: WordEntry | undefined, status: WordStatus, today: string): WordEntry {
	const streak = status === 'known' ? (entry?.status === 'known' ? (entry.streak ?? 0) : 0) + 1 : 0;
	return { ...entry, status, reviewed: today, streak };
}

/** The status chip's order: 안 봄 → 처음 → 애매 → 완벽 → 처음. */
export const nextStatus = (status: WordStatus): WordStatus =>
	status === 'unseen' || status === 'known' ? 'new' : status === 'new' ? 'unsure' : 'known';

/** A status set from the list also counts as a rating (R11); a 완벽 run starts again from it. */
export const withStatus = (
	entry: WordEntry | undefined,
	status: WordStatus,
	today: string
): WordEntry => ({ ...entry, status, reviewed: today, streak: status === 'known' ? 1 : 0 });

/** The date a rated word is due again; null for a word never rated in the app. */
export function dueOn(entry: WordEntry | undefined) {
	if (!entry?.status || !entry.reviewed) return null;
	const days = intervalOf(entry.status, entry.streak ?? 0);
	return days === null ? null : addDays(entry.reviewed, days);
}

/** Items keeping the first of each record key, so a repeated word counts once. */
function uniqueByKey<T extends StudyItem>(items: T[]) {
	const seen = new Set<string>();
	return items.filter(({ key }) => !seen.has(key) && seen.add(key));
}

/** The words due by today (KTD7), earliest due first, then in the order given. */
export function dueItems<T extends StudyItem>(entries: WordEntries, items: T[], today: string) {
	return uniqueByKey(items)
		.map((item) => ({ item, due: dueOn(entries[item.key]) }))
		.filter((entry): entry is { item: T; due: string } => entry.due !== null && entry.due <= today)
		.sort((a, b) => a.due.localeCompare(b.due))
		.map(({ item }) => item);
}

/** A card deck: every word not 완벽, 안 봄 included (R9). */
export const deckOf = <T extends StudyItem>(entries: WordEntries, items: T[]) =>
	items.filter((item) => statusOf(entries, item) !== 'known');

/** A repeated word shares one record, so the wordbook counts it once (R2). */
export const uniqueWordCount = (items: StudyItem[]) => uniqueByKey(items).length;

export function countStatuses(entries: WordEntries, items: StudyItem[]) {
	const counts: Record<WordStatus, number> = { unseen: 0, new: 0, unsure: 0, known: 0 };
	for (const item of uniqueByKey(items)) counts[statusOf(entries, item)]++;
	return counts;
}

/**
 * The Day today's word card offers (KTD8): the Day opened last while its deck has words never
 * rated in the app, else the first such Day, else the Day with the most words not 완벽.
 */
export function todayWordDay(
	entries: WordEntries,
	lastDay: string | undefined,
	days: { key: string; items: StudyItem[] }[]
) {
	const hasUnrated = ({ items }: { items: StudyItem[] }) =>
		deckOf(entries, items).some(({ key }) => !entries[key]?.reviewed);
	const last = days.find(({ key }) => key === lastDay);
	if (last && hasUnrated(last)) return last.key;
	const next = days.find(hasUnrated);
	if (next) return next.key;
	const left = (day: { items: StudyItem[] }) => deckOf(entries, day.items).length;
	return days.reduce((best, day) => (left(day) > left(best) ? day : best)).key;
}

/** The PDF Days in order, each with its rows as study items. */
export const pdfDays = wordDays.map((info) => ({ ...info, items: wordsOf(info.key).map(pdfItem) }));

/** Every PDF row as a study item, a repeated word in both of its Days. */
export const pdfItems = pdfDays.flatMap(({ items }) => items);

/** A saved word goes by its English in lowercase with single spaces: 'Take Leave' is 'take leave'. */
export const normalizeEnglish = (english: string) =>
	english.trim().replace(/\s+/g, ' ').toLowerCase();

/** The PDF rows of each normalized English with their Week and Day; a repeated word has two. */
const pdfRows = new Map<string, { word: Word; week: number; day: number }[]>();
for (const { key, week, day } of wordDays) {
	for (const word of wordsOf(key)) {
		const english = normalizeEnglish(word.word);
		pdfRows.set(english, [...(pdfRows.get(english) ?? []), { word, week, day }]);
	}
}

/** The Weeks and Days of the PDF that have a saved word too. */
export const pdfDaysOf = (english: string) =>
	(pdfRows.get(english) ?? []).map(({ week, day }) => ({ week, day }));

/**
 * A saved word studies under the record of the PDF word with the same English, so the two never
 * come up twice (KTD14); a word the PDF lacks has its own, starting 안 봄.
 */
export function savedItem(english: string): StudyItem {
	const pdf = pdfRows.get(english)?.[0];
	return pdf ? pdfItem(pdf.word) : { key: `saved:${english}`, initial: 'unseen' };
}

/** Adds a meaning and its question to a saved word, keeping the spelling saved first. */
export function withMeaning(
	saved: SavedWord | undefined,
	word: string,
	meaning: string,
	source: string
): SavedWord {
	if (!saved) return { word, meanings: [meaning], sources: [source] };
	const add = (list: string[], item: string) => (list.includes(item) ? list : [...list, item]);
	return { ...saved, meanings: add(saved.meanings, meaning), sources: add(saved.sources, source) };
}

/** Takes a meaning and its question back off a saved word; null once no meaning is left. */
export function withoutMeaning(saved: SavedWord, meaning: string, source: string) {
	const meanings = saved.meanings.filter((item) => item !== meaning);
	if (!meanings.length) return null;
	return { ...saved, meanings, sources: saved.sources.filter((item) => item !== source) };
}

/**
 * A vocabulary chip (R15): 'off' until its meaning is saved; 'on' while the word was never rated,
 * so pressing it again takes the meaning back; 'kept' once rated anywhere its record is shared,
 * when only the saved list removes it.
 */
export function vocabChip(
	saved: SavedWords,
	entries: WordEntries,
	english: string,
	meaning: string
): 'off' | 'on' | 'kept' {
	const key = normalizeEnglish(english);
	if (!saved[key]?.meanings.includes(meaning)) return 'off';
	return entries[savedItem(key).key]?.reviewed ? 'kept' : 'on';
}
