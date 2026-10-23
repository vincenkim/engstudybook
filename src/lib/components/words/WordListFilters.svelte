<script lang="ts" module>
	import type { WordStatus } from '#lib/content/words.js';

	export type WordFilter = 'all' | WordStatus | 'star';
</script>

<script lang="ts">
	import { wordStatusLabels } from './status-labels.js';

	let {
		total,
		counts,
		stars,
		filter,
		onPick
	}: {
		total: number;
		counts: Record<WordStatus, number>;
		stars: number;
		filter: WordFilter;
		onPick: (filter: WordFilter) => void;
	} = $props();

	// 안 봄 and 별표 show only on a Day that has such words, or while that filter is picked.
	const chips = $derived(
		(
			[
				['all', '전체', total],
				['unseen', wordStatusLabels.unseen.label, counts.unseen],
				['new', wordStatusLabels.new.label, counts.new],
				['unsure', wordStatusLabels.unsure.label, counts.unsure],
				['known', wordStatusLabels.known.label, counts.known],
				['star', '별표', stars]
			] satisfies [WordFilter, string, number][]
		).filter(
			([value, , count]) =>
				(value !== 'unseen' && value !== 'star') || count > 0 || value === filter
		)
	);
</script>

<div role="group" aria-label="거르기" class="flex flex-wrap gap-1.5 py-2.5">
	{#each chips as [value, label, count] (value)}
		<button
			type="button"
			aria-pressed={filter === value}
			class={[
				'inline-flex min-h-10 items-center rounded-full border px-3.5 text-[13px] whitespace-nowrap',
				filter === value
					? 'border-foreground bg-foreground font-bold text-background'
					: 'bg-card hover:bg-muted'
			]}
			onclick={() => onPick(value)}
		>
			{label}
			{count}
		</button>
	{/each}
</div>
