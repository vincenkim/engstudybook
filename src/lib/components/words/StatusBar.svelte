<script lang="ts">
	import type { WordStatus } from '#lib/content/words.js';
	import { cn } from '#lib/utils.js';
	import { barOrder, wordStatusLabels } from './status-labels.js';

	let { counts, class: className }: { counts: Record<WordStatus, number>; class?: string } =
		$props();

	const total = $derived(barOrder.reduce((sum, status) => sum + counts[status], 0));
	const label = $derived(
		barOrder.map((status) => `${wordStatusLabels[status].label} ${counts[status]}개`).join(', ')
	);
</script>

<span role="img" aria-label={label} class={cn('flex overflow-hidden rounded-full', className)}>
	{#each barOrder as status (status)}
		<span
			class={cn('h-full', wordStatusLabels[status].bar)}
			style:width="{(counts[status] / total) * 100}%"
		></span>
	{/each}
</span>
