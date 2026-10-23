import type { DayContent, Page, Section } from '#lib/content/index.js';
import { partNames } from './labels';

export interface SectionStep {
	name: '개념' | '따라 풀기' | '실전';
	/** First study page of the step, indexed like the pages of a day not retrying (cover at 0). */
	page: number;
	size: string;
}

/** The run of same-type pages from a study page on (the cover shifts content pages by one). */
export function stepPages(content: DayContent, page: number): Page[] {
	const first = page - 1;
	const { type } = content.pages[first];
	const end = content.pages.findIndex((p, index) => index > first && p.type !== type);
	return content.pages.slice(first, end === -1 ? undefined : end);
}

/** The steps of a section in study order; a step the section does not have is left out. */
export function sectionSteps(content: DayContent, section: Section): SectionStep[] {
	const { lesson, guided, practice } = section.start;
	const steps: SectionStep[] = [
		{ name: '개념', page: lesson, size: `${stepPages(content, lesson).length}장` }
	];
	if (guided !== null) {
		steps.push({
			name: '따라 풀기',
			page: guided,
			size: `${stepPages(content, guided).length}문제`
		});
	}
	if (practice !== null) {
		steps.push({ name: '실전', page: practice, size: `${section.questions.length}문항` });
	}
	return steps;
}

/** 'RC · Part 5 · 단문 빈칸', or the part numbers of a section mixing parts. */
export const sectionKind = ({ section, parts }: Section) =>
	parts.length === 1 ? `${section} · ${partNames[parts[0]]}` : `Part ${parts.join('·')}`;
