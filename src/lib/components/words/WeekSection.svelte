<script lang="ts">
	import { ChevronDown, ChevronRight } from '@lucide/svelte';
	import { Collapsible } from 'bits-ui';
	import { resolve } from '$app/paths';
	import { countStatuses, deckOf, type StudyItem } from '#lib/progress/words.js';
	import { wordsRecord } from '#lib/progress/words-store.svelte.js';
	import StatusBar from './StatusBar.svelte';

	let {
		week,
		days,
		open = $bindable(false)
	}: {
		week: number;
		days: { key: string; day: number; items: StudyItem[] }[];
		open?: boolean;
	} = $props();

	// A Day counts its own rows, so a word repeated from the Day before counts in both (R2).
	const rows = $derived(
		days.map(({ key, day, items }) => ({
			key,
			day,
			words: items.length,
			toLearn: deckOf(wordsRecord.entries, items).length,
			counts: countStatuses(wordsRecord.entries, items)
		}))
	);
	const weekWords = $derived(rows.reduce((total, row) => total + row.words, 0));
	const weekToLearn = $derived(rows.reduce((total, row) => total + row.toLearn, 0));
</script>

<Collapsible.Root bind:open class="overflow-hidden rounded-2xl border bg-card">
	<h2>
		<Collapsible.Trigger
			class="group flex min-h-11 w-full items-center gap-3 p-4 text-left hover:bg-background"
		>
			<span class="min-w-0 flex-1">
				<span class="block font-bold">Week {week}</span>
				<span class="mt-0.5 block text-[13px] text-muted-foreground">
					{days.length}일 · {weekWords}단어 ·
					<span class="whitespace-nowrap">외울 단어 {weekToLearn}</span>
				</span>
			</span>
			<ChevronDown
				aria-hidden="true"
				class="size-5 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
			/>
		</Collapsible.Trigger>
	</h2>
	<Collapsible.Content>
		<ul>
			{#each rows as { key, day, words, toLearn, counts } (key)}
				<li>
					<a
						href={resolve('/words/[day]', { day: key })}
						class="flex min-h-16 items-center gap-3 border-t py-2.5 pr-3 pl-4 hover:bg-background"
					>
						<span class="min-w-0 flex-1">
							<span class="flex items-baseline justify-between gap-2">
								<span class="text-[15px] font-bold">Day {day}</span>
								<span class="text-[13px] text-muted-foreground">
									{words}단어 · 외울 단어 {toLearn}
								</span>
							</span>
							<StatusBar {counts} class="mt-2 h-2" />
						</span>
						<ChevronRight aria-hidden="true" class="size-[18px] shrink-0 text-muted-foreground" />
					</a>
				</li>
			{/each}
		</ul>
	</Collapsible.Content>
</Collapsible.Root>
