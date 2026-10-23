<script lang="ts">
	import { resolve } from '$app/paths';
	import { dayTopics, questionsOf } from '#lib/content/index.js';
	import { statusText } from '#lib/progress/attempt.js';
	import { progress } from '#lib/progress/store.svelte.js';
	import { cn } from '#lib/utils.js';

	/** `current` marks the day to continue. */
	let { day, current }: { day: number; current: boolean } = $props();

	const note = $derived(
		!current ? '' : day in progress.days ? ' · 이어서 하기' : ' · 다음에 할 Day'
	);
</script>

<a
	href={resolve('/day/[day]', { day: String(day) })}
	class={cn(
		'flex min-h-16 items-center gap-3 border-t py-2.5 pr-3 pl-4 hover:bg-background',
		current && 'bg-accent/60'
	)}
>
	<span
		aria-hidden="true"
		class={cn(
			'inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-[13px] font-bold text-muted-foreground',
			current && 'bg-card text-primary ring-2 ring-primary ring-inset'
		)}
	>
		{day}
	</span>
	<span class="min-w-0 flex-1">
		<span class="block text-xs text-muted-foreground">Day {day}{note}</span>
		<span class="block font-medium">{dayTopics(day).join(' · ')}</span>
		<span class="block text-[13px] text-muted-foreground">
			{statusText(progress.days[day], progress.settings, questionsOf(day))}
		</span>
	</span>
</a>
