<script lang="ts">
	import { resolve } from '$app/paths';
	import { dayContent, dayTopics } from '#lib/content/index.js';
	import { partNames } from '#lib/components/study/labels.js';
	import Rich from '#lib/components/study/Rich.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import type { ReviewItem } from '#lib/progress/review.js';
	import { reviewByDay, reviewSummary, setOf } from './review-screens';

	let { items, onStart }: { items: ReviewItem[]; onStart: () => void } = $props();

	const id = $props.id();
	const groups = $derived(reviewByDay(items));
	const summaryOf = (item: ReviewItem) =>
		reviewSummary(item, setOf(dayContent(item.day).pages, item.question.id));
</script>

<main
	class={[
		'mx-auto w-full max-w-[760px] px-4 pt-6 [&_h1]:outline-none',
		items.length ? 'pb-28' : 'pb-12'
	]}
>
	<h1 class="text-[28px]/[1.25] font-bold tracking-[-0.5px]">복습</h1>
	<p class="mt-1 text-sm text-muted-foreground">Day 상관없이 틀린 문제를 모았어요</p>

	{#if items.length}
		<p class="mt-4 text-[13px] text-muted-foreground">다시 풀어서 맞히면 목록에서 빠져요.</p>
		{#each groups as group (group.day)}
			<section
				aria-labelledby="{id}-day-{group.day}"
				class="mt-2.5 overflow-hidden rounded-2xl border bg-card"
			>
				<h2 id="{id}-day-{group.day}" class="px-4 py-3 text-sm font-bold">
					Day {group.day} · {dayTopics(group.day).join(' · ')}
				</h2>
				<ul>
					{#each group.items as item (item.question.id)}
						{@const summary = summaryOf(item)}
						<li class="border-t px-4 py-3.5">
							<span class="flex justify-between gap-2 text-xs text-muted-foreground">
								<span>{item.number}번 · {partNames[item.question.part]}</span>
								<span class="shrink-0 font-bold text-bad">{item.misses}번 틀림</span>
							</span>
							{#if summary.english}
								<Rich tag="p" text={summary.text} class="mt-1 text-[15px]/[1.5]" lang="en" />
							{:else}
								<p class="mt-1 text-[15px]/[1.5]">{summary.text}</p>
							{/if}
						</li>
					{/each}
				</ul>
			</section>
		{/each}

		<!-- Fixed to the content area, above the phone tab bar. -->
		<div class="fixed inset-x-0 bottom-0 z-10 border-t bg-background">
			<div
				class="mx-auto w-full max-w-[760px] px-4 py-3 md:pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
			>
				<Button size="touch" class="min-h-12 w-full font-bold" onclick={onStart}>
					틀린 문제 {items.length}개 다시 풀기
				</Button>
			</div>
		</div>
	{:else}
		<section class="mt-6 rounded-2xl border bg-card p-6 text-center">
			<h2 class="text-lg font-bold">틀린 문제가 없어요</h2>
			<p class="mt-1 text-sm text-muted-foreground">문제를 풀다 틀리면 여기에 모여요.</p>
			<Button size="touch" variant="outline" class="mt-4 min-h-12" href={resolve('/days')}>
				문제집으로
			</Button>
		</section>
	{/if}
</main>
