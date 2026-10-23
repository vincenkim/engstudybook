<script lang="ts">
	let { vocab }: { vocab: [string, string][] } = $props();
</script>

<div class="mt-1 flex flex-wrap gap-1.5">
	{#each vocab as [word, meaning], index (index)}
		<span class="rounded-md bg-accent px-2.5 py-0.5 text-sm">
			<b class="mr-1.5" lang="en">{word}</b>{meaning}
		</span>
	{/each}
</div>
