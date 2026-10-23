import { describe, expect, it } from 'vitest';
import {
	curriculum,
	dayContent,
	dayNumbers,
	dayTopics,
	hasDay,
	questionsOf,
	questionsPerDay,
	sectionsOf,
	type Section
} from './index';
import { curriculumSchema, dayContentSchema } from './schema';

const blank = /-{5,}/;

describe('curriculum', () => {
	it('matches the schema', () => {
		expect(curriculumSchema.safeParse(curriculum).error).toBeUndefined();
	});

	it('has content for every day, numbered 1..n without gaps', () => {
		expect(dayNumbers).toEqual(dayNumbers.map((_, index) => index + 1));
		for (const day of dayNumbers) expect(hasDay(day), `day ${day}`).toBe(true);
	});
});

describe('schema', () => {
	it('rejects an answer outside the options', () => {
		const broken = structuredClone(dayContent(1));
		const question = broken.pages.find((page) => page.type === 'question')!;
		question.answer = 4;
		expect(dayContentSchema.safeParse(broken).success).toBe(false);
	});

	it('rejects a misspelled field', () => {
		const broken = structuredClone(dayContent(1));
		Object.assign(broken.pages[0], { titel: 'typo' });
		expect(dayContentSchema.safeParse(broken).success).toBe(false);
	});
});

describe('sectionsOf', () => {
	const daysFrom = (first: number, last: number) =>
		dayNumbers.filter((day) => day >= first && day <= last);
	const names = (day: number) => sectionsOf(day).map((section) => section.name);
	const lessonTitle = (day: number, section: Section) => {
		const page = dayContent(day).pages[section.start.lesson - 1];
		return page.type === 'lesson' ? page.title : page.type;
	};

	it('starts a section at each lesson after practice, with the study page of each step', () => {
		expect(sectionsOf(1)).toMatchObject([
			{
				name: '명사 자리',
				section: 'RC',
				parts: [5],
				start: { lesson: 1, guided: 4, practice: 6 }
			},
			{
				name: 'Who 의문문',
				section: 'LC',
				parts: [2],
				start: { lesson: 21, guided: 23, practice: 24 }
			}
		]);
	});

	it('names the two sections of days 1-16 after their topics', () => {
		for (const day of daysFrom(1, 16)) {
			expect(sectionsOf(day), `day ${day}`).toHaveLength(2);
			expect(names(day), `day ${day}`).toEqual(dayTopics(day));
		}
	});

	it('names the three sections of days 17-24 after their first lessons', () => {
		for (const day of daysFrom(17, 24)) {
			const sections = sectionsOf(day);
			expect(sections, `day ${day}`).toHaveLength(3);
			expect(names(day), `day ${day}`).toEqual(sections.map((s) => lessonTitle(day, s)));
		}
	});

	it('has no guided step on days 25-36', () => {
		for (const day of daysFrom(25, 36)) {
			expect(names(day), `day ${day}`).toEqual(dayTopics(day));
			expect(sectionsOf(day).map((section) => section.start.guided)).toEqual([null, null, null]);
		}
	});

	it('keeps each mini mock test of days 37-40 in one section', () => {
		for (const day of daysFrom(37, 40)) {
			expect(names(day), `day ${day}`).toEqual(dayTopics(day));
			expect(sectionsOf(day)[0].parts, `day ${day}`).toEqual([2, 3, 4, 5, 6, 7]);
		}
	});
});

describe.each(dayNumbers)('day %i', (day) => {
	const content = dayContent(day);
	const questions = questionsOf(day);
	const phase = curriculum.find((p) => p.days.some((d) => d.day === day))!;

	it('matches the schema', () => {
		expect(dayContentSchema.safeParse(content).error).toBeUndefined();
	});

	it(`has ${questionsPerDay} questions`, () => {
		expect(questions).toHaveLength(questionsPerDay);
	});

	it('has the part mix its phase promises', () => {
		const mix: Record<string, number> = {};
		for (const question of questions) mix[question.part] = (mix[question.part] ?? 0) + 1;
		expect(mix).toEqual(phase.parts);
	});

	it('numbers question ids in page order', () => {
		const prefix = `d${String(day).padStart(2, '0')}-`;
		expect(questions.map((q) => q.id)).toEqual(
			questions.map((_, index) => prefix + String(index + 1).padStart(2, '0'))
		);
	});

	it('puts a blank in every Part 5 sentence', () => {
		const sentences = content.pages.flatMap((page) =>
			(page.type === 'question' || page.type === 'guided') && page.part === 5 ? [page.text] : []
		);
		expect(sentences.filter((sentence) => !blank.test(sentence))).toEqual([]);
	});

	it('translates every line of a conversation or talk', () => {
		const untranslated = content.pages.filter(
			(page) =>
				page.type === 'set' &&
				(page.part === 3 || page.part === 4) &&
				page.scriptKo.length !== page.script.length
		);
		expect(untranslated).toEqual([]);
	});

	it('has topic sections whose practice adds up to the day', () => {
		const sections = sectionsOf(day);
		expect(sections.length).toBeGreaterThan(0);
		expect(sections.flatMap((section) => section.questions)).toHaveLength(questionsPerDay);
	});

	it('numbers Part 6 blanks to match the questions', () => {
		const misnumbered = content.pages.filter((page) => {
			if (page.type !== 'set' || page.part !== 6) return false;
			const body = page.passages.flatMap((p) => p.body).filter((b) => typeof b === 'string');
			const markers = body.join(' ').match(/\{\d\}/g) ?? [];
			return markers.join() !== page.questions.map((_, index) => `{${index + 1}}`).join();
		});
		expect(misnumbered).toEqual([]);
	});
});
