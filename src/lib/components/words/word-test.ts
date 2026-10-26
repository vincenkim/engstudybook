import { wordDays, wordsOf } from '#lib/content/words.js';
import {
	normalizeEnglish,
	starOf,
	uniqueByKey,
	type SavedWords,
	type WordEntries
} from '#lib/progress/words.js';
import { pdfCard, pdfCards, savedCard, type CardWord } from './card-session';

/** Where a test draws its words from (R2, R6). */
export type TestRange =
	| { kind: 'all' }
	| { kind: 'week'; week: number }
	| { kind: 'day'; day: string }
	| { kind: 'saved' }
	| { kind: 'star' };

export const testCounts = [10, 20, 50] as const;
export type TestCount = (typeof testCounts)[number];

/** A question of a test and the answers it takes (R14). */
export interface TestQuestion {
	card: CardWord;
	/** Its word, and any word its hint and meanings cannot tell apart, compared as answers are. */
	accepted: string[];
}

/** `~`, a lone A or B, `-ing`, `one's`, Korean or sentence punctuation: nothing to spell (R4). */
const placeholder = /~|\b[AB]\b|-ing\b|\bone['’]s\b|\boneself\b|[ㄱ-ㅎ가-힣]|[?.]/;

export const testable = (english: string) => !placeholder.test(english);

const weekCards = (week: number) =>
	wordDays.filter((day) => day.week === week).flatMap(({ key }) => wordsOf(key).map(pdfCard));

/**
 * The words a range tests, PDF words first and each record once (R6, R7), and how many saved words
 * it left out for their placeholders (R4).
 */
export function testWords(range: TestRange, entries: WordEntries, saved: SavedWords) {
	const savedWords = Object.entries(saved).map(([english, word]) => savedCard(english, word));
	const kept = savedWords.filter(({ word }) => testable(word));
	const starred = (card: CardWord) => starOf(entries, card);
	switch (range.kind) {
		case 'all':
			return { words: uniqueByKey(pdfCards), leftOut: 0 };
		case 'week':
			return { words: uniqueByKey(weekCards(range.week)), leftOut: 0 };
		case 'day':
			return { words: wordsOf(range.day).map(pdfCard), leftOut: 0 };
		case 'saved':
			return { words: uniqueByKey(kept), leftOut: savedWords.length - kept.length };
		case 'star':
			return {
				words: uniqueByKey([...pdfCards, ...kept].filter(starred)),
				leftOut: savedWords.filter((card) => starred(card) && !testable(card.word)).length
			};
	}
}

/** Fisher–Yates on a copy. */
export function shuffled<T>(items: readonly T[], random = Math.random) {
	const copy = [...items];
	for (let index = copy.length - 1; index > 0; index--) {
		const other = Math.floor(random() * (index + 1));
		[copy[index], copy[other]] = [copy[other], copy[index]];
	}
	return copy;
}

const englishParens = /\([^()]*[A-Za-z][^()]*\)/g;

/** A sense without its parentheses holding English, innermost first: they can give the answer away. */
function withoutEnglish(text: string) {
	let rest = text;
	for (let before = ''; before !== rest;) {
		before = rest;
		rest = rest.replace(englishParens, '');
	}
	return rest.replace(/\s+/g, ' ').trim();
}

/** The meanings a question shows (R9). */
export const questionLines = (card: CardWord): CardWord['lines'] =>
	card.lines.map((line) => ({
		...line,
		senses: line.senses.map((sense) => ({ ...sense, text: withoutEnglish(sense.text) }))
	}));

const letter = /[\p{L}\p{N}]/u;

/** The first letter of each word and hyphenated part, a blank for every other letter (R10). */
export const hintOf = (word: string) =>
	[...word.trim()]
		.map((char, index, chars) =>
			!letter.test(char) || index === 0 || /[\s-]/.test(chars[index - 1]) ? char : '_'
		)
		.join(' ');

/** The hint as a screen reader reads it, word by word (R20). */
export const spokenHint = (word: string) =>
	word
		.trim()
		.split(/\s+/)
		.map((part) => {
			const marks = [part.includes('-') && '하이픈', part.includes("'") && '아포스트로피'];
			const count = `${[...part].filter((char) => letter.test(char)).length}글자`;
			return [
				`첫 글자 ${part[0]}`,
				count,
				...marks.filter(Boolean).map((mark) => `${mark} 있음`)
			].join(', ');
		})
		.join(' / ');

/** What answers are compared by (KTD7); saved words stay keyed by `normalizeEnglish` alone. */
const answerKey = (text: string) =>
	normalizeEnglish(text)
		.replace(/[‘’]/g, "'")
		.normalize('NFD')
		.replace(/\p{M}/gu, '')
		.normalize('NFC');

/** An answer of spaces only is a blank one (R12). */
export const answered = (text: string) => answerKey(text) !== '';

const lookalike = (card: CardWord) =>
	[
		hintOf(card.word).toLowerCase(),
		...questionLines(card)
			.flatMap(({ pos, senses }) => senses.map(({ text }) => `${pos ?? ''}:${text}`))
			.sort()
	].join('|');

/**
 * A new test: the words shuffled and cut to the count (R3, R7). A question also takes the words
 * among `candidates` with its hint and meanings, which nothing on screen tells apart (R14).
 */
export function newTest(
	words: CardWord[],
	count: number,
	candidates: CardWord[],
	random = Math.random
): TestQuestion[] {
	const answersOf = new Map<string, Set<string>>();
	for (const card of [...candidates, ...words]) {
		const key = lookalike(card);
		answersOf.set(key, (answersOf.get(key) ?? new Set()).add(answerKey(card.word)));
	}
	return shuffled(words, random)
		.slice(0, count)
		.map((card) => ({ card, accepted: [...answersOf.get(lookalike(card))!] }));
}

/** Grades every answer at once; a blank answer is wrong (R12, R14). */
export function gradeTest(questions: TestQuestion[], answers: string[]) {
	const wrong = questions.flatMap(({ card, accepted }, index) => {
		const answer = answers[index] ?? '';
		return accepted.includes(answerKey(answer)) ? [] : [{ card, answer }];
	});
	return { total: questions.length, correct: questions.length - wrong.length, wrong };
}
