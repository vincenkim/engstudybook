<script lang="ts">
	import { Check, ChevronDown, X } from '@lucide/svelte';
	import { tick } from 'svelte';
	import type { QuestionItem } from '#lib/content/index.js';
	import type { QuestionState } from '#lib/progress/attempt.js';
	import Explanation from './Explanation.svelte';
	import { letters } from './labels';
	import OptionList from './OptionList.svelte';
	import { questionStateNames } from './question-states';
	import Verdict from './Verdict.svelte';

	let {
		question,
		number,
		blank,
		picked,
		revealed,
		status,
		current,
		besidePassage,
		onPick,
		onOpen
	}: {
		question: QuestionItem;
		/** Day-wide question number. */
		number: number;
		/** Part 6: the numbered blank of the passage the question fills. */
		blank?: number;
		picked: number | undefined;
		/** Whether the answer and explanation show (`isRevealed`). */
		revealed: boolean;
		/** From `questionState` (KTD7), so an exam not graded yet folds to 'answered' only. */
		status: QuestionState;
		/** The question the keys act on (KTD4). */
		current: boolean;
		/**
		 * Part 6·7 (R7): below 1024px only the current question shows; beside the passage the
		 * answered ones fold to one line.
		 */
		besidePassage: boolean;
		onPick: (index: number) => void;
		/** Makes this the current question, which unfolds it. */
		onOpen: () => void;
	} = $props();

	let heading = $state<HTMLElement>();
	const folded = $derived(besidePassage && !current && status !== 'unanswered');
	const text = $derived(question.text || `빈칸 (${blank})`);
	const statusTone: Record<QuestionState, string> = {
		correct: 'text-ok',
		wrong: 'text-bad',
		answered: 'text-muted-foreground',
		unanswered: 'text-muted-foreground'
	};

	async function unfold() {
		onOpen();
		await tick();
		heading?.focus();
	}
</script>

<section
	aria-label="{number}번"
	aria-current={current || undefined}
	class={[
		'rounded-2xl border bg-card px-4 py-3.5',
		// Room for the pinned top bar when scrolled into view; below 1024px also for the pinned
		// passage and the '문제 n / m' line above the question.
		besidePassage
			? 'scroll-mt-[calc(var(--pin-top,0px)+40dvh+3rem)] lg:scroll-mt-[calc(var(--pin-top,0px)+1.5rem)]'
			: 'scroll-mt-[calc(var(--pin-top,0px)+1rem)]',
		besidePassage && !current && 'max-lg:hidden',
		current &&
			(besidePassage ? 'lg:border-brand lg:ring-1 lg:ring-brand' : 'border-brand ring-1 ring-brand')
	]}
>
	{#if folded}
		<button
			type="button"
			class="flex min-h-11 w-full items-center gap-2 text-left"
			aria-expanded="false"
			onclick={unfold}
		>
			<span class="shrink-0 text-[13px] font-bold text-muted-foreground">{number}번</span>
			<span
				class={[
					'inline-flex shrink-0 items-center gap-1 text-[13px] font-bold',
					statusTone[status]
				]}
			>
				{#if status === 'correct'}
					<Check aria-hidden="true" class="size-4" />
				{:else if status === 'wrong'}
					<X aria-hidden="true" class="size-4" />
				{/if}
				{questionStateNames[status]}
			</span>
			{#if picked !== undefined}
				<span class="shrink-0 text-[13px] text-muted-foreground">({letters[picked]})</span>
			{/if}
			<span class="min-w-0 flex-1 truncate text-sm" lang={question.text ? 'en' : undefined}>
				{text}
			</span>
			<ChevronDown aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
		</button>
	{:else}
		<h3
			bind:this={heading}
			tabindex="-1"
			class={[
				'text-[13px] font-bold outline-none',
				current ? 'text-brand' : 'text-muted-foreground'
			]}
		>
			{current && status === 'unanswered' ? `${number}번 · 지금 풀 문제` : `${number}번`}
		</h3>
		<p class="mt-1.5 mb-3 text-lg/[1.6]" lang={question.text ? 'en' : undefined}>{text}</p>
		<OptionList
			options={question.options}
			answer={question.answer}
			notes={question.notes}
			{picked}
			{revealed}
			showText
			large={false}
			{onPick}
		/>
		<Verdict {question} {picked} {revealed} />
		{#if revealed}<Explanation {question} />{/if}
	{/if}
</section>
