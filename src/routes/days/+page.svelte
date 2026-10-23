<script lang="ts">
	import { curriculum, dayNumbers, questionsPerDay } from '#lib/content/index.js';
	import PhaseSection from '#lib/components/workbook/PhaseSection.svelte';
	import { resumeDay } from '#lib/progress/attempt.js';
	import { progress } from '#lib/progress/store.svelte.js';

	// The phase of the day to continue starts open; after that each phase keeps the learner's choice.
	const current = resumeDay(progress);
	const open = $state(curriculum.map((phase) => phase.days.some(({ day }) => day === current)));
</script>

<svelte:head><title>문제집 · 토익 문제집</title></svelte:head>

<main class="mx-auto w-full max-w-[760px] px-4 pt-6 pb-12">
	<h1 class="text-[28px] font-bold tracking-[-0.5px]">문제집</h1>
	<p class="mt-1 text-sm text-muted-foreground">
		{dayNumbers.length}일 · 하루 {questionsPerDay}문항 · 개념부터 실전까지
	</p>
	<div class="mt-4 grid gap-3">
		{#each curriculum as phase, index (phase.phase)}
			<PhaseSection {phase} {current} bind:open={open[index]} />
		{/each}
	</div>
</main>
