<script lang="ts">
	import { letters } from './labels';

	let { ko, optionsKo }: { ko?: string; optionsKo?: string[] } = $props();
</script>

{#if ko}<p>{ko}</p>{/if}
{#each optionsKo ?? [] as text, index (index)}
	<p class="text-sm text-muted-foreground">({letters[index]}) {text}</p>
{/each}
