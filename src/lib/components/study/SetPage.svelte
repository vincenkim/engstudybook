<script lang="ts">
	import { questionsOnPage, type QuestionItem, type SetPage } from '#lib/content/index.js';
	import { contentRegionId } from '#lib/components/shell/content-region.js';
	import type { QuestionState } from '#lib/progress/attempt.js';
	import DataTable from './DataTable.svelte';
	import { partNames } from './labels';
	import ListenControls from './ListenControls.svelte';
	import PageTag from './PageTag.svelte';
	import PassageView from './PassageView.svelte';
	import ScriptView from './ScriptView.svelte';
	import SetQuestion from './SetQuestion.svelte';
	import { scriptLines } from './spoken';
	import VocabChips from './VocabChips.svelte';

	// State comes in through props so the review session can show a set of any Day.
	let {
		page,
		first,
		numbers,
		total,
		answers,
		othersRevealed = true,
		current,
		onCurrent,
		onPick
	}: {
		page: SetPage;
		/** Day-wide number of the set's first question, which also seeds the voices (KTD16). */
		first: number;
		/** Day-wide numbers of the questions on the page, when a review leaves some out. */
		numbers?: number[];
		total: number;
		/** Each question's answer, in page order; `status` comes from `questionState` (KTD7). */
		answers: { picked: number | undefined; revealed: boolean; status: QuestionState }[];
		/** Whether the set's questions a review leaves off the page are revealed too. */
		othersRevealed?: boolean;
		/** Index of the current question (KTD4), which the keys act on. */
		current: number;
		onCurrent: (index: number) => void;
		onPick: (question: QuestionItem, index: number) => void;
	} = $props();

	let scriptOpen = $state(false);
	let root: HTMLElement;
	const questions = $derived(questionsOnPage(page));
	const numbered = $derived(numbers ?? questions.map((_, index) => first + index));
	/** Part 6: the passage blank of the question at the index, counted from the set's first. */
	const blankOf = (index: number) => numbered[index] - first + 1;
	// The translations hold the answers, so they open once every question of the set is revealed,
	// those left off the page included (KTD8).
	const reviewed = $derived(othersRevealed && answers.every((answer) => answer.revealed));
	// Narrowed here: Svelte templates lose narrowing of the `page` prop between branches.
	const listening = $derived(page.part === 3 || page.part === 4 ? page : null);
	const passages = $derived(page.part === 6 || page.part === 7 ? page.passages : []);
	const fills = $derived(
		page.part === 6
			? Object.fromEntries(
					questions.map(
						(q, index) => [blankOf(index), answers[index].revealed && q.options[q.answer]] as const
					)
				)
			: undefined
	);
	// Numbers running on read as a range, others one by one (1, 3).
	const tag = $derived.by(() => {
		const runsOn = numbered.every((number, index) => number === numbered[0] + index);
		const shown =
			runsOn && numbered.length > 1 ? `${numbered[0]}–${numbered.at(-1)}` : numbered.join(', ');
		return `${partNames[page.part]} · ${shown} / ${total}`;
	});

	/** Sets --pin-top to the height of the page's sticky top bar, under which the passage pins. */
	function pinUnderTopBar(node: HTMLElement) {
		const bar = document.getElementById(contentRegionId)?.querySelector('header');
		if (!bar) return;
		const observer = new ResizeObserver(() =>
			node.style.setProperty('--pin-top', `${bar.offsetHeight}px`)
		);
		observer.observe(bar);
		return () => observer.disconnect();
	}

	// A question moved to by key or bar comes into view below whatever is pinned above it; one
	// made current by a click is in view already, so the page does not jump under the pointer.
	let lastCurrent: number | undefined;
	let clicked: number | undefined;
	$effect(() => {
		const card = root.querySelector<HTMLElement>('section[aria-current]');
		if (lastCurrent !== undefined && lastCurrent !== current && clicked !== current && card) {
			const { top } = card.getBoundingClientRect();
			const covered = parseFloat(getComputedStyle(card).scrollMarginTop);
			// 160px: the action bar and a line or two above it.
			if (top < covered || top > innerHeight - 160) card.scrollIntoView({ block: 'start' });
		}
		lastCurrent = current;
		clicked = undefined;
	});

	function byClick(index: number, action: () => void) {
		clicked = index;
		action();
	}
</script>

{#snippet questionList(besidePassage: boolean)}
	<div class="grid gap-3">
		{#each questions as question, index (question.id)}
			<SetQuestion
				{question}
				number={numbered[index]}
				blank={page.part === 6 ? blankOf(index) : undefined}
				{...answers[index]}
				current={index === current}
				{besidePassage}
				onPick={(choice) => byClick(index, () => onPick(question, choice))}
				onOpen={() => byClick(index, () => onCurrent(index))}
			/>
		{/each}
	</div>
{/snippet}

{#snippet review()}
	{#if reviewed}
		<div class="explain mt-[26px]">
			{#if listening}
				<h3 class="explain-heading">스크립트와 해석</h3>
				<ScriptView script={listening.script} scriptKo={listening.scriptKo} plain />
			{:else}
				<h3 class="explain-heading">지문 해석</h3>
				{#each passages.flatMap((passage) => passage.ko) as text, index (index)}
					<p>{text}</p>
				{/each}
			{/if}
			<h3 class="explain-heading">어휘</h3>
			<VocabChips vocab={page.vocab} />
		</div>
	{/if}
{/snippet}

<div bind:this={root} {@attach pinUnderTopBar}>
	{#if listening}
		<!-- Part 3·4: every question on one screen, read while listening (R7). -->
		<h2><PageTag>{tag}</PageTag></h2>
		<p class="my-3 text-sm text-muted-foreground">{listening.label}</p>
		<ListenControls
			lines={scriptLines(listening.script)}
			seed={first}
			scriptToggle={!reviewed}
			bind:scriptOpen
		/>
		{#if scriptOpen && !reviewed}<ScriptView script={listening.script} />{/if}
		{#if listening.graphic}
			<div class="passage">
				{#if listening.graphic.title}
					<h3 class="mt-1 mb-2 font-bold" lang="en">{listening.graphic.title}</h3>
				{/if}
				<DataTable table={listening.graphic} class="my-2" />
			</div>
		{/if}
		{@render questionList(false)}
		{@render review()}
	{:else}
		<div class="lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-5">
			<PassageView {passages} {fills} blank={page.part === 6 ? blankOf(current) : undefined} />
			<div class="max-lg:mt-4">
				<h2><PageTag>{tag}</PageTag></h2>
				<p class="mb-2 text-[13px] font-bold text-muted-foreground lg:hidden" aria-live="polite">
					문제 {current + 1} / {questions.length}
				</p>
				{@render questionList(true)}
				{@render review()}
			</div>
		</div>
	{/if}
</div>
