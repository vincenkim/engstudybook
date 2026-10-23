import type { PartOfSpeech, Sense, Word, WordStatus } from '#lib/content/words.js';
import { pdfItem, type StudyItem } from '#lib/progress/words.js';

/**
 * A word as a card shows it, with the study item its ratings are saved under. A PDF word has its
 * IPA and one line per part of speech; a saved word (U9) has no IPA, and its lines no part of speech.
 */
export interface CardWord extends StudyItem {
	word: string;
	ipa?: string;
	/** Senses by line; a key sense shows in bold (R5). */
	lines: { pos?: PartOfSpeech; senses: Sense[] }[];
}

export type CardRating = Exclude<WordStatus, 'unseen'>;

/** One card session (KTD10). Ratings are saved as they are given; the session itself is not. */
export interface CardSession {
	/** The deck as it was at the start, then each word rated 처음 once more. */
	cards: CardWord[];
	/** The card on screen; `cards.length` once every card is rated. */
	index: number;
	/** The last rating of each word, by record key. */
	ratings: Record<string, CardRating>;
}

export const pdfCard = (word: Word): CardWord => ({
	...pdfItem(word),
	word: word.word,
	ipa: word.ipa,
	lines: word.groups
});

export const startSession = (deck: CardWord[]): CardSession => ({
	cards: [...deck],
	index: 0,
	ratings: {}
});

export const currentCard = (session: CardSession): CardWord | undefined =>
	session.cards[session.index];

/** Whether rating the current card 처음 puts it back: only once per session. */
export const comesBack = ({ cards, index }: CardSession) =>
	cards.filter(({ key }) => key === cards[index].key).length === 1;

export function rateCard(session: CardSession, rating: CardRating): CardSession {
	const card = session.cards[session.index];
	const putBack = rating === 'new' && comesBack(session);
	return {
		cards: putBack ? [...session.cards, card] : session.cards,
		index: session.index + 1,
		ratings: { ...session.ratings, [card.key]: rating }
	};
}

/** "n / N" counts the cards put back too, so N grows with each 처음. */
export const progressOf = ({ cards, index }: CardSession) => ({
	position: Math.min(index + 1, cards.length),
	total: cards.length
});

/** Each word counts once, by its last rating. */
export function summaryOf({ ratings }: CardSession) {
	const counts: Record<CardRating, number> = { new: 0, unsure: 0, known: 0 };
	for (const rating of Object.values(ratings)) counts[rating]++;
	return counts;
}

/** The deck of '처음·애매만 한 번 더': the words last rated 처음 or 애매, in deck order. */
export const againDeck = ({ cards, ratings }: CardSession) =>
	cards.filter(
		(card, index) =>
			['new', 'unsure'].includes(ratings[card.key]) &&
			cards.findIndex(({ key }) => key === card.key) === index
	);
