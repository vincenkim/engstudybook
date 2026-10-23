<script lang="ts" module>
	import { resolve } from '$app/paths';
	import type { ResolvedPathname } from '$app/types';
	import { wordDays, wordsOf } from '#lib/content/words.js';
	import { pdfCard, type CardWord } from '#lib/components/words/card-session.js';
	import { dueItems, type WordEntries } from '#lib/progress/words.js';

	const pdfCards = wordDays.flatMap(({ key }) => wordsOf(key).map(pdfCard));

	/**
	 * The words due for review (KTD7), the one list the review tab and today's review card count.
	 * Saved words (U9) join the PDF words here.
	 */
	export const reviewWords = (entries: WordEntries, today: string): CardWord[] =>
		dueItems(entries, pdfCards, today);

	/** A review session takes this many of the words due, earliest first (KTD7). */
	export const reviewDeckSize = 20;

	/** The review screen on its word tab, where review cards lead back (KTD9). */
	export const wordTabHref = `${resolve('/review')}?tab=words` as ResolvedPathname;
</script>

<script lang="ts">
	import { untrack } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import StatusChip from '#lib/components/words/StatusChip.svelte';
	import { statusOf } from '#lib/progress/words.js';
	import { setStatusFromList, wordsRecord } from '#lib/progress/words-store.svelte.js';

	let { words, onCards }: { words: CardWord[]; onCards: () => void } = $props();

	const id = $props.id();
	// The rows as the tab opened: a status change reschedules its word off the due list, and the
	// row stays where it was (as a Day list filter keeps its rows).
	const rows = untrack(() => words);
	const deck = $derived(Math.min(words.length, reviewDeckSize));

	const meaningOf = ({ lines }: CardWord) =>
		lines
			.map(
				({ pos, senses }) => `${pos ? `(${pos}) ` : ''}${senses.map(({ text }) => text).join(', ')}`
			)
			.join(' ');
</script>

{#if rows.length}
	<p class="mt-4 text-[13px] text-muted-foreground">
		복습 날짜가 된 단어를 오래 기다린 것부터 보여 줘요.
	</p>
	<ul aria-label="복습할 단어" class="mt-2.5 overflow-hidden rounded-2xl border bg-card">
		{#each rows as word (word.key)}
			<li class="flex items-center gap-3 border-t py-1.5 pr-2 pl-4 first:border-t-0">
				<span class="min-w-0 flex-1">
					<span lang="en" class="block font-bold">{word.word}</span>
					<span class="block truncate text-[13px] text-muted-foreground">{meaningOf(word)}</span>
				</span>
				<StatusChip
					status={statusOf(wordsRecord.entries, word)}
					onclick={() => setStatusFromList(word)}
				/>
			</li>
		{/each}
	</ul>

	<!-- Fixed to the content area, above the phone tab bar. -->
	<div class="fixed inset-x-0 bottom-0 z-10 border-t bg-background">
		<div
			class="mx-auto w-full max-w-[760px] px-4 py-3 md:pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
		>
			{#if !deck}
				<p id="{id}-empty" class="mb-2 text-center text-sm text-muted-foreground">
					지금 복습할 단어가 없어요
				</p>
			{/if}
			<Button
				size="touch"
				class="min-h-12 w-full font-bold"
				disabled={!deck}
				aria-describedby={deck ? undefined : `${id}-empty`}
				onclick={onCards}
			>
				{deck ? `카드로 ${deck}개 복습` : '카드로 복습'}
			</Button>
		</div>
	</div>
{:else}
	<section class="mt-6 rounded-2xl border bg-card p-6 text-center">
		<h2 class="text-lg font-bold">복습할 단어가 없어요</h2>
		<p class="mt-1 text-sm text-muted-foreground">
			카드에서 평가한 단어는 복습 날짜가 되면 여기에 모여요.
		</p>
		<Button size="touch" variant="outline" class="mt-4 min-h-12" href={resolve('/words')}>
			단어장으로
		</Button>
	</section>
{/if}
