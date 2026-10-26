import { describe, expect, it } from 'vitest';
import { meaningKey, senseKeys, splitMeanings } from './word-meaning';
import { pdfCards } from './card-session';
import { questionLines } from './word-test';

describe('splitting meanings (R7, R8)', () => {
	it.each([
		['회의, 학회', ['회의', '학회']],
		['확인하다; 수표', ['확인하다', '수표']],
		['(신념, 의견 등을) 고집하다', ['(신념, 의견 등을) 고집하다']],
		['(당연한 권리를) 포기하다,', ['(당연한 권리를) 포기하다']],
		['추가의,,부가의', ['추가의', '부가의']],
		['   ', []]
	])('splits %j into %j', (text, parts) => expect(splitMeanings(text)).toEqual(parts));
});

describe('meaning keys (R7)', () => {
	it('ignores spaces, ~, …, end marks, commas, middle dots and parentheses', () => {
		expect(meaningKey(' 이용할 수  있는 ')).toBe('이용할수있는');
		expect(meaningKey('~에게 알리다')).toBe('에게알리다');
		expect(meaningKey('잔돈은 가지세요.')).toBe('잔돈은가지세요');
		expect(meaningKey('(책·잡지가) 나오다')).toBe('책잡지가나오다');
		expect(meaningKey('A를 B로 교체하다')).toBe('a를b로교체하다');
	});

	it('takes a Korean parenthesis in or out', () => {
		expect(senseKeys('보증(서)').sort()).toEqual(['보증', '보증서']);
		expect(senseKeys('(이목, 관심을) 끌다')).toEqual(
			expect.arrayContaining(['끌다', '이목관심을끌다'])
		);
		expect(senseKeys('(출판물의) ~호(판)')).toHaveLength(4);
	});

	it('gives every PDF sense a key, with no English left', () => {
		const parts = pdfCards
			.flatMap((card) => questionLines(card))
			.flatMap(({ senses }) => senses)
			.flatMap(({ text }) => splitMeanings(text));
		expect(parts.filter((part) => !senseKeys(part).length)).toEqual([]);
		expect(parts.flatMap(senseKeys).filter((key) => /[a-z]/.test(key))).toEqual([]);
	});
});
