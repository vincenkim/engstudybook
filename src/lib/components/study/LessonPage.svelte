<script lang="ts">
	import type { LessonPage } from '#lib/content/index.js';
	import DataTable from './DataTable.svelte';
	import PageTag from './PageTag.svelte';
	import Rich from './Rich.svelte';

	let { page }: { page: LessonPage } = $props();
</script>

<PageTag>{page.tag || `${page.section} 개념`}</PageTag>
<h2 class="page-title">{page.title}</h2>

{#each page.blocks as block, index (index)}
	{#if block.type === 'p'}
		<Rich tag="p" text={block.text} class="my-3" />
	{:else if block.type === 'tip'}
		<div class="my-4 rounded-[10px] bg-accent px-4 py-3">
			<b class="mr-2 text-[13px] text-brand">TIP</b><Rich text={block.text} />
		</div>
	{:else if block.type === 'box'}
		<div class="box">
			<h3 class="mb-1.5 font-bold">{block.title}</h3>
			<ul class="list-disc pl-5">
				{#each block.items as item, itemIndex (itemIndex)}
					<Rich tag="li" text={item} class="my-1.5" />
				{/each}
			</ul>
		</div>
	{:else if block.type === 'examples'}
		<div class="my-4 grid gap-2.5">
			{#each block.items as item, itemIndex (itemIndex)}
				<div class="rounded-[10px] border bg-card px-4 py-3">
					<Rich tag="p" text={item.en} class="text-lg" lang="en" />
					<p class="text-muted-foreground">{item.ko}</p>
					<p class="mt-1 text-sm text-brand">{item.note}</p>
				</div>
			{/each}
		</div>
	{:else if block.type === 'table'}
		<DataTable table={block} />
	{/if}
{/each}
