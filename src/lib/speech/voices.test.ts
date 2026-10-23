import { describe, expect, it } from 'vitest';
import { castVoices, examVoices, type LineSpeaker, type VoiceLike } from './voices';

const voice = (name: string, lang = 'en-US'): VoiceLike => ({ name, lang });

const zira = voice('Microsoft Zira - English (United States)');
const chrome = [
	voice('Google US English'),
	voice('Google UK English Female', 'en-GB'),
	voice('Google UK English Male', 'en-GB')
];
const windows = [voice('Microsoft David - English (United States)'), zira];
const edge = [
	voice('Microsoft Aria Online (Natural) - English (United States)'),
	voice('Microsoft Guy Online (Natural) - English (United States)'),
	voice('Microsoft Ryan Online (Natural) - English (United Kingdom)', 'en-GB'),
	voice('Microsoft Ana Online (Natural) - English (United States)')
];
const android = [voice('English United States'), voice('English United Kingdom', 'en-GB')];

const castNames = (voices: VoiceLike[], speakers: LineSpeaker[], seed = 0) =>
	[...castVoices(voices, speakers, seed).values()].map((c) => `${c.voice.name}@${c.pitch}`);

describe('examVoices', () => {
	it('prefers natural voices and drops child voices', () => {
		expect(examVoices(edge).map((v) => v.name)).toEqual(edge.slice(0, 3).map((v) => v.name));
	});

	it('drops novelty voices and other languages', () => {
		const apple = [
			voice('Bubbles'),
			voice('Samantha'),
			voice('Yuna', 'ko-KR'),
			voice('Daniel', 'en-GB')
		];
		expect(examVoices(apple).map((v) => v.name)).toEqual(['Samantha', 'Daniel']);
	});
});

// Regression: in Chrome and offline Windows the man and the woman got the same voice.
describe('castVoices', () => {
	it.each([
		['Chrome', chrome],
		['Windows desktop', windows],
		['Edge natural', examVoices(edge)],
		['Android (no gender in names)', android]
	])('gives the man and the woman different voices on %s', (_, voices) => {
		for (let seed = 0; seed < 6; seed++) {
			const cast = castVoices(voices, ['W', 'M', 'W'], seed);
			expect(cast.get('M')!.voice).not.toBe(cast.get('W')!.voice);
		}
	});

	it('casts by gender when voice names reveal it', () => {
		for (let seed = 0; seed < 6; seed++) {
			const cast = castVoices(chrome, ['M', 'W'], seed);
			expect(cast.get('M')!.voice.name).toBe('Google UK English Male');
			expect(cast.get('W')!.voice.name).not.toMatch(/Male$/);
		}
	});

	it('pitches a single shared voice apart by gender', () => {
		expect(castNames([zira], ['W', 'M'])).toEqual([`${zira.name}@1`, `${zira.name}@0.7`]);
	});

	it('keeps two speakers of the same gender apart on one voice', () => {
		const [w1, w2] = castVoices([zira], ['W1', 'W2'], 0).values();
		expect(w1.pitch).not.toBe(w2.pitch);
	});

	it('gives the Part 2 question and responses different voices', () => {
		const cast = castVoices(windows, [0, 1, 1, 1], 3);
		expect(cast.get(0)!.voice).not.toBe(cast.get(1)!.voice);
	});

	it('returns no casting without voices', () => {
		expect(castVoices([], ['M'], 0).size).toBe(0);
	});
});
