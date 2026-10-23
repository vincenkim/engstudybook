import type { Speaker } from '#lib/content/index.js';

export interface VoiceLike {
	name: string;
	lang: string;
}

/** Part 2 lines use 0 (question) and 1 (responses); sets use M/W speaker codes. */
export type LineSpeaker = number | Speaker;

interface Casting<V> {
	voice: V;
	pitch: number;
}

const childVoices = /\b(Ana|Maisie)\b/;
// macOS/iOS novelty and robotic voices sound nothing like the exam.
const noveltyVoices =
	/\b(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Eddy|Flo|Fred|Good News|Grandma|Grandpa|Jester|Junior|Kathy|Organ|Ralph|Reed|Rocko|Sandy|Shelley|Superstar|Trinoids|Whisper|Wobble|Zarvox)\b/;
// Names from Edge natural voices, Windows desktop voices, Chrome's Google voices and Apple voices.
const maleVoices =
	/\b(Male|Aaron|Alex|Andrew|Arthur|Brian|Christopher|Daniel|David|Eric|George|Gordon|Guy|James|Lee|Liam|Mark|Oliver|Richard|Roger|Ryan|Steffan|Thomas|Tom|William)\b/;
const examAccents = /^en[-_](US|GB|AU|CA)/i;

const isMaleVoice = (voice: VoiceLike) => maleVoices.test(voice.name);

/** Picks the voices that sound like the exam: US/GB/AU/CA adults, natural voices when available. */
export function examVoices<V extends VoiceLike>(voices: V[]): V[] {
	const english = voices.filter((v) => /^en[-_]/i.test(v.lang) && !noveltyVoices.test(v.name));
	const exam = english.filter((v) => examAccents.test(v.lang) && !childVoices.test(v.name));
	const pool = exam.length ? exam : english;
	const natural = pool.filter((v) => /natural/i.test(v.name));
	return natural.length >= 2 ? natural : pool;
}

const rotate = <T>(list: T[], seed: number) => {
	const start = list.length ? seed % list.length : 0;
	return [...list.slice(start), ...list.slice(0, start)];
};

// When speakers must share a voice, pitch keeps them apart.
const sharedVoicePitch = [1, 0.85, 1.15, 0.75, 1.25];

/**
 * Gives every distinct speaker its own voice, preferring the speaker's gender. When the device has
 * too few voices, a wrong-gender voice is pitched toward the speaker's gender and speakers sharing
 * a voice get different pitches.
 */
export function castVoices<V extends VoiceLike>(
	voices: V[],
	speakers: LineSpeaker[],
	seed: number
): Map<LineSpeaker, Casting<V>> {
	const cast = new Map<LineSpeaker, Casting<V>>();
	if (!voices.length) return cast;
	const male = voices.filter(isMaleVoice);
	const female = voices.filter((v) => !isMaleVoice(v));
	const used = new Set<V>();
	const sharing = new Map<string, number>();
	for (const speaker of new Set(speakers)) {
		const gender = typeof speaker === 'number' ? null : speaker[0];
		const preferred = gender === 'M' ? male : gender === 'W' ? female : voices;
		const candidates = [...rotate(preferred, seed), ...rotate(voices, seed)];
		const voice = candidates.find((v) => !used.has(v)) ?? candidates[0];
		used.add(voice);
		const voiceIsMale = isMaleVoice(voice);
		const base = gender === 'M' && !voiceIsMale ? 0.7 : gender === 'W' && voiceIsMale ? 1.3 : 1;
		const key = `${voices.indexOf(voice)}:${base}`;
		const shared = sharing.get(key) ?? 0;
		sharing.set(key, shared + 1);
		cast.set(speaker, { voice, pitch: base * sharedVoicePitch[shared % sharedVoicePitch.length] });
	}
	return cast;
}
