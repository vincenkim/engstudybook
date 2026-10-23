<script lang="ts">
	import type { Word } from '#lib/content/words.js';
	import { pdfCard } from './card-session';
	import WordListView from './WordListView.svelte';

	let {
		week,
		day,
		words,
		onCards
	}: { week: number; day: number; words: Word[]; onCards: () => void } = $props();

	const rows = $derived(words.map((word) => ({ ...pdfCard(word), id: word.id, no: word.no })));
</script>

<WordListView title="Week {week} · Day {day}" words={rows} {onCards} />
