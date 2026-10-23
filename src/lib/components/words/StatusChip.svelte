<script lang="ts">
	import type { WordStatus } from '#lib/content/words.js';
	import { cn } from '#lib/utils.js';
	import { wordStatusLabels } from './status-labels.js';

	let { status, onclick }: { status: WordStatus; onclick: () => void } = $props();

	const { label, icon: Icon, chip } = $derived(wordStatusLabels[status]);
</script>

<!-- The same button stays focused after a press, and its name says the new status (R7). -->
<button
	type="button"
	aria-label="상태 {label}, 눌러서 바꾸기"
	class="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
	{onclick}
>
	<span
		class={cn(
			'inline-flex h-8 items-center gap-1 rounded-full px-2.5 text-[13px] font-bold whitespace-nowrap',
			chip
		)}
	>
		<Icon aria-hidden="true" class="size-3.5" />
		{label}
	</span>
</button>
