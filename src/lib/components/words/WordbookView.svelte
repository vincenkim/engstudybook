<script lang="ts">
	import { Bookmark, ChevronRight, SpellCheck } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import {
		countStatuses,
		pdfDays,
		pdfItems,
		todayWordDay,
		uniqueWordCount
	} from '#lib/progress/words.js';
	import { wordsRecord } from '#lib/progress/words-store.svelte.js';
	import { cn } from '#lib/utils.js';
	import StatusBar from './StatusBar.svelte';
	import WeekSection from './WeekSection.svelte';
	import { barOrder, wordStatusLabels } from './status-labels.js';

	const weeks = [...new Set(pdfDays.map(({ week }) => week))].map((number) => ({
		number,
		days: pdfDays.filter(({ week }) => week === number)
	}));
	const wordCount = uniqueWordCount(pdfItems);

	const counts = $derived(countStatuses(wordsRecord.entries, pdfItems));
	const savedCount = $derived(Object.keys(wordsRecord.saved).length);

	// The Week of today's Day starts open; after that each Week keeps the learner's choice (KTD8).
	const current = todayWordDay(wordsRecord.entries, wordsRecord.lastDay, pdfDays);
	const open = $state(weeks.map((week) => week.days.some(({ key }) => key === current)));
</script>

<main class="mx-auto w-full max-w-[760px] px-4 pt-6 pb-12">
	<h1 class="text-[28px] font-bold tracking-[-0.5px]">단어장</h1>
	<p class="mt-1 text-sm text-muted-foreground">
		{weeks.length}주 · {pdfDays.length}일 · {wordCount.toLocaleString('ko-KR')}단어
	</p>
	<section aria-label="전체 단어 상태" class="mt-4 rounded-2xl border bg-card p-4">
		<StatusBar {counts} class="h-2.5" />
		<ul class="mt-2.5 flex flex-wrap gap-1.5">
			{#each barOrder as status (status)}
				{@const { label, icon: Icon, chip } = wordStatusLabels[status]}
				<li
					class={cn(
						'inline-flex h-6 items-center gap-1 rounded-full px-2.5 text-xs font-bold whitespace-nowrap',
						chip
					)}
				>
					<Icon aria-hidden="true" class="size-3.5" />
					{label}
					{counts[status]}
				</li>
			{/each}
		</ul>
		<p class="mt-2.5 text-[13px] text-muted-foreground">
			모든 단어는 처음에서 시작해요. 상태는 목록이나 카드에서 바꿀 수 있어요.
		</p>
	</section>
	<div class="mt-3 grid gap-3">
		<a
			href={resolve('/words/test')}
			class="flex min-h-14 items-center gap-3 rounded-2xl border bg-card p-4 hover:bg-background"
		>
			<SpellCheck aria-hidden="true" class="size-5 shrink-0 text-primary" />
			<span class="flex-1">
				<span class="block font-bold">단어시험</span>
				<span class="block text-[13px] text-muted-foreground">뜻을 보고 영어로 써요</span>
			</span>
			<ChevronRight aria-hidden="true" class="size-[18px] shrink-0 text-muted-foreground" />
		</a>
		{#if savedCount > 0}
			<a
				href={resolve('/words/saved')}
				class="flex min-h-14 items-center gap-3 rounded-2xl border bg-card p-4 hover:bg-background"
			>
				<Bookmark aria-hidden="true" class="size-5 shrink-0 text-primary" />
				<span class="flex-1 font-bold">담은 단어</span>
				<span class="text-muted-foreground">{savedCount}</span>
				<ChevronRight aria-hidden="true" class="size-[18px] shrink-0 text-muted-foreground" />
			</a>
		{/if}
		{#each weeks as week, index (week.number)}
			<WeekSection week={week.number} days={week.days} bind:open={open[index]} />
		{/each}
	</div>
</main>
