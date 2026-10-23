<script lang="ts">
	import type { QuestionItem } from '#lib/content/index.js';
	import Explanation from './Explanation.svelte';
	import { partNames } from './labels';
	import ListenControls from './ListenControls.svelte';
	import OptionList from './OptionList.svelte';
	import PageTag from './PageTag.svelte';
	import Rich from './Rich.svelte';
	import { responseLines } from './spoken';
	import Verdict from './Verdict.svelte';

	// State comes in through props so the review session can show a question of any Day.
	let {
		question,
		number,
		total,
		picked,
		revealed,
		onPick
	}: {
		question: QuestionItem;
		number: number;
		total: number;
		picked: number | undefined;
		/** Whether the answer and explanation show (`isRevealed`). */
		revealed: boolean;
		onPick: (index: number) => void;
	} = $props();

	let scriptOpen = $state(false);
	const listening = $derived(question.part === 2);
	const showText = $derived(!listening || revealed || scriptOpen);
</script>

<h2><PageTag>{partNames[question.part]} · {number} / {total}</PageTag></h2>
{#if listening}
	<ListenControls
		lines={responseLines(question)}
		seed={number}
		scriptToggle={!revealed}
		bind:scriptOpen
	/>
	{#if showText}<p class="stem" lang="en">{question.script}</p>{/if}
{:else}
	<Rich
		tag="p"
		text={question.text ?? ''}
		fill={revealed && question.options[question.answer]}
		class="stem"
		lang="en"
	/>
{/if}
<OptionList
	options={question.options}
	answer={question.answer}
	notes={question.notes}
	{picked}
	{revealed}
	{showText}
	{onPick}
/>
<Verdict {question} {picked} {revealed} />
{#if revealed}<Explanation {question} />{/if}
