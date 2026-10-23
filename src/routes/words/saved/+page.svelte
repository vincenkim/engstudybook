<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Button } from '#lib/components/ui/button/index.js';
	import { savedCard } from '#lib/components/words/card-session.js';
	import CardSession, { openCards } from '#lib/components/words/CardSession.svelte';
	import WordListView from '#lib/components/words/WordListView.svelte';
	import { deckOf, pdfDaysOf } from '#lib/progress/words.js';
	import { removeSaved, wordsRecord } from '#lib/progress/words-store.svelte.js';

	const listHref = resolve('/words/saved');

	/** The PDF Days a saved word is on too: it studies under that word's record (R15). */
	function pdfNote(english: string) {
		const days = pdfDaysOf(english).map(({ week, day }) => `Week ${week} · Day ${day}`);
		return days.length ? `${days.join(', ')}에도 있어요` : undefined;
	}

	// In the order saved; a saved word keeps apart from the PDF Days even when it shares a record.
	const words = $derived(
		Object.entries(wordsRecord.saved).map(([english, saved], index) => ({
			...savedCard(english, saved),
			id: english,
			no: index + 1,
			note: pdfNote(english)
		}))
	);
	const deck = $derived(deckOf(wordsRecord.entries, words));
</script>

<svelte:head><title>담은 단어 · 토익 문제집</title></svelte:head>

{#if page.state.cards}
	<CardSession {deck} title="담은 단어 카드" backLabel="담은 단어로" backHref={listHref} />
{:else if words.length}
	<WordListView
		title="담은 단어"
		{words}
		onCards={openCards}
		onRemove={(word) => removeSaved(word.id)}
	/>
{:else}
	<main class="mx-auto w-full max-w-[760px] px-4 pb-12">
		<header class="flex items-center gap-0.5 pt-[calc(0.25rem+env(safe-area-inset-top))]">
			<a
				href={resolve('/words')}
				aria-label="단어장으로 돌아가기"
				class="-ml-2.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted"
			>
				<ChevronLeft aria-hidden="true" class="size-[22px]" />
			</a>
			<h1 class="text-base font-bold">담은 단어</h1>
		</header>
		<section class="mt-6 rounded-2xl border bg-card p-6 text-center">
			<h2 class="text-lg font-bold">아직 담은 단어가 없어요</h2>
			<p class="mt-1 text-sm text-muted-foreground">
				문제를 푼 뒤 해설의 어휘에서 단어를 누르면 여기에 담겨요.
			</p>
			<Button size="touch" variant="outline" class="mt-4 min-h-12" href={resolve('/days')}>
				문제집으로
			</Button>
		</section>
	</main>
{/if}
