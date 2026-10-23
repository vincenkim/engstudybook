<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { wordsOf } from '#lib/content/words.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const words = $derived(wordsOf(data.key));
</script>

<svelte:head><title>Week {data.week} · Day {data.day} 단어 · 토익 문제집</title></svelte:head>

<main class="mx-auto w-full max-w-[760px] px-4 pt-4 pb-12">
	<!-- A fixed link, not history.back(), so a list opened from a bookmark still leads out (KTD9). -->
	<a
		href={resolve('/words')}
		aria-label="단어장으로 돌아가기"
		class="-ml-2.5 inline-flex size-11 items-center justify-center rounded-xl hover:bg-muted"
	>
		<ChevronLeft aria-hidden="true" class="size-[22px]" />
	</a>
	<h1 class="mt-1 text-[22px] font-bold tracking-[-0.3px]">Week {data.week} · Day {data.day}</h1>
	<p class="mt-0.5 text-sm text-muted-foreground">{words.length}단어</p>
	<ul class="mt-4 overflow-hidden rounded-2xl border bg-card">
		{#each words as word (word.id)}
			<li class="flex items-baseline gap-3 border-t px-4 py-3 first:border-t-0">
				<span class="w-6 shrink-0 text-right text-[13px] text-muted-foreground">{word.no}</span>
				<span lang="en" class="font-bold">{word.word}</span>
			</li>
		{/each}
	</ul>
</main>
