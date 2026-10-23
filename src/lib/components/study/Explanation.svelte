<script lang="ts">
	import type { QuestionItem } from '#lib/content/index.js';
	import Rich from './Rich.svelte';
	import Translation from './Translation.svelte';
	import VocabChips from './VocabChips.svelte';

	let { question }: { question: QuestionItem } = $props();
</script>

<div class="explain">
	{#if question.ko || question.optionsKo}
		<h3 class="explain-heading">해석</h3>
		<Translation ko={question.ko} optionsKo={question.optionsKo} />
	{/if}
	<h3 class="explain-heading">해설</h3>
	<Rich tag="p" text={question.why} />
	{#if question.vocab}
		<h3 class="explain-heading">어휘</h3>
		<VocabChips vocab={question.vocab} source={question.id} />
	{/if}
</div>
