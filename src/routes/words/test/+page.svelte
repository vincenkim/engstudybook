<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { replaceState } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { scrollContentToTop } from '#lib/components/shell/content-region.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import CardSession, { openCards } from '#lib/components/words/CardSession.svelte';
	import {
		gradeTest,
		newMeaningTest,
		newTest,
		testWords,
		withOverrides,
		type TestQuestion
	} from '#lib/components/words/word-test.js';
	import WordTestResult from '#lib/components/words/WordTestResult.svelte';
	import WordTestRun from '#lib/components/words/WordTestRun.svelte';
	import WordTestSetup, {
		rangeOf,
		type TestSetup
	} from '#lib/components/words/WordTestSetup.svelte';
	import { pdfDays, todayWordDay } from '#lib/progress/words.js';
	import {
		recordTestResults,
		wordsRecord,
		type CardDirection
	} from '#lib/progress/words-store.svelte.js';

	type View =
		| { kind: 'setup' }
		| { kind: 'test'; questions: TestQuestion[]; direction: CardDirection }
		| ({ kind: 'result'; direction: CardDirection } & ReturnType<typeof gradeTest>);

	// Week and Day start on today's word Day (R2).
	const todayKey = todayWordDay(wordsRecord.entries, wordsRecord.lastDay, pdfDays);
	const today = pdfDays.find(({ key }) => key === todayKey)!;
	// The direction starts on 뜻 → 영어 each time and is not saved (R1).
	let setup = $state<TestSetup>({
		direction: 'ko-en',
		kind: 'day',
		week: today.week,
		day: today.day,
		count: 20
	});
	// The test lives on this screen only; leaving it or the page drops it (R13).
	let view = $state.raw<View>({ kind: 'setup' });
	let fromCards = $state(false);
	// The answers marked right live here, not in the result, which the cards take off screen (KTD7).
	const marked = new SvelteSet<string>();
	const scored = $derived(view.kind === 'result' ? withOverrides(view, marked) : undefined);

	function show(next: View) {
		view = next;
		fromCards = false;
		marked.clear();
		scrollContentToTop();
		if (next.kind !== 'test') void focusMainHeading();
	}

	function startTest() {
		const { entries, saved } = wordsRecord;
		const { direction, count } = setup;
		// Every word a learner could meet: 뜻 → 영어 takes the ones it cannot tell apart (R14), and
		// 영어 → 뜻 every meaning of the record (R8).
		const candidates = [
			...testWords({ kind: 'all' }, entries, saved, direction).words,
			...testWords({ kind: 'saved' }, entries, saved, direction).words
		];
		const { words } = testWords(rangeOf(setup), entries, saved, direction);
		// A retake finds the range empty once its cards turned the last stars off: setup says why.
		if (!words.length) return show({ kind: 'setup' });
		const draw = direction === 'en-ko' ? newMeaningTest : newTest;
		show({ kind: 'test', questions: draw(words, count, candidates), direction });
	}

	// Each word keeps its last result for the word list; a mark changes it again (R1, R2).
	function grade(questions: TestQuestion[], answers: string[], direction: CardDirection) {
		const result = gradeTest(questions, answers, direction);
		const wrong = new Set(result.wrong.map(({ card }) => card.key));
		recordTestResults(
			questions.map(({ card }) => ({ key: card.key, passed: !wrong.has(card.key) }))
		);
		show({ kind: 'result', direction, ...result });
	}

	function mark(key: string) {
		if (marked.has(key)) marked.delete(key);
		else marked.add(key);
		recordTestResults([{ key, passed: marked.has(key) }]);
	}

	function openWrongCards() {
		fromCards = true;
		openCards();
	}

	// Back from another screen restores the cards flag on a fresh page with no result to show;
	// left in place, the next grading would open cards nobody asked for (KTD6). Forward restores it
	// on this page too, so only cards this result opened are shown.
	onMount(() => {
		if (page.state.cards) replaceState('', {});
	});
</script>

<svelte:head><title>단어시험 · 토익 문제집</title></svelte:head>

{#if page.state.cards && view.kind === 'result' && scored && fromCards}
	<CardSession
		deck={scored.wrong.map(({ card }) => card)}
		title="틀린 단어 카드"
		backLabel="결과로"
		backHref={resolve('/words/test')}
	/>
{:else if view.kind === 'test'}
	{@const { questions, direction } = view}
	<WordTestRun
		{questions}
		{direction}
		onExit={() => show({ kind: 'setup' })}
		onFinish={(answers) => grade(questions, answers, direction)}
	/>
{:else if view.kind === 'result' && scored}
	<WordTestResult
		direction={view.direction}
		total={view.total}
		correct={scored.correct}
		wrong={view.wrong}
		stillWrong={scored.wrong.length}
		{marked}
		{fromCards}
		onMark={mark}
		onCards={openWrongCards}
		onRetry={startTest}
		onChange={() => show({ kind: 'setup' })}
	/>
{:else}
	<WordTestSetup bind:setup onStart={startTest} />
{/if}
