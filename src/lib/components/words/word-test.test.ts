import { describe, expect, it } from 'vitest';
import { dayContent, dayNumbers, questionsOnPage } from '#lib/content/index.js';
import { wordDays, wordsOf } from '#lib/content/words.js';
import { normalizeEnglish, type SavedWords, type WordEntries } from '#lib/progress/words.js';
import { pdfCard, pdfCards, savedCard, type CardWord } from './card-session';
import {
	answered,
	gradeTest,
	hintOf,
	newTest,
	questionLines,
	shuffled,
	spokenHint,
	testable,
	testWords
} from './word-test';

/** A repeatable stand-in for Math.random. */
function seeded(seed: number) {
	let state = seed;
	return () => {
		state = (state * 1_103_515_245 + 12_345) % 2 ** 31;
		return state / 2 ** 31;
	};
}

const savedWord = (word: string, meaning: string) => ({ word, meanings: [meaning], sources: [] });
const saved = (word: string, meaning: string) =>
	savedCard(normalizeEnglish(word), savedWord(word, meaning));
const pdf = (english: string) =>
	pdfCard(wordDays.flatMap(({ key }) => wordsOf(key)).find(({ word }) => word === english)!);
const keys = (cards: CardWord[]) => cards.map(({ key }) => key);

/** Every English entry of the question vocabulary, the only words a learner can save. */
const vocabulary = [
	...new Map(
		dayNumbers
			.flatMap((day) => dayContent(day).pages)
			.flatMap((page) => [
				...(page.type === 'set' ? page.vocab : []),
				...questionsOnPage(page).flatMap(({ vocab }) => vocab ?? [])
			])
			.map(([english]) => [normalizeEnglish(english), english])
	).values()
];

describe('drawing a test (R7)', () => {
	it('shuffles the same way for the same random source, keeping every word once', () => {
		const words = Array.from({ length: 30 }, (_, index) => index);
		const once = shuffled(words, seeded(7));
		expect(shuffled(words, seeded(7))).toEqual(once);
		expect(once).not.toEqual(words);
		expect([...once].sort((a, b) => a - b)).toEqual(words);
	});

	it('takes each record once, so Week 3 has 249 words in its 253 rows', () => {
		const { words } = testWords({ kind: 'week', week: 3 }, {}, {});
		expect(words).toHaveLength(249);
		expect(new Set(keys(words)).size).toBe(249);
	});

	it('gives every word of a Day with fewer words than the count (AE1)', () => {
		const { words } = testWords({ kind: 'day', day: 'w1d4' }, {}, {});
		expect(newTest(words, 50, pdfCards, seeded(1))).toHaveLength(49);
		expect(newTest(words, 10, pdfCards, seeded(1))).toHaveLength(10);
	});

	it('makes 전체 the 1,000 PDF words only', () => {
		const record: SavedWords = { 'take leave': savedWord('take leave', '휴가를 내다') };
		expect(testWords({ kind: 'all' }, {}, record).words).toHaveLength(1000);
	});

	it('joins starred PDF and saved words, a saved PDF word once as the PDF word', () => {
		const delay = pdf('delay');
		const record: SavedWords = {
			'take leave': savedWord('take leave', '휴가를 내다'),
			delay: savedWord('delay', '지연')
		};
		const entries: WordEntries = {
			'saved:take leave': { star: true },
			[delay.key]: { star: true }
		};
		const before = structuredClone(entries);
		const { words } = testWords({ kind: 'star' }, entries, record);
		expect(words).toHaveLength(10);
		expect(words.filter(({ key }) => key === delay.key)).toEqual([delay]);
		expect(keys(words)).toContain('saved:take leave');
		expect(entries).toEqual(before);
	});

	it('leaves out a PDF word whose star the learner turned off', () => {
		const desirable = pdf('desirable');
		const { words } = testWords({ kind: 'star' }, { [desirable.key]: { star: false } }, {});
		expect(words).toHaveLength(7);
	});

	it('counts the starred saved words it left out for their placeholders (R4)', () => {
		const record: SavedWords = { 'let ~ know': savedWord('let ~ know', '~에게 알리다') };
		const entries: WordEntries = { 'saved:let ~ know': { star: true } };
		const { words, leftOut } = testWords({ kind: 'star' }, entries, record);
		expect(words).toHaveLength(8);
		expect(leftOut).toBe(1);
		expect(testWords({ kind: 'star' }, {}, record).leftOut).toBe(0);
	});
});

