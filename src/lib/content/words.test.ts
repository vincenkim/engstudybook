import { describe, expect, it } from 'vitest';
import { wordDaySchema, wordStatuses } from './word-schema';
import { recordKey, wordById, wordDays, wordsOf, type Word } from './words';

const rowsPerDay = [50, 50, 50, 49, 51, 52, 49, 52, 50, 50, 50, 51, 50, 51, 51, 51, 50, 50, 50, 49];
const allWords = wordDays.flatMap((day) => wordsOf(day.key));
const twoDigits = (no: number) => String(no).padStart(2, '0');

/** Later row → earlier row: the last two words of a Day repeated at the end of the next Day. */
const repeated = {
	'w3d3-50': 'w3d2-50',
	'w3d3-51': 'w3d2-51',
	'w3d5-50': 'w3d4-50',
	'w3d5-51': 'w3d4-51',
	'w4d4-49': 'w4d3-49',
	'w4d4-50': 'w4d3-50'
};

function balanced(text: string) {
	let depth = 0;
	for (const char of text) {
		if (char === '(') depth++;
		else if (char === ')' && --depth < 0) return false;
	}
	return depth === 0;
}

const view = ({ word, ipa, groups }: Word) => ({ word, ipa, groups });

describe('word days', () => {
	it('lists Week 1-4 x Day 1-5 in order', () => {
		expect(wordDays).toEqual(
			[1, 2, 3, 4].flatMap((week) =>
				[1, 2, 3, 4, 5].map((day) => ({ key: `w${week}d${day}`, week, day }))
			)
		);
	});

	it('has 1,006 rows of 1,000 unique words', () => {
		expect(allWords).toHaveLength(1006);
		expect(new Set(allWords.map(recordKey)).size).toBe(1000);
	});

	it('skips #49 only in Week 3 Day 3, as the PDF does', () => {
		expect(wordDays.filter((day) => !wordById(`${day.key}-49`)).map((day) => day.key)).toEqual([
			'w3d3'
		]);
	});

	it('rejects a misspelled field', () => {
		const broken = structuredClone(wordsOf('w1d1'));
		Object.assign(broken[0], { wrod: 'typo' });
		expect(wordDaySchema.safeParse(broken).success).toBe(false);
	});
});

describe.each(wordDays.map((day, index) => ({ ...day, rows: rowsPerDay[index] })))(
	'$key',
	({ key, rows }) => {
		const words = wordsOf(key);

		it('matches the schema', () => {
			expect(wordDaySchema.safeParse(words).error).toBeUndefined();
		});

		it(`has ${rows} rows like the PDF`, () => {
			expect(words).toHaveLength(rows);
		});

		it('numbers ids in PDF order', () => {
			const numbers = Array.from({ length: rows + 1 }, (_, index) => index + 1).filter((no) =>
				key === 'w3d3' ? no !== 49 : no <= rows
			);
			expect(words.map((word) => word.no)).toEqual(numbers);
			expect(words.map((word) => word.id)).toEqual(numbers.map((no) => `${key}-${twoDigits(no)}`));
		});
	}
);

describe('repeated words', () => {
	it('links the 6 repeated rows to the same word of the Day before', () => {
		const linked = allWords.filter((word) => word.same);
		expect(Object.fromEntries(linked.map((word) => [word.id, word.same]))).toEqual(repeated);
		expect(linked.map((word) => word.word)).toEqual([
			'take off',
			'temporary',
			'value',
			'voucher',
			'troubleshooting',
			'urban'
		]);
	});

	it('keeps both rows identical, with the later Day circle as the first status', () => {
		for (const [later, earlier] of Object.entries(repeated)) {
			const [a, b] = [wordById(earlier)!, wordById(later)!];
			expect({ ...view(b), initial: b.initial }, later).toEqual({
				...view(a),
				initial: a.initial
			});
			expect(a.same, earlier).toBeUndefined();
		}
	});
});

