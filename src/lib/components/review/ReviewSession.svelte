<script lang="ts">
	import { X } from '@lucide/svelte';
	import {
		dayContent,
		questionsOf,
		questionsOnPage,
		type QuestionItem
	} from '#lib/content/index.js';
	import { scrollContentToTop } from '#lib/components/shell/content-region.js';
	import ActionBar from '#lib/components/study/ActionBar.svelte';
	import { focusKind } from '#lib/components/study/focus-kind.js';
	import { listeningOnScreen, toggleListening } from '#lib/components/study/ListenControls.svelte';
	import QuestionPage from '#lib/components/study/QuestionPage.svelte';
	import SetPage from '#lib/components/study/SetPage.svelte';
	import { keyAction, type KeyAction } from '#lib/keyboard.js';
	import { isRevealed, questionState } from '#lib/progress/attempt.js';
	import { answerInReview, dayProgress, progress } from '#lib/progress/store.svelte.js';
	import { speech } from '#lib/speech/player.svelte.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import { setOf, type ReviewScreen } from './review-screens';

	let {
		screens,
		onExit,
		onFinish
	}: {
		/** Fixed when the session starts, so a question leaving the list never shifts the order. */
		screens: ReviewScreen[];
		onExit: () => void;
		/** Gets how many of the session's questions were answered right. */
		onFinish: (score: { total: number; correct: number }) => void;
	} = $props();

	/** Answers given in this session; a Day's earlier wrong answer stays hidden until answered. */
	const answered = $state<Record<string, number>>({});
	let screenIndex = $state(0);
	/** The set question moved to or answered last; cleared on every screen change. */
	let stepped = $state<number | null>(null);

	const screen = $derived(screens[screenIndex]);
	const items = $derived(screen.items);
	const dayState = $derived(dayProgress(screen.day));
	const total = $derived(questionsOf(screen.day).length);
	const count = $derived(screens.reduce((sum, s) => sum + s.items.length, 0));
	/** The current question (KTD4): the one moved to, else the first unanswered, else the last. */
	const current = $derived.by(() => {
		if (stepped !== null) return stepped;
		const unanswered = items.findIndex((item) => !(item.question.id in answered));
		return unanswered === -1 ? items.length - 1 : unanswered;
	});
	const position = $derived(
		screens.slice(0, screenIndex).reduce((sum, s) => sum + s.items.length, 0) + current
	);

	const setAnswers = $derived(
		items.map(({ question }) => {
			const picked = answered[question.id];
			const revealed = picked !== undefined;
			const status = revealed ? questionState(dayState, progress.settings, question) : 'unanswered';
			return { picked, revealed, status };
		})
	);
	/** Set questions left off the screen must be revealed in their Day before the translations open. */
	const othersRevealed = $derived.by(() => {
		const source = screen.set && setOf(dayContent(screen.day).pages, items[0].question.id);
		if (!source) return true;
		const shown = items.map((item) => item.question.id);
		return questionsOnPage(source).every(
			(question) => shown.includes(question.id) || isRevealed(dayState, progress.settings, question)
		);
	});

	function pick(question: QuestionItem, choice: number) {
		if (question.id in answered) return;
		// The answered set question stays current, so its explanation stays on screen.
		if (screen.set) stepped = items.findIndex((item) => item.question.id === question.id);
		if (!answerInReview(screen.day, question, choice)) return;
		answered[question.id] = choice;
		// Part 2 answers show the script, so stop reading the options aloud.
		if (question.part === 2) speech.stop();
	}

	/** Steps through the questions of a set screen, then on to the next screen or the summary. */
	function move(step: -1 | 1) {
		const target = current + step;
		if (target >= 0 && target < items.length) {
			stepped = target;
			return;
		}
		const next = screenIndex + step;
		if (next < 0) return;
		if (next === screens.length) {
			const right = screens
				.flatMap((s) => s.items)
				.filter(({ question }) => answered[question.id] === question.answer);
			return onFinish({ total: count, correct: right.length });
		}
		screenIndex = next;
		stepped = null;
		scrollContentToTop();
		void focusMainHeading();
	}

	function run(action: KeyAction) {
		switch (action.type) {
			case 'page':
				return move(action.step);
			case 'pick':
				return pick(items[current].question, action.choice);
			case 'play':
				return toggleListening();
		}
	}

	function onkeydown(event: KeyboardEvent) {
		const action = keyAction(event, {
			sheetOpen: false,
			focus: focusKind(document.activeElement),
			page: { kind: 'review' },
			listening: listeningOnScreen(),
			sideBySide: false
		});
		if (!action) return;
		event.preventDefault();
		run(action);
	}
</script>

<svelte:window {onkeydown} />

<header class="sticky top-0 z-10 border-b bg-card pt-[env(safe-area-inset-top)]">
	<div class="flex items-center gap-2 px-1.5 py-1 md:px-3">
		<button
			type="button"
			class="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-xl px-2.5 text-sm hover:bg-muted"
			onclick={onExit}
		>
			<X aria-hidden="true" class="size-5" />
			나가기
		</button>
		<div class="min-w-0 flex-1">
			<h1 class="truncate text-[15px] font-bold md:text-base">틀린 문제 다시 풀기</h1>
			<p class="text-xs text-muted-foreground">Day {screen.day} · {position + 1} / {count}</p>
		</div>
	</div>
</header>

<main
	class={[
		'mx-auto w-full max-w-[760px] px-4 pt-6 pb-[calc(110px+env(safe-area-inset-bottom))] [&_h2]:outline-none',
		// Part 6·7 sets put the passage beside the questions from 1024px (KTD12).
		screen.set && screen.set.part >= 6 && 'lg:max-w-[1160px]'
	]}
>
	{#key screen}
		{#if screen.set}
			<SetPage
				page={screen.set}
				first={screen.first}
				numbers={items.map((item) => item.number)}
				{total}
				answers={setAnswers}
				{othersRevealed}
				{current}
				onCurrent={(index) => (stepped = index)}
				onPick={pick}
			/>
		{:else}
			{@const { question, number } = items[0]}
			<!-- The Day number seeds the voices, so the question sounds as it did in its Day (KTD16). -->
			<QuestionPage
				{question}
				{number}
				{total}
				picked={answered[question.id]}
				revealed={question.id in answered}
				onPick={(choice) => pick(question, choice)}
			/>
		{/if}
	{/key}
</main>

<ActionBar
	onPrev={position > 0 ? () => move(-1) : undefined}
	onNext={() => move(1)}
	nextLabel={position === count - 1 ? '마치기' : '다음'}
	aboveTabs
/>
