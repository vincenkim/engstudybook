import { CircleCheck, CircleDashed, CircleQuestionMark, Sprout } from '@lucide/svelte';
import type { WordStatus } from '#lib/content/words.js';

/**
 * How each word status shows (KTD13): a label and an icon, so color is never the only cue,
 * and its tokens for a bar segment and for a chip.
 */
export const wordStatusLabels = {
	unseen: {
		label: '안 봄',
		icon: CircleDashed,
		bar: 'bg-word-unseen',
		chip: 'bg-word-unseen-soft text-word-unseen-fg'
	},
	new: {
		label: '처음',
		icon: Sprout,
		bar: 'bg-word-new',
		chip: 'bg-word-new-soft text-word-new-fg'
	},
	unsure: {
		label: '애매',
		icon: CircleQuestionMark,
		bar: 'bg-word-unsure',
		chip: 'bg-word-unsure-soft text-word-unsure-fg'
	},
	known: {
		label: '완벽',
		icon: CircleCheck,
		bar: 'bg-word-known',
		chip: 'bg-word-known-soft text-word-known-fg'
	}
} satisfies Record<WordStatus, object>;

/** Bars and their legends run from 처음 to 완벽, with words never seen last like an empty track. */
export const barOrder: WordStatus[] = ['new', 'unsure', 'known', 'unseen'];
