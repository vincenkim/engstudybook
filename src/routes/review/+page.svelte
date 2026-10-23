<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';
	import { dayContent } from '#lib/content/index.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import ReviewEnd from '#lib/components/review/ReviewEnd.svelte';
	import ReviewList, { type ReviewTab } from '#lib/components/review/ReviewList.svelte';
	import { reviewScreens, type ReviewScreen } from '#lib/components/review/review-screens.js';
	import ReviewSession from '#lib/components/review/ReviewSession.svelte';
	import {
		reviewDeckSize,
		reviewWords,
		wordTabHref
	} from '#lib/components/review/WordReviewList.svelte';
	import { scrollContentToTop } from '#lib/components/shell/content-region.js';
	import CardSession, { openCards } from '#lib/components/words/CardSession.svelte';
	import { reviewList } from '#lib/progress/review.js';
	import { progress, questionsOfDay } from '#lib/progress/store.svelte.js';
	import { currentDate, wordsRecord } from '#lib/progress/words-store.svelte.js';

	type View =
		| { kind: 'list' }
		| { kind: 'session'; screens: ReviewScreen[] }
		| { kind: 'end'; total: number; correct: number };

	// The session lives on this screen only; leaving it or the page drops its place (U9).
	let view = $state.raw<View>({ kind: 'list' });
	const items = $derived(reviewList(progress, questionsOfDay));
	const words = $derived(reviewWords(wordsRecord.entries, currentDate()));

	// The tab in the address, else the first with items: 틀린 문제 when both have some (KTD9).
	const chosen = $derived(page.url.searchParams.get('tab'));
	const tab = $derived<ReviewTab>(
		chosen === 'questions' || chosen === 'words' ? chosen : items.length ? 'questions' : 'words'
	);
	const pickTab = (next: ReviewTab) =>
		goto(`${resolve('/review')}?tab=${next}` as ResolvedPathname, { replace: true, reset: false });

	function show(next: View) {
		view = next;
		scrollContentToTop();
		void focusMainHeading();
	}

	const start = () =>
		show({ kind: 'session', screens: reviewScreens(items, (day) => dayContent(day).pages) });
	const backToList = () => show({ kind: 'list' });
</script>

<svelte:head><title>복습 · 토익 문제집</title></svelte:head>

{#if page.state.cards}
	<CardSession
		deck={words.slice(0, reviewDeckSize)}
		title="단어 복습 카드"
		backLabel="복습으로"
		backHref={wordTabHref}
	/>
{:else if view.kind === 'session'}
	<ReviewSession
		screens={view.screens}
		onExit={backToList}
		onFinish={(score) => show({ kind: 'end', ...score })}
	/>
{:else if view.kind === 'end'}
	<ReviewEnd total={view.total} correct={view.correct} onBack={backToList} />
{:else}
	<ReviewList {items} {words} {tab} onTab={pickTab} onStart={start} onCards={openCards} />
{/if}
