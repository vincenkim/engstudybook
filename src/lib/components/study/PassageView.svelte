<script lang="ts">
	import { Maximize2, Minimize2 } from '@lucide/svelte';
	import { tick } from 'svelte';
	import type { Passage } from '#lib/content/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { passageText } from '#lib/markup.js';
	import DataTable from './DataTable.svelte';

	let {
		passages,
		fills,
		blank
	}: {
		passages: Passage[];
		/** Part 6: the answer shown in each numbered blank once its question is revealed. */
		fills?: Record<number, string | false>;
		/** Part 6: the blank of the current question, marked and kept in view. */
		blank?: number;
	} = $props();

	let scroller: HTMLElement;
	let expanded = $state(false);
	let keptScroll = 0;

	/** 크게 보기 gives the passage the whole content height; going back restores where it was. */
	async function toggleExpanded() {
		if (!expanded) keptScroll = scroller.scrollTop;
		expanded = !expanded;
		await tick();
		if (!expanded) scroller.scrollTop = keptScroll;
	}

	// Filling a blank renders its paragraph again, so the mark is set again when the fills change.
	$effect(() => {
		if (blank === undefined || !fills) return;
		for (const marked of scroller.querySelectorAll<HTMLElement>('[data-current]')) {
			delete marked.dataset.current;
		}
		const target = [...scroller.querySelectorAll<HTMLElement>('.blank')].find((element) =>
			element.textContent?.startsWith(`(${blank})`)
		);
		if (!target) return;
		target.dataset.current = '';
		target.scrollIntoView({ block: 'nearest' });
	});
</script>

<!-- Pinned on top below 1024px (about 40% of the content height), a column beside the questions above. -->
<section
	aria-label="지문"
	class={[
		'sticky top-[var(--pin-top,0px)] z-[5] -mx-4 -mt-6 flex flex-col border-b bg-card shadow-sm',
		expanded ? 'max-lg:h-[calc(100dvh-var(--pin-top,0px))]' : 'max-lg:h-[40dvh]',
		'lg:top-[calc(var(--pin-top,0px)+1.5rem)] lg:mx-0 lg:mt-0 lg:h-[calc(100dvh-var(--pin-top,0px)-7rem-env(safe-area-inset-bottom))] lg:rounded-2xl lg:border lg:shadow-none'
	]}
>
	<div class="flex items-center justify-between gap-2 px-4 pt-2 lg:hidden">
		<span class="text-[13px] font-bold text-muted-foreground">지문</span>
		<Button
			size="touch"
			variant="outline"
			class="min-h-9 px-3 text-sm"
			aria-pressed={expanded}
			onclick={toggleExpanded}
		>
			{#if expanded}<Minimize2 aria-hidden="true" />{:else}<Maximize2 aria-hidden="true" />{/if}
			크게 보기
		</Button>
	</div>
	<!-- The passage class keeps the blank styles; the panel itself is the frame. -->
	<div
		bind:this={scroller}
		class={[
			'passage m-0 min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-none border-0 [&_[data-current]]:rounded-sm [&_[data-current]]:bg-mark',
			// The action bar covers the bottom of the enlarged panel.
			expanded && 'max-lg:pb-[calc(5rem+env(safe-area-inset-bottom))]'
		]}
	>
		{#each passages as passage, index (index)}
			<div class={[index > 0 && 'mt-5 border-t pt-4']}>
				<span class="text-xs font-bold text-brand">
					{passages.length > 1 ? `지문 ${index + 1} · ${passage.kind}` : passage.kind}
				</span>
				{#if passage.title}<h3 class="mt-1 mb-2 font-bold" lang="en">{passage.title}</h3>{/if}
				{#each passage.head ?? [] as [key, value], line (line)}
					<p class="my-0.5 text-[15px]" lang="en"><b>{`${key}: `}</b>{value}</p>
				{/each}
				{#each passage.body as block, line (line)}
					{#if typeof block === 'string'}
						<!-- passageText escapes the text before adding its own markup. -->
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						<p class="my-2" lang="en">{@html passageText(block, fills)}</p>
					{:else if 'table' in block}
						<DataTable table={block.table} class="my-2" />
					{:else}
						{#each block.chat as [who, time, text], chat (chat)}
							<p class="my-2" lang="en"><b>{`${who} (${time}) `}</b>{text}</p>
						{/each}
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</section>
