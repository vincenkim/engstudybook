import { describe, expect, it } from 'vitest';
import { wordsOf } from '#lib/content/words.js';
import {
	againDeck,
	comesBack,
	currentCard,
	pdfCard,
	progressOf,
	rateCard,
	startSession,
	summaryOf,
	type CardRating,
	type CardSession,
	type CardWord
} from './card-session';

const card = (key: string): CardWord => ({ key, initial: 'unsure', word: key, lines: [] });
const [a, b, c] = ['a', 'b', 'c'].map(card);

const rateAll = (session: CardSession, ratings: CardRating[]) => ratings.reduce(rateCard, session);
const keys = (cards: CardWord[]) => cards.map(({ key }) => key);

describe('card session (KTD10)', () => {
	it('puts a 처음 word back once and sums each word by its last rating (AE4)', () => {
		const session = rateAll(startSession([a, b, c]), ['new', 'unsure', 'known', 'new']);
		expect(currentCard(session)).toBeUndefined();
		expect(summaryOf(session)).toEqual({ new: 1, unsure: 1, known: 1 });
		expect(keys(againDeck(session))).toEqual(['a', 'b']);
	});

	it('grows the total by one when a word is rated 처음', () => {
		const start = startSession([a, b, c]);
		expect(progressOf(start)).toEqual({ position: 1, total: 3 });
		const next = rateCard(start, 'new');
		expect(progressOf(next)).toEqual({ position: 2, total: 4 });
		expect(currentCard(next)).toBe(b);
	});

	it('shows the deck in order, then the words put back in the order they were rated', () => {
		const session = rateAll(startSession([a, b, c]), ['new', 'new', 'known']);
		expect(keys(session.cards)).toEqual(['a', 'b', 'c', 'a', 'b']);
		expect(currentCard(session)).toBe(a);
	});

	it('says whether 처음 still brings the card back', () => {
		const start = startSession([a, b]);
		expect(comesBack(start)).toBe(true);
		const again = rateAll(start, ['new', 'known']);
		expect(currentCard(again)).toBe(a);
		expect(comesBack(again)).toBe(false);
	});

	it('counts a word rated 처음 and then 완벽 as 완벽', () => {
		const session = rateAll(startSession([a, b, c]), ['new', 'known', 'known', 'known']);
		expect(summaryOf(session)).toEqual({ new: 0, unsure: 0, known: 3 });
		expect(againDeck(session)).toEqual([]);
	});

	it('fixes the deck when the session starts', () => {
		const deck = [a, b];
		const session = startSession(deck);
		deck.push(c);
		expect(progressOf(session)).toEqual({ position: 1, total: 2 });
	});

	it('keeps the last position once every card is rated', () => {
		const session = rateAll(startSession([a]), ['known']);
		expect(progressOf(session)).toEqual({ position: 1, total: 1 });
	});

	it('shows a PDF word with its IPA and its senses by part of speech', () => {
		expect(pdfCard(wordsOf('w1d1')[0])).toEqual({
			key: 'w1d1-01',
			initial: 'unsure',
			star: false,
			word: 'additional',
			ipa: '[əˈdɪʃənl]',
			lines: [{ pos: '형', senses: [{ text: '추가의' }, { text: '부가의' }] }]
		});
	});
});
