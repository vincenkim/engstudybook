import type { Speaker } from '#lib/content/index.js';
import type { SpokenLine } from '#lib/speech/player.svelte.js';
import { letters } from './labels';

/** Part 2: the question in one voice, then "A. …", "B. …", "C. …" in another. */
export const responseLines = (item: { script?: string; options: string[] }): SpokenLine[] => [
	{ text: item.script ?? '', speaker: 0 },
	...item.options.map((option, index) => ({ text: `${letters[index]}. ${option}`, speaker: 1 }))
];

export const scriptLines = (script: [Speaker, string][]): SpokenLine[] =>
	script.map(([speaker, text]) => ({ text, speaker }));
