<script lang="ts">
	import { dayContent } from '#lib/content/index.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import ReviewEnd from '#lib/components/review/ReviewEnd.svelte';
	import ReviewList from '#lib/components/review/ReviewList.svelte';
	import { reviewScreens, type ReviewScreen } from '#lib/components/review/review-screens.js';
	import ReviewSession from '#lib/components/review/ReviewSession.svelte';
	import { scrollContentToTop } from '#lib/components/shell/content-region.js';
	import { reviewList } from '#lib/progress/review.js';
	import { progress, questionsOfDay } from '#lib/progress/store.svelte.js';

	type View =
		| { kind: 'list' }
		| { kind: 'session'; screens: ReviewScreen[] }
		| { kind: 'end'; total: number; correct: number };

	// The session lives on this screen only; leaving it or the page drops its place (U9).
	let view = $state.raw<View>({ kind: 'list' });
	const items = $derived(reviewList(progress, questionsOfDay));

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

{#if view.kind === 'session'}
	<ReviewSession
		screens={view.screens}
		onExit={backToList}
		onFinish={(score) => show({ kind: 'end', ...score })}
	/>
{:else if view.kind === 'end'}
	<ReviewEnd total={view.total} correct={view.correct} onBack={backToList} />
{:else}
	<ReviewList {items} onStart={start} />
{/if}
