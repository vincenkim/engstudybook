<script lang="ts" module>
	import type { CardWord } from './card-session';

	/** What a row covers until it is pressed: nothing, the meanings or the word. */
	export type CoverMode = 'none' | 'meaning' | 'word';

	/** A row of a word list: a PDF word, or a saved word, which has no IPA or parts of speech. */
	export interface ListWord extends CardWord {
		/** The PDF word's id, or a saved word's normalized English. */
		id: string;
		/** The PDF number, or a saved word's place in its list. */
		no: number;
		/** A line under the meanings, such as the PDF Days a saved word is on too. */
		note?: string;
	}
</script>

<script lang="ts">
	import { Star, Volume2 } from '@lucide/svelte';
	import { tick } from 'svelte';
	import { starOf, statusOf } from '#lib/progress/words.js';
	import { setStatusFromList, toggleStar, wordsRecord } from '#lib/progress/words-store.svelte.js';
	import StatusChip from './StatusChip.svelte';
	import WordLines from './WordLines.svelte';

	let {
		word,
		mode,
		revealed,
		onReveal,
		onSpeak,
		onRemove
	}: {
		word: ListWord;
		mode: CoverMode;
		revealed: boolean;
		onReveal: () => void;
		onSpeak: () => void;
		/** Saved words only: takes the word off its list. */
		onRemove?: () => void;
	} = $props();

	const status = $derived(statusOf(wordsRecord.entries, word));
	const starred = $derived(starOf(wordsRecord.entries, word));
	const showWord = $derived(mode !== 'word' || revealed);
	const showMeaning = $derived(mode !== 'meaning' || revealed);

	let wordArea = $state<HTMLElement>();
	let meaningArea = $state<HTMLElement>();

	// The pressed cover disappears, so focus moves to what it uncovered.
	async function reveal(area: () => HTMLElement | undefined) {
		onReveal();
		await tick();
		area()?.focus();
	}

	const cover =
		'mt-1 flex min-h-11 w-full items-center rounded-lg border border-dashed border-muted-foreground/50 bg-background px-3 text-left text-[13px] text-muted-foreground first:mt-0 hover:border-primary hover:text-primary';
	const area = 'rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50';
	const tool =
		'inline-flex size-11 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground';
</script>

<li class="flex gap-2.5 border-t py-3 pr-2 pl-3.5 first:border-t-0">
	<span class="w-6 shrink-0 pt-1 text-right text-[13px] text-muted-foreground">{word.no}</span>
	<div class="min-w-0 flex-1">
		{#if showWord}
			<div
				bind:this={wordArea}
				tabindex="-1"
				class={['flex flex-wrap items-baseline gap-x-2', area]}
			>
				<span lang="en" class="text-[17px] font-bold">{word.word}</span>
				{#if word.ipa}<span class="text-[13px] text-muted-foreground">{word.ipa}</span>{/if}
			</div>
		{:else}
			<button type="button" class={cover} onclick={() => reveal(() => wordArea)}>
				<span class="sr-only">{word.no}번</span> 단어 보기
			</button>
		{/if}
		{#if showMeaning}
			<div bind:this={meaningArea} tabindex="-1" class={['mt-1 text-[15px]/[1.6]', area]}>
				<WordLines lines={word.lines} size="sm" />
			</div>
		{:else}
			<button type="button" class={cover} onclick={() => reveal(() => meaningArea)}>
				<span class="sr-only">{word.no}번</span> 뜻 보기
			</button>
		{/if}
		{#if word.note}<p class="mt-1 text-[13px] text-muted-foreground">{word.note}</p>{/if}
		{#if onRemove}
			<button
				type="button"
				data-remove
				class="-ml-2 inline-flex min-h-11 items-center rounded-lg px-2 text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground"
				onclick={onRemove}
			>
				<span class="sr-only">{word.no}번</span> 빼기
			</button>
		{/if}
	</div>
	<div class="flex shrink-0 flex-col items-end">
		<StatusChip {status} onclick={() => setStatusFromList(word)} />
		<div class="flex">
			<button
				type="button"
				class={tool}
				aria-label="{word.no}번 별표"
				aria-pressed={starred}
				onclick={() => toggleStar(word)}
			>
				<Star aria-hidden="true" class={['size-5', starred && 'fill-primary text-primary']} />
			</button>
			<button type="button" class={tool} aria-label="{word.no}번 발음 듣기" onclick={onSpeak}>
				<Volume2 aria-hidden="true" class="size-5" />
			</button>
		</div>
	</div>
</li>
