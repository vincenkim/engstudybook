<script lang="ts">
	import { Bookmark, BookmarkCheck } from '@lucide/svelte';
	import { tick } from 'svelte';
	import { resolve } from '$app/paths';
	import { vocabChip } from '#lib/progress/words.js';
	import { saveVocab, unsaveVocab, wordsRecord } from '#lib/progress/words-store.svelte.js';

	let {
		vocab,
		source
	}: {
		vocab: [string, string][];
		/** The question saved words come from; a set's first question (KTD14). */
		source: string;
	} = $props();

	let list: HTMLElement;

	async function press(index: number, english: string, meaning: string, on: boolean) {
		(on ? unsaveVocab : saveVocab)(english, meaning, source);
		// A word rated already turns from a toggle into a link once saved, so focus follows it.
		await tick();
		(list.children[index] as HTMLElement).focus();
	}

	const chip =
		'inline-flex min-h-11 items-center gap-1.5 rounded-lg border bg-accent px-2.5 text-left text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50';
</script>

<!-- Plain buttons and links, so the Day's keys still work while one has focus (focusKind). -->
<div bind:this={list} class="mt-1 flex flex-wrap gap-1.5">
	{#each vocab as [english, meaning], index (index)}
		{@const state = vocabChip(wordsRecord.saved, wordsRecord.entries, english, meaning)}
		{#if state === 'kept'}
			<!-- Rated: only the saved list removes it (R15), so the chip leads there. -->
			<a href={resolve('/words/saved')} class={[chip, 'border-primary']}>
				<BookmarkCheck aria-hidden="true" class="size-4 shrink-0 text-primary" />
				<span><b lang="en">{english}</b> {meaning}</span>
				<span class="sr-only">담김, 담은 단어 보기</span>
			</a>
		{:else}
			<button
				type="button"
				aria-pressed={state === 'on'}
				class={[chip, state === 'on' ? 'border-primary' : 'border-transparent']}
				onclick={() => press(index, english, meaning, state === 'on')}
			>
				{#if state === 'on'}
					<BookmarkCheck aria-hidden="true" class="size-4 shrink-0 text-primary" />
				{:else}
					<Bookmark aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
				{/if}
				<span><b lang="en">{english}</b> {meaning}</span>
				<span class="sr-only">담기</span>
			</button>
		{/if}
	{/each}
</div>
