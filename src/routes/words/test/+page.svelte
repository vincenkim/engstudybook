<script lang="ts">
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { scrollContentToTop } from '#lib/components/shell/content-region.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import CardSession, { openCards } from '#lib/components/words/CardSession.svelte';
	import {
		gradeTest,
		newTest,
		testWords,
		type TestQuestion
	} from '#lib/components/words/word-test.js';
	import WordTestResult from '#lib/components/words/WordTestResult.svelte';
	import WordTestRun from '#lib/components/words/WordTestRun.svelte';
	import WordTestSetup, {
		rangeOf,
		type TestSetup
	} from '#lib/components/words/WordTestSetup.svelte';
	import { pdfDays, todayWordDay } from '#lib/progress/words.js';
	import { wordsRecord } from '#lib/progress/words-store.svelte.js';

	type View =
		| { kind: 'setup' }
		| { kind: 'test'; questions: TestQuestion[] }
		| ({ kind: 'result' } & ReturnType<typeof gradeTest>);

	// Week and Day start on today's word Day (R2).
	const today = todayWordDay(wordsRecord.entries, wordsRecord.lastDay, pdfDays);
	let setup = $state<TestSetup>({
		kind: 'day',
		week: Number(today[1]),
		day: Number(today[3]),
		count: 20
	});
	// The test lives on this screen only; leaving it or the page drops it (R13).
	let view = $state.raw<View>({ kind: 'setup' });
	let fromCards = $state(false);

	function show(next: View) {
		view = next;
		fromCards = false;
		scrollContentToTop();
		if (next.kind !== 'test') void focusMainHeading();
	}

	function startTest() {
		const { entries, saved } = wordsRecord;
		// Every word a learner could write, so a question takes the ones it cannot tell apart (R14).
		const candidates = [
			...testWords({ kind: 'all' }, entries, saved).words,
			...testWords({ kind: 'saved' }, entries, saved).words
		];
		const { words } = testWords(rangeOf(setup), entries, saved);
		show({ kind: 'test', questions: newTest(words, setup.count, candidates) });
	}

	function openWrongCards() {
		fromCards = true;
		openCards();
	}

	// Back from another screen restores the cards flag on a fresh page with no result to show;
	// left in place, the next grading would open cards nobody asked for (KTD6).
	onMount(() => {
		if (page.state.cards) replaceState('', {});
	});
</script>

<svelte:head><title>단어시험 · 토익 문제집</title></svelte:head>

{#if page.state.cards && view.kind === 'result'}
	<CardSession
		deck={view.wrong.map(({ card }) => card)}
		title="틀린 단어 카드"
		backLabel="결과로"
		backHref={resolve('/words/test')}
	/>
{:else if view.kind === 'test'}
	<WordTestRun
		questions={view.questions}
		onExit={() => show({ kind: 'setup' })}
		onFinish={(answers) =>
			view.kind === 'test' && show({ kind: 'result', ...gradeTest(view.questions, answers) })}
	/>
{:else if view.kind === 'result'}
	<WordTestResult
		total={view.total}
		correct={view.correct}
		wrong={view.wrong}
		{fromCards}
		onCards={openWrongCards}
		onRetry={startTest}
		onChange={() => show({ kind: 'setup' })}
	/>
{:else}
	<WordTestSetup bind:setup onStart={startTest} />
{/if}
