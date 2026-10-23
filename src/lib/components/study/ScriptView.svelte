<script lang="ts">
	import type { Speaker } from '#lib/content/index.js';
	import { speakerName } from './labels';

	let {
		script,
		scriptKo,
		plain = false
	}: {
		script: [Speaker, string][];
		/** Shown under each line once the set is reviewed. */
		scriptKo?: string[];
		/** Drops the card frame when nested inside the review box. */
		plain?: boolean;
	} = $props();
</script>

<div class={plain ? '' : 'passage'}>
	{#each script as [speaker, text], index (index)}
		<p class="my-2">
			<b class="mr-2 text-brand">{speakerName(speaker)}</b>
			<span lang="en">{text}</span>
			{#if scriptKo}<span class="block text-sm text-muted-foreground">{scriptKo[index]}</span>{/if}
		</p>
	{/each}
</div>
