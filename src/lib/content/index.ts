import { curriculum } from './curriculum';
import type { DayContent, LessonPage, Page, Part } from './schema';

export { curriculum };
export type * from './schema';

/** A question flattened out of its page, with the part a set question inherits from its set. */
export interface QuestionItem {
	id: string;
	part: Part;
	text?: string;
	script?: string;
	ko?: string;
	options: string[];
	optionsKo?: string[];
	answer: number;
	why: string;
	notes?: string[];
	vocab?: [string, string][];
}

const modules = import.meta.glob<DayContent>('./days/day*.ts', { eager: true, import: 'default' });

const days = new Map(
	Object.entries(modules).map(([file, content]) => [
		Number(/day(\d+)\.ts$/.exec(file)?.[1]),
		content
	])
);

const topics = new Map(curriculum.flatMap((phase) => phase.days.map((d) => [d.day, d.topics])));

export const dayNumbers = [...topics.keys()];

export const questionsPerDay = 25;

export const hasDay = (day: number) => days.has(day) && topics.has(day);

export function dayContent(day: number): DayContent {
	const content = days.get(day);
	if (!content) throw new Error(`Day ${day} 데이터가 없습니다.`);
	return content;
}

export const dayTopics = (day: number) => topics.get(day) ?? [];

const pageQuestions = new WeakMap<Page, QuestionItem[]>();

export function questionsOnPage(page: Page): QuestionItem[] {
	let items = pageQuestions.get(page);
	if (!items) {
		if (page.type === 'set') items = page.questions.map((q) => ({ ...q, part: page.part }));
		else items = page.type === 'question' ? [page] : [];
		pageQuestions.set(page, items);
	}
	return items;
}

const dayQuestions = new Map<number, QuestionItem[]>();

export function questionsOf(day: number): QuestionItem[] {
	let items = dayQuestions.get(day);
	if (!items) {
		items = dayContent(day).pages.flatMap(questionsOnPage);
		dayQuestions.set(day, items);
	}
	return items;
}

/** A topic block of a day: its lessons, then the guided examples and practice they lead to. */
export interface Section {
	/** The curriculum topic when the day has one per section, otherwise the first lesson title. */
	name: string;
	section: LessonPage['section'];
	parts: Part[];
	/** First page of each step, indexed like the study pages of a day not retrying (cover at 0). */
	start: { lesson: number; guided: number | null; practice: number | null };
	/** The practice questions, in page order. */
	questions: QuestionItem[];
}

/** Splits pages into sections: a new one starts at each lesson that follows another kind of page. */
function splitSections(pages: Page[], topics: string[]): Section[] {
	const sections: Section[] = [];
	pages.forEach((page, offset) => {
		const index = offset + 1;
		if (page.type === 'lesson') {
			if (pages[offset - 1]?.type === 'lesson') return;
			const start = { lesson: index, guided: null, practice: null };
			sections.push({ name: page.title, section: page.section, parts: [], start, questions: [] });
			return;
		}
		// Every day opens with a lesson, so a section is open here.
		const current = sections[sections.length - 1];
		if (!current.parts.includes(page.part)) current.parts.push(page.part);
		if (page.type === 'guided') {
			current.start.guided ??= index;
		} else {
			current.start.practice ??= index;
			current.questions.push(...questionsOnPage(page));
		}
	});
	if (sections.length === topics.length) sections.forEach((s, n) => (s.name = topics[n]));
	return sections;
}

const daySections = new Map<number, Section[]>();

export function sectionsOf(day: number): Section[] {
	let sections = daySections.get(day);
	if (!sections) {
		sections = splitSections(dayContent(day).pages, dayTopics(day));
		daySections.set(day, sections);
	}
	return sections;
}
