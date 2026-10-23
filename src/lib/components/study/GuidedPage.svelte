<script lang="ts">
	import type { GuidedPage } from '#lib/content/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { partNames } from './labels';
	import ListenControls from './ListenControls.svelte';
	import OptionList from './OptionList.svelte';
	import PageTag from './PageTag.svelte';
	import Rich from './Rich.svelte';
	import Translation from './Translation.svelte';
	import { responseLines } from './spoken';

	let { page }: { page: GuidedPage } = $props();

	let step = $state(0);
	const done = $derived(step >= page.steps.length);
</script>

<PageTag>따라 풀기 · {partNames[page.part]}</PageTag>
{#if page.part === 2}
	<ListenControls lines={responseLines(page)} seed={0} />
	<p class="stem" lang="en">{page.script}</p>
{:else}
	<Rich tag="p" text={page.text} fill={done && page.options[page.answer]} class="stem" lang="en" />
{/if}
<OptionList options={page.options} answer={page.answer} revealed={done} showText />
<ol class="my-[18px] list-decimal pl-[22px]">
	{#each page.steps.slice(0, step) as text, index (index)}
		<Rich tag="li" {text} class="my-2" />
	{/each}
</ol>
{#if done}
	<div class="explain">
		<h3 class="explain-heading">해석</h3>
		<Translation ko={page.ko} optionsKo={page.part === 2 ? page.optionsKo : undefined} />
	</div>
{:else}
	<Button size="touch" class="font-bold" onclick={() => step++}>
		{step ? '다음 단계' : '풀이 시작'}
	</Button>
{/if}
