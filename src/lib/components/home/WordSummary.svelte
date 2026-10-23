<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import { dayCardsHref } from '#lib/components/words/CardSession.svelte';
	import StatusBar from '#lib/components/words/StatusBar.svelte';
	import { countStatuses, deckOf, pdfDays, todayWordDay } from '#lib/progress/words.js';
	import { wordsRecord } from '#lib/progress/words-store.svelte.js';

	const id = $props.id();
	const day = $derived.by(() => {
		const key = todayWordDay(wordsRecord.entries, wordsRecord.lastDay, pdfDays);
		return pdfDays.find((day) => day.key === key)!;
	});
	const counts = $derived(countStatuses(wordsRecord.entries, day.items));
	const deck = $derived(deckOf(wordsRecord.entries, day.items).length);
</script>

<section aria-labelledby="words-title" class="flex flex-col rounded-2xl border bg-card p-5">
	<h2 id="words-title" class="text-[17px] font-bold">오늘의 단어</h2>
	<p class="mt-1 text-[13px] text-muted-foreground">
		Week {day.week} · Day {day.day} · {day.items.length}단어
	</p>
	<StatusBar {counts} class="mt-3.5 h-2.5" />
	{#if !deck}
		<p id="{id}-empty" class="mt-3 text-sm text-muted-foreground">외울 단어가 없어요</p>
	{/if}
	<div class="mt-4 flex flex-wrap gap-2 lg:mt-auto lg:pt-4">
		<Button
			variant="secondary"
			size="touch"
			class="min-h-12 grow font-bold"
			href={deck ? dayCardsHref(day.key) : undefined}
			disabled={!deck}
			aria-describedby={deck ? undefined : `${id}-empty`}
		>
			{deck ? `카드로 외우기 · ${deck}개` : '카드로 외우기'}
		</Button>
		<Button
			variant="outline"
			size="touch"
			class="min-h-12 grow-0 max-lg:px-5 lg:grow"
			href={resolve('/words/[day]', { day: day.key })}
		>
			목록
		</Button>
	</div>
</section>
