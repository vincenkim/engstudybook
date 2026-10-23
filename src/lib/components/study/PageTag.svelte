<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span
	class="mb-2.5 inline-block rounded-full bg-accent px-3 py-0.5 text-[13px] font-bold text-accent-foreground"
>
	{@render children()}
</span>
