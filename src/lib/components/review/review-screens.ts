import type { Page, Passage, SetPage } from '#lib/content/index.js';
import type { ReviewItem } from '#lib/progress/review.js';

/** A screen of a review session: one question alone, or questions of one set beside its passage. */
export interface ReviewScreen {
	day: number;
	/** In question order; a set screen may skip questions of the set answered right. */
	items: ReviewItem[];
	/**
	 * Day number of the set's first question, or of the question alone; it seeds the voices, so
	 * they sound as in the Day (KTD16).
	 */
	first: number;
	/** The set cut down to the screen's questions; null for a question without a set. */
	set: SetPage | null;
}

/** The set page holding the question, or null for a question on its own page. */
export function setOf(pages: Page[], questionId: string): SetPage | null {
	const page = pages.find(
		(p) => p.type === 'set' && p.questions.some((question) => question.id === questionId)
	);
	return page?.type === 'set' ? page : null;
}

const only = <Q extends { id: string }>(questions: Q[], ids: string[]) =>
	questions.filter((question) => ids.includes(question.id));

/** Part 6 blanks of the questions shown keep their numbers, as in the list; others stay empty. */
function hideBlanks(passages: Passage[], shown: number[]): Passage[] {
	const hide = (text: string) =>
		text.replace(/\{(\d)\}/g, (blank, number: string) =>
			shown.includes(Number(number)) ? blank : '-----'
		);
	return passages.map((passage) => ({
		...passage,
		body: passage.body.map((block) => (typeof block === 'string' ? hide(block) : block))
	}));
}

/** The set with only the given questions; the content itself stays as it is. */
function cutSet(set: SetPage, ids: string[]): SetPage {
	if (set.part === 6) {
		const shown = set.questions.flatMap((q, index) => (ids.includes(q.id) ? [index + 1] : []));
		return {
			...set,
			questions: only(set.questions, ids),
			passages: hideBlanks(set.passages, shown)
		};
	}
	return { ...set, questions: only(set.questions, ids) };
}

/**
 * Splits the review list into session screens, in list order. Questions of a set next to each
 * other in the list share a screen, also with questions answered right left out between them.
 */
export function reviewScreens(
	items: ReviewItem[],
	pagesOf: (day: number) => Page[]
): ReviewScreen[] {
	const runs: { day: number; items: ReviewItem[]; source: SetPage | null }[] = [];
	for (const item of items) {
		const source = setOf(pagesOf(item.day), item.question.id);
		const last = runs.at(-1);
		if (source && last?.source === source) last.items.push(item);
		else runs.push({ day: item.day, items: [item], source });
	}
	return runs.map(({ day, items, source }) => {
		const ids = items.map((item) => item.question.id);
		const first = items[0].number - (source?.questions.findIndex((q) => q.id === ids[0]) ?? 0);
		return { day, items, first, set: source && cutSet(source, ids) };
	});
}

/** What the list shows of a question: Part 2 keeps its script hidden, Part 6 names its blank. */
export function reviewSummary(
	{ question }: ReviewItem,
	set: SetPage | null
): { text: string; english: boolean } {
	if (question.part === 2) return { text: '듣기 · 질문 응답', english: false };
	if (set?.part === 6) {
		const blank = set.questions.findIndex((q) => q.id === question.id) + 1;
		return { text: `빈칸 (${blank}) · ${set.label}`, english: false };
	}
	return { text: question.text ?? '', english: true };
}

/** The list grouped by Day, keeping its order. */
export function reviewByDay(items: ReviewItem[]): { day: number; items: ReviewItem[] }[] {
	const groups: { day: number; items: ReviewItem[] }[] = [];
	for (const item of items) {
		const last = groups.at(-1);
		if (last?.day === item.day) last.items.push(item);
		else groups.push({ day: item.day, items: [item] });
	}
	return groups;
}
