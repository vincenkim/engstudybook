<script lang="ts">
	import { Volume2 } from '@lucide/svelte';
	import type { CardWord } from './card-session';
	import { WordSpeech } from './word-speech.svelte.js';

	let {
		card,
		wordId
	}: {
		card: CardWord;
		/** The answer box is named after the word (R12). */
		wordId: string;
	} = $props();

	const wordSpeech = new WordSpeech();
	const parts = $derived([...new Set(card.lines.flatMap(({ pos }) => (pos ? [pos] : [])))]);
</script>

<!-- The 영어 → 뜻 question (KTD6): the word, its IPA, its parts of speech and how it sounds. -->
<div class="flex items-start justify-between gap-3">
	<div class="min-w-0">
		<p id={wordId} lang="en" class="text-[26px] font-bold break-words">{card.word}</p>
		{#if card.ipa}
			<p aria-hidden="true" class="text-sm text-muted-foreground">{card.ipa}</p>
		{/if}
		{#if parts.length}
			<p class="mt-2 flex gap-1.5">
				{#each parts as pos (pos)}
					<span
						class="inline-block min-w-6 rounded-md bg-muted px-1.5 text-center text-[13px] font-bold text-muted-foreground"
						>{pos}</span
					>
				{/each}
			</p>
		{/if}
	</div>
	<!-- Pressing it leaves focus in the answer box, so the phone keyboard stays open (R6). -->
	<button
		type="button"
		aria-label="발음 듣기"
		class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-primary hover:bg-muted"
		onpointerdown={(event) => event.preventDefault()}
		onclick={() => wordSpeech.speak(card.word)}
	>
		<Volume2 aria-hidden="true" class="size-[22px]" />
	</button>
</div>
<p role="status" class="text-sm text-muted-foreground not-empty:mt-2">{wordSpeech.notice}</p>
