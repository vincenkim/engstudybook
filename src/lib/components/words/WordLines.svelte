<script lang="ts">
	import type { CardWord } from './card-session';

	let {
		lines,
		size
	}: {
		lines: CardWord['lines'];
		/** `sm` in a list row, `lg` on a card. */
		size: 'sm' | 'lg';
	} = $props();

	const posBadge = {
		sm: 'mr-1.5 inline-block min-w-[22px] rounded bg-muted px-1 text-center text-xs font-bold text-muted-foreground',
		lg: 'mr-2 inline-block min-w-6 rounded-md bg-muted px-1.5 text-center align-[2px] text-[13px] font-bold text-muted-foreground'
	};
</script>

{#each lines as line, lineIndex (lineIndex)}
	{@const last = line.senses.length - 1}
	<p>
		{#if line.pos}
			<span class={posBadge[size]}>{line.pos}</span>
		{/if}
		{#each line.senses as sense, index (index)}
			{#if sense.key}<strong>{sense.text}</strong>{:else}{sense.text}{/if}{index < last ? ', ' : ''}
		{/each}
	</p>
{/each}
