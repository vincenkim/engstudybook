<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { onMount, tick } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import { progress } from '#lib/progress/store.svelte.js';
	import { countStatuses, deckOf, starOf, statusOf } from '#lib/progress/words.js';
	import { wordsRecord } from '#lib/progress/words-store.svelte.js';
	import { noVoiceMessage, speech } from '#lib/speech/player.svelte.js';
	import { spokenWord } from './card-session';
	import WordListFilters, { type WordFilter } from './WordListFilters.svelte';
	import WordRow, { type CoverMode, type ListWord } from './WordRow.svelte';

	let {
		title,
		words,
		onCards,
		onRemove
	}: {
		title: string;
		words: ListWord[];
		onCards: () => void;
		/** Saved words only: each row gets a remove button. */
		onRemove?: (word: ListWord) => void;
	} = $props();

	const id = $props.id();
	const modes: [CoverMode, string][] = [
		['none', '다 보기'],
		['meaning', '뜻 가리기'],
		['word', '단어 가리기']
	];

	let mode = $state<CoverMode>('meaning');
	const revealed = new SvelteSet<string>();
	let filter = $state<WordFilter>('all');
	// The rows a filter matched when it was picked, so a row whose status changes stays in place.
	let picked = $state.raw<Set<string> | null>(null);
	let noVoice = $state(false);

	const counts = $derived(countStatuses(wordsRecord.entries, words));
	const stars = $derived(words.filter((word) => starOf(wordsRecord.entries, word)).length);
	const deck = $derived(deckOf(wordsRecord.entries, words).length);
	const rows = $derived(words.filter((word) => !picked || picked.has(word.id)));
	const notice = $derived(
		noVoice ? noVoiceMessage : speech.failed ? '발음을 재생하지 못했어요.' : ''
	);

	function setMode(next: CoverMode) {
		mode = next;
		revealed.clear();
	}

	function matches(word: ListWord, next: WordFilter) {
		if (next === 'star') return starOf(wordsRecord.entries, word);
		return next === 'all' || statusOf(wordsRecord.entries, word) === next;
	}

	function pick(next: WordFilter) {
		filter = next;
		picked =
			next === 'all'
				? null
				: new Set(words.filter((word) => matches(word, next)).map((word) => word.id));
	}

	function speak(word: ListWord) {
		noVoice = !speech.voices.length;
		speech.play([{ text: spokenWord(word.word), speaker: 0 }], 0, progress.settings.rate);
	}

	// The row goes, so focus moves to the remove button now in its place, else the one above;
	// with the last row gone, to the heading of what the screen shows instead.
	async function remove(word: ListWord, index: number) {
		onRemove?.(word);
		await tick();
		const buttons = document.querySelectorAll<HTMLElement>('main [data-remove]');
		const next = buttons[index] ?? buttons[index - 1];
		if (next) next.focus();
		else void focusMainHeading();
	}

	onMount(() => () => speech.stop());
</script>

<main class="mx-auto w-full max-w-[760px] px-4 pb-[calc(10rem+env(safe-area-inset-bottom))]">
	<header class="sticky top-0 z-10 -mx-4 bg-background px-4 pt-[env(safe-area-inset-top)]">
		<div class="flex items-center gap-0.5 pt-1">
			<!-- A fixed link, not history.back(), so a list opened from a bookmark still leads out (KTD9). -->
			<a
				href={resolve('/words')}
				aria-label="단어장으로 돌아가기"
				class="-ml-2.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted"
			>
				<ChevronLeft aria-hidden="true" class="size-[22px]" />
			</a>
			<div class="min-w-0 flex-1">
				<h1 class="text-base font-bold">{title}</h1>
				<p class="text-xs text-muted-foreground">{words.length}단어</p>
			</div>
		</div>
		<div role="group" aria-label="보기 방식" class="mt-1.5 flex gap-1 rounded-xl bg-muted p-1">
			{#each modes as [value, label] (value)}
				<button
					type="button"
					aria-pressed={mode === value}
					class={[
						'min-h-10 flex-1 rounded-lg text-sm',
						mode === value
							? 'bg-card font-bold shadow-sm'
							: 'text-muted-foreground hover:text-foreground'
					]}
					onclick={() => setMode(value)}
				>
					{label}
				</button>
			{/each}
		</div>
		<WordListFilters total={words.length} {counts} {stars} {filter} onPick={pick} />
	</header>

	<ol aria-label="단어" class="overflow-hidden rounded-2xl border bg-card">
		{#each rows as word, index (word.id)}
			<WordRow
				{word}
				{mode}
				revealed={revealed.has(word.id)}
				onReveal={() => revealed.add(word.id)}
				onSpeak={() => speak(word)}
				onRemove={onRemove && (() => remove(word, index))}
			/>
		{/each}
	</ol>

	<!-- Fixed to the content area; the phone tab bar is hidden on this page. -->
	<div class="fixed inset-x-0 bottom-0 z-10 border-t bg-card">
		<div
			class="mx-auto w-full max-w-[760px] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
		>
			<p role="status" class="text-sm text-muted-foreground not-empty:mb-2">{notice}</p>
			{#if !deck}
				<p id="{id}-empty" class="mb-2 text-center text-sm text-muted-foreground">
					외울 단어가 없어요
				</p>
			{/if}
			<Button
				size="touch"
				class="min-h-12 w-full font-bold"
				disabled={!deck}
				aria-describedby={deck ? undefined : `${id}-empty`}
				onclick={onCards}
			>
				{deck ? `카드로 외우기 · 외울 단어 ${deck}개` : '카드로 외우기'}
			</Button>
		</div>
	</div>
</main>
