<script lang="ts">
	import { untrack } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { wordsOf } from '#lib/content/words.js';
	import { pdfCard } from '#lib/components/words/card-session.js';
	import CardSession, { openCards } from '#lib/components/words/CardSession.svelte';
	import WordListView from '#lib/components/words/WordListView.svelte';
	import { deckOf } from '#lib/progress/words.js';
	import { setLastWordDay, wordsRecord } from '#lib/progress/words-store.svelte.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const words = $derived(wordsOf(data.key));
	const rows = $derived(words.map((word) => ({ ...pdfCard(word), id: word.id, no: word.no })));
	const listHref = $derived(resolve('/words/[day]', { day: data.key }));
	const deck = $derived(deckOf(wordsRecord.entries, rows));

	// The wordbook opens this Day's Week next time (KTD8).
	$effect(() => {
		const key = data.key;
		untrack(() => setLastWordDay(key));
	});

	// A link from `dayCardsHref`: the list without the marker replaces it in history, then the cards
	// open over the list, so back shows the list before the screen that linked here (KTD9).
	async function openFromLink() {
		await goto(listHref, { replace: true });
		if (deck.length) await openCards();
	}

	$effect(() => {
		if (page.url.searchParams.has('cards')) untrack(openFromLink);
	});
</script>

<svelte:head><title>Week {data.week} · Day {data.day} 단어 · 토익 문제집</title></svelte:head>

{#if page.state.cards}
	<CardSession
		{deck}
		title="Week {data.week} · Day {data.day} 카드"
		backLabel="목록으로"
		backHref={listHref}
	/>
{:else}
	<WordListView title="Week {data.week} · Day {data.day}" words={rows} onCards={openCards} />
{/if}
