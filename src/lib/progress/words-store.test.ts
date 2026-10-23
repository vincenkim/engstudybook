import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { wordsOf } from '#lib/content/words.js';
import { defaultProgress, newDayProgress, type Progress } from './model';
import {
	backupOf,
	progress,
	readProgressFile,
	replaceProgress,
	restoreBackup
} from './store.svelte';
import { pdfItem, savedItem, statusOf } from './words';
import {
	defaultWordsRecord,
	parseWordsRecord,
	rateWord,
	removeSaved,
	replaceWords,
	saveVocab,
	setStatusFromList,
	toggleStar,
	wordsRecord,
	type WordsRecord
} from './words-store.svelte';

const [beforehand] = wordsOf('w1d1')
	.filter((word) => word.word === 'beforehand')
	.map(pdfItem);
const desirable = pdfItem(wordsOf('w1d1').find((word) => word.word === 'desirable')!);

const fileOf = (record: object) => new File([JSON.stringify(record)], 'toeic-basic-progress.json');

const progressBefore: Progress = {
	version: 2,
	settings: { mode: 'exam', rate: 1 },
	lastDay: 2,
	days: { 2: { ...newDayProgress(), mode: 'instant', answers: { q1: 1 }, misses: { q1: 2 } } }
};

const wordsSaved: WordsRecord = {
	version: 1,
	entries: { 'w1d1-05': { status: 'new', reviewed: '2026-10-20', streak: 0, star: true } },
	saved: { 'take leave': { word: 'take leave', meanings: ['휴가를 내다'], sources: ['d03-12'] } },
	lastDay: 'w1d2',
	direction: 'ko-en'
};

beforeEach(() => {
	vi.useFakeTimers({ now: new Date(2026, 9, 23, 9) });
	replaceProgress(defaultProgress());
	replaceWords(defaultWordsRecord());
});

afterEach(() => vi.useRealTimers());

describe('word record', () => {
	it('drops only a malformed entry and keeps the others', () => {
		const parsed = parseWordsRecord({
			...wordsSaved,
			entries: { ...wordsSaved.entries, 'w1d1-06': { status: 'great' } },
			saved: { ...wordsSaved.saved, broken: { word: '' } }
		});
		expect(parsed).toEqual(wordsSaved);
	});

	it('reads a record of another version as unusable', () => {
		expect(parseWordsRecord({ ...wordsSaved, version: 2 })).toBeNull();
		expect(parseWordsRecord('words')).toBeNull();
	});

	it('rates a word on today’s date', () => {
		rateWord(beforehand, 'new');
		expect(wordsRecord.entries[beforehand.key]).toEqual({
			status: 'new',
			reviewed: '2026-10-23',
			streak: 0
		});
	});

	it('moves a word to the next status from the list and dates it', () => {
		expect(beforehand.initial).toBe('unsure');
		setStatusFromList(beforehand);
		expect(wordsRecord.entries[beforehand.key]).toMatchObject({
			status: 'known',
			reviewed: '2026-10-23'
		});
	});

	it('turns a PDF star off and on again', () => {
		toggleStar(desirable);
		expect(wordsRecord.entries[desirable.key]).toEqual({ star: false });
		toggleStar(desirable);
		expect(wordsRecord.entries[desirable.key]).toEqual({ star: true });
	});
});

describe('backup', () => {
	it('keeps word records, saved words and the theme through export and import', async () => {
		replaceProgress({
			...structuredClone(progressBefore),
			settings: { mode: 'exam', rate: 1, theme: 'dark' }
		});
		replaceWords(structuredClone(wordsSaved));
		const file = fileOf(backupOf());
		replaceProgress({
			...defaultProgress(),
			settings: { mode: 'instant', rate: 1, theme: 'light' }
		});
		replaceWords(defaultWordsRecord());
		restoreBackup((await readProgressFile(file))!);
		expect(progress.settings.theme).toBe('dark');
		expect(progress.days).toEqual(progressBefore.days);
		expect(wordsRecord).toEqual(wordsSaved);
	});

	it('keeps the words and theme when a backup made before the wordbook comes in (AE5)', async () => {
		replaceProgress({
			...defaultProgress(),
			settings: { mode: 'instant', rate: 1, theme: 'dark' }
		});
		replaceWords(structuredClone(wordsSaved));
		restoreBackup((await readProgressFile(fileOf(progressBefore)))!);
		expect(progress.days).toEqual(progressBefore.days);
		expect(progress.settings).toEqual({ mode: 'exam', rate: 1, theme: 'dark' });
		expect(wordsRecord).toEqual(wordsSaved);
	});

	it('keeps the words when a file from the original app comes in', async () => {
		replaceWords(structuredClone(wordsSaved));
		const v1 = { settings: { mode: 'instant', rate: 1 }, days: {} };
		restoreBackup((await readProgressFile(fileOf(v1)))!);
		expect(wordsRecord).toEqual(wordsSaved);
	});

	it('keeps the words and says so when the file’s word record cannot be read', async () => {
		replaceWords(structuredClone(wordsSaved));
		const read = (await readProgressFile(fileOf({ ...progressBefore, words: { version: 9 } })))!;
		expect(read.unreadableWords).toBe(true);
		restoreBackup(read);
		expect(progress.days).toEqual(progressBefore.days);
		expect(wordsRecord).toEqual(wordsSaved);
		expect((await readProgressFile(fileOf(progressBefore)))!.unreadableWords).toBe(false);
	});
});

describe('saved words', () => {
	it('forgets the record of a removed saved word the PDF lacks, so saving it again starts over', () => {
		saveVocab('take leave', '휴가를 내다', 'd03-12');
		rateWord(savedItem('take leave'), 'known');
		removeSaved('take leave');
		expect(wordsRecord.entries['saved:take leave']).toBeUndefined();
		saveVocab('take leave', '휴가를 내다', 'd03-12');
		expect(statusOf(wordsRecord.entries, savedItem('take leave'))).toBe('unseen');
	});

	it('keeps the PDF word’s record when a saved word that shares it is removed', () => {
		const delay = savedItem('delay');
		expect(delay.key).not.toMatch(/^saved:/);
		saveVocab('delay', '지연', 'd11-13');
		rateWord(delay, 'known');
		removeSaved('delay');
		expect(wordsRecord.entries[delay.key]).toMatchObject({ status: 'known' });
	});
});
