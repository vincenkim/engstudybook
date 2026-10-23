<script lang="ts">
	import { untrack } from 'svelte';
	import { wordsOf } from '#lib/content/words.js';
	import WordList from '#lib/components/words/WordList.svelte';
	import { setLastWordDay } from '#lib/progress/words-store.svelte.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const words = $derived(wordsOf(data.key));

	// The wordbook opens this Day's Week next time (KTD8).
	$effect(() => {
		const key = data.key;
		untrack(() => setLastWordDay(key));
	});
</script>

<svelte:head><title>Week {data.week} · Day {data.day} 단어 · 토익 문제집</title></svelte:head>

<WordList week={data.week} day={data.day} {words} />