describe('saved words with placeholders (R4)', () => {
	it('leaves out 59 of the 1,445 question vocabulary entries', () => {
		expect(vocabulary).toHaveLength(1445);
		expect(vocabulary.filter((english) => !testable(english))).toHaveLength(59);
	});

	it.each([
		'let ~ know',
		'replace A with B',
		'look forward to -ing',
		'spend 시간 -ing',
		'Keep the change.'
	])('leaves out %s', (english) => expect(testable(english)).toBe(false));

	it.each(['part-time', "I'm afraid", 'résumé', 'City Hall'])('keeps %s', (english) =>
		expect(testable(english)).toBe(true)
	);

	it('counts the saved words it left out of the 담은 단어 range', () => {
		const record: SavedWords = {
			delay: savedWord('delay', '지연'),
			'let ~ know': savedWord('let ~ know', '~에게 알리다')
		};
		const { words, leftOut } = testWords({ kind: 'saved' }, {}, record);
		expect(words.map(({ word }) => word)).toEqual(['delay']);
		expect(leftOut).toBe(1);
	});

	it('keeps the keys saved words are stored under', () => {
		expect(normalizeEnglish('résumé')).toBe('résumé');
		expect(normalizeEnglish('spend 시간 -ing')).toBe('spend 시간 -ing');
	});
});

describe('the question (R9, R10)', () => {
	const shown = (card: CardWord) => questionLines(card).flatMap(({ senses }) => senses);

	it('leaves no English and no empty sense in any PDF meaning', () => {
		const senses = pdfCards.flatMap(shown).map(({ text }) => text);
		expect(senses.filter((text) => /[A-Za-z]/.test(text) || !text)).toEqual([]);
	});

	it('takes out the parentheses that give the answer away (AE3)', () => {
		expect(shown(pdf('conscious')).map(({ text }) => text)).toEqual(['의식하고 있는', '자각하는']);
		expect(shown(pdf('obligation')).map(({ text }) => text)).toEqual(['의무', '책임', '계약']);
	});

	it('keeps the parentheses with Korean only', () => {
		expect(shown(pdf('warranty'))[0].text).toBe('보증(서)');
		expect(shown(pdf('draw'))[0].text).toBe('(이목, 관심을) 끌다');
	});

	it.each([
		['additional', 'a _ _ _ _ _ _ _ _ _'],
		['take off', 't _ _ _   o _ _'],
		['part-time', 'p _ _ _ - t _ _ _'],
		["I'm afraid", "I ' _   a _ _ _ _ _"]
	])('hints %s as %s', (word, hint) => expect(hintOf(word)).toBe(hint));

	it('reads the hint word by word', () => {
		expect(spokenHint('take')).toBe('첫 글자 t, 4글자');
		expect(spokenHint('take off')).toBe('첫 글자 t, 4글자 / 첫 글자 o, 3글자');
	});
});

describe('grading (R12, R14)', () => {
	const grade = (card: CardWord, answer: string, candidates = [card]) =>
		gradeTest(newTest([card], 10, candidates), [answer]).correct === 1;

	it.each([
		['additional', 'ADDITIONAL ', true],
		['additional', 'additonal', false],
		['additional', '', false],
		['additional', '   ', false],
		['take off', 'take  off', true]
	])('grades %s answered %j as %s', (english, answer, correct) =>
		expect(grade(pdf(english), answer)).toBe(correct)
	);

	it('ignores curly quotes and accents but not hyphens (AE4)', () => {
		expect(grade(saved("I'm afraid", '유감이지만'), 'I’m afraid')).toBe(true);
		expect(grade(saved('résumé', '이력서'), 'Resume')).toBe(true);
		expect(grade(saved('part-time', '시간제의'), 'part time')).toBe(false);
	});

	it('accepts the other word of a pair its hint and meaning cannot tell apart (AE4)', () => {
		expect(grade(pdf('refuse'), 'reject', pdfCards)).toBe(true);
		expect(grade(pdf('restore'), 'recover', pdfCards)).toBe(false);
		const { words } = testWords({ kind: 'all' }, {}, {});
		const twins = newTest(words, 1000, pdfCards).filter(({ accepted }) => accepted.length > 1);
		expect(twins.map(({ card }) => card.word).sort()).toEqual(['refuse', 'reject']);
	});

	it('accepts saved words saved with the same meaning and hint', () => {
		const [involve, include] = [saved('involve', '포함하다'), saved('include', '포함하다')];
		expect(grade(involve, 'include', [involve, include])).toBe(true);
	});

	it('counts an answer of spaces only as blank', () => {
		expect(answered('  ')).toBe(false);
		expect(answered(' a ')).toBe(true);
	});

	it('lists each wrong word with the answer given', () => {
		const words = [pdf('additional'), pdf('attend')];
		const questions = newTest(words, 10, words, seeded(3));
		const answers = questions.map(({ card }) => (card.word === 'attend' ? 'atend' : card.word));
		const result = gradeTest(questions, answers);
		expect(result).toMatchObject({ total: 2, correct: 1 });
		expect(result.wrong.map(({ card, answer }) => [card.word, answer])).toEqual([
			['attend', 'atend']
		]);
	});
});
