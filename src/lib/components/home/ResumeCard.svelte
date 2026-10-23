<script lang="ts">
	import { resolve } from '$app/paths';
	import { dayTopics, questionsOf } from '#lib/content/index.js';
	import { questionDotStyles, questionStateNames } from '#lib/components/study/question-states.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { questionState, resumeDay, statusText } from '#lib/progress/attempt.js';
	import { dayProgress, progress } from '#lib/progress/store.svelte.js';
	import { cn } from '#lib/utils.js';

	const day = $derived(resumeDay(progress));
	const states = $derived(
		day === null
			? []
			: questionsOf(day).map((q) => questionState(dayProgress(day), progress.settings, q))
	);
	const dotsLabel = $derived.by(() => {
		const counts = Object.entries(questionStateNames).flatMap(([state, name]) => {
			const count = states.filter((s) => s === state).length;
			return count ? [`${name} ${count}`] : [];
		});
		return `${states.length}문항 중 ${counts.join(', ')}`;
	});
</script>

<section aria-labelledby="resume-title" class="rounded-2xl border bg-card p-5">
	{#if day === null}
		<h2 id="resume-title" class="text-xl font-bold">모두 완료</h2>
		<p class="mt-1 text-sm text-muted-foreground">모든 Day에 첫 점수가 있습니다.</p>
	{:else}
		<p class="text-[13px] font-bold text-primary">문제집 Day {day}</p>
		<h2 id="resume-title" class="mt-1.5 text-xl/[1.35] font-bold">
			{dayTopics(day).join(' · ')}
		</h2>
		<p class="mt-1 text-sm text-muted-foreground">
			{statusText(progress.days[day], progress.settings, questionsOf(day))}
		</p>
		<div role="img" aria-label={dotsLabel} class="mt-3.5 flex gap-[3px]">
			{#each states as state, index (index)}
				<span class={cn('h-1.5 flex-1 rounded-full', questionDotStyles[state])}></span>
			{/each}
		</div>
		<Button
			size="touch"
			class="mt-4 min-h-12 w-full font-bold"
			href={resolve('/day/[day]', { day: String(day) })}
		>
			{day in progress.days ? '이어서 하기' : `Day ${day} 시작하기`}
		</Button>
	{/if}
</section>
