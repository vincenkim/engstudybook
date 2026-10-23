import type { Word, WordDay } from './word-schema';

export type * from './word-schema';

/** A Day of the PDF wordbook, keyed like its file: `w1d1` is Week 1, Day 1. */
export interface WordDayInfo {
	key: string;
	week: number;
	day: number;
}

const modules = import.meta.glob<WordDay>('./words/w*d*.ts', { eager: true, import: 'default' });

const dayWords = new Map(
	Object.entries(modules)
		.map(([file, words]) => [/(w\dd\d)\.ts$/.exec(file)![1], words] as const)
		.sort(([a], [b]) => a.localeCompare(b))
);

export const wordDays: WordDayInfo[] = [...dayWords.keys()].map((key) => ({
	key,
	week: Number(key[1]),
	day: Number(key[3])
}));

export function wordsOf(key: string): WordDay {
	const words = dayWords.get(key);
	if (!words) throw new Error(`단어 ${key} 데이터가 없습니다.`);
	return words;
}

const wordsById = new Map([...dayWords.values()].flat().map((word) => [word.id, word]));

export const wordById = (id: string): Word | undefined => wordsById.get(id);

/** A word repeated at the end of the next Day shares one record with its first row. */
export const recordKey = (word: Word) => word.same ?? word.id;
