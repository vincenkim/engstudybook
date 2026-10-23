import { describe, expect, it } from 'vitest';
import { dayContent, sectionsOf } from '#lib/content/index.js';
import { sectionSteps } from './section-steps';

const stepsOf = (day: number, section: number) =>
	sectionSteps(dayContent(day), sectionsOf(day)[section]);

describe('sectionSteps', () => {
	it('lists each step of a section with its first study page and size', () => {
		expect(stepsOf(1, 0)).toEqual([
			{ name: '개념', page: 1, size: '3장' },
			{ name: '따라 풀기', page: 4, size: '2문제' },
			{ name: '실전', page: 6, size: '15문항' }
		]);
		expect(stepsOf(1, 1)).toEqual([
			{ name: '개념', page: 21, size: '2장' },
			{ name: '따라 풀기', page: 23, size: '1문제' },
			{ name: '실전', page: 24, size: '10문항' }
		]);
	});

	it('leaves out a step the section does not have', () => {
		expect(stepsOf(25, 0).map((step) => step.name)).toEqual(['개념', '실전']);
	});
});