describe('PDF marks', () => {
	it('stars the 8 words under the blue highlighter', () => {
		expect(allWords.filter((word) => word.star).map((word) => word.word)).toEqual([
			'desirable',
			'incidental',
			'relevant',
			'exemplary',
			'intensive',
			'prospective',
			'speculation',
			'suitable'
		]);
	});

	it('marks the 15 senses under the gray highlighter as key senses', () => {
		const keySenses = allWords.flatMap((word) =>
			word.groups.flatMap((group) =>
				group.senses.filter((sense) => sense.key).map((sense) => [word.id, sense.text])
			)
		);
		const sense = (id: string, text: string) => [id, expect.stringContaining(text)];
		expect(keySenses).toEqual([
			sense('w1d3-01', '지키다'),
			sense('w1d3-02', '고집하다'),
			sense('w1d3-03', '장치'),
			sense('w1d3-04', '외모'),
			sense('w1d3-05', '복장'),
			sense('w1d3-06', '허가하다'),
			sense('w2d2-01', '찬사'),
			sense('w2d2-02', '조정하다'),
			sense('w2d2-03', '발전'),
			sense('w2d2-04', '알맞은'),
			sense('w2d2-05', '재미'),
			sense('w2d2-06', '기구'),
			sense('w2d2-07', '부피'),
			sense('w2d2-09', '상자'),
			sense('w2d2-10', '일반적인')
		]);
	});

	it('takes the first status from the circles, counted by row and by unique word', () => {
		const count = (words: Word[]) =>
			Object.fromEntries(
				wordStatuses.map((status) => [status, words.filter((w) => w.initial === status).length])
			);
		// The PDF circles 248 처음 · 608 애매 · 148 완벽 rows; 3 earlier repeats take the later 완벽.
		expect(count(allWords)).toEqual({ unseen: 2, new: 248, unsure: 605, known: 151 });
		expect(count(allWords.filter((word) => recordKey(word) === word.id))).toEqual({
			unseen: 2,
			new: 248,
			unsure: 603,
			known: 147
		});
	});

	it('leaves only the 2 uncircled rows unseen', () => {
		expect(allWords.filter((word) => word.initial === 'unseen').map((word) => word.id)).toEqual([
			'w3d3-05',
			'w3d3-06'
		]);
	});
});

describe('meanings', () => {
	it('splits every meaning into non-empty senses with balanced parentheses', () => {
		const broken = allWords.flatMap((word) =>
			word.groups.flatMap((group) =>
				group.senses
					.filter((sense) => sense.text.trim() !== sense.text || !balanced(sense.text))
					.map((sense) => `${word.id} ${sense.text}`)
			)
		);
		expect(broken).toEqual([]);
	});

	it('splits parts of speech only at markers between spaces, not at 노동(자)', () => {
		expect(wordById('w2d5-24')!.groups).toEqual([
			{ pos: '명', senses: [{ text: '노동(자)' }, { text: '근로' }] }
		]);
	});

	it('reads p3 #50 versatile below the last table rule', () => {
		expect(view(wordById('w1d2-50')!)).toEqual({
			word: 'versatile',
			ipa: '[və́ːrsətl]',
			groups: [
				{ pos: '형', senses: [{ text: '다재다능한' }, { text: '다용도의' }, { text: '다양한' }] }
			]
		});
	});

	it('reads p14 #3-5 like the page image, with the continuation row as a group of account', () => {
		const senses = (...texts: string[]) => texts.map((text) => ({ text }));
		expect(['w3d3-03', 'w3d3-04', 'w3d3-05'].map((id) => view(wordById(id)!))).toEqual([
			{
				word: 'account',
				ipa: '[əkáunt]',
				groups: [
					{ pos: '명', senses: senses('계좌', '계정', '거래처', '회계') },
					{ pos: '자', senses: senses('(비율을) 차지하다', '해명하다 (for)') }
				]
			},
			{
				word: 'amount',
				ipa: '[əmáunt]',
				groups: [{ pos: '명', senses: senses('(총)금액', '양 (the amount of)') }]
			},
			{
				word: 'balance',
				ipa: '[bǽləns]',
				groups: [{ pos: '명', senses: senses('균형', '조화', '잔고', '잔액') }]
			}
		]);
	});
});
