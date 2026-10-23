<script lang="ts" module>
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { ResolvedPathname } from '$app/types';

	/**
	 * Opens the cards over the current screen as one more history entry, so back closes them and a
	 * reload shows the screen without them (KTD9). The screen shows `CardSession` while
	 * `page.state.cards` is set.
	 */
	export const openCards = () =>
		// eslint-disable-next-line svelte/no-navigation-without-resolve -- the current, resolved URL.
		goto(page.url.href, { shallow: true, state: { cards: true } });

	/**
	 * A link to a Day's word list that opens its cards on arrival, for today's word card (KTD9).
	 * The list takes the link's place in history, so back from the cards reaches it first.
	 */
	export const dayCardsHref = (day: string) =>
		`${resolve('/words/[day]', { day })}?cards` as ResolvedPathname;
</script>

<script lang="ts">
	import { X } from '@lucide/svelte';
	import { onMount, tick, untrack } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { scrollContentToTop } from '#lib/components/shell/content-region.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import { focusKind } from '#lib/components/study/focus-kind.js';
	import { keyAction } from '#lib/keyboard.js';
	import { statusOf } from '#lib/progress/words.js';
	import {
		rateWord,
		setCardDirection,
		wordsRecord,
		type CardDirection
	} from '#lib/progress/words-store.svelte.js';
	import { speech } from '#lib/speech/player.svelte.js';
	import {
		againDeck,
		comesBack,
		currentCard,
		progressOf,
		rateCard,
		startSession,
		summaryOf,
		type CardRating,
		type CardWord
	} from './card-session';
	import CardSummary from './CardSummary.svelte';
	import { wordStatusLabels } from './status-labels';
	import WordCard from './WordCard.svelte';
	import { WordSpeech } from './word-speech.svelte.js';

	let {
		deck,
		title,
		backLabel,
		backHref
	}: {
		/** Read once: the session keeps the deck it started with (KTD10). */
		deck: CardWord[];
		/** For example "Week 1 · Day 1 카드". */
		title: string;
		/** The screen that opened the cards, where closing and finishing lead: '목록으로'. */
		backLabel: string;
		backHref: ResolvedPathname;
	} = $props();

	const directions: [CardDirection, string][] = [
		['en-ko', '영어 → 뜻'],
		['ko-en', '뜻 → 영어']
	];
	const ratings: { status: CardRating; hint: string }[] = [
		{ status: 'new', hint: '다시 볼래요' },
		{ status: 'unsure', hint: '헷갈려요' },
		{ status: 'known', hint: '알아요' }
	];

	let session = $state.raw(startSession(untrack(() => deck)));
	let flipped = $state(false);
	const wordSpeech = new WordSpeech();
	let frontButton = $state<HTMLButtonElement>();
	let backArea = $state<HTMLElement>();

	const card = $derived(currentCard(session));
	const direction = $derived(wordsRecord.direction ?? 'en-ko');
	const { position, total } = $derived(progressOf(session));

	// Focus leaves the front button for the back itself, so Space cannot press a rating (KTD11).
	async function flip() {
		flipped = true;
		await tick();
		backArea?.focus();
	}

	async function show(next: typeof session) {
		speech.stop();
		session = next;
		flipped = false;
		if (!currentCard(next)) {
			scrollContentToTop();
			return focusMainHeading();
		}
		await tick();
		frontButton?.focus();
	}

	function rate(rated: CardWord, status: CardRating) {
		rateWord(rated, status);
		void show(rateCard(session, status));
	}

	// The cards sit one history entry above the screen that opened them (KTD9).
	function leave(event: MouseEvent) {
		event.preventDefault();
		history.back();
	}

	function onkeydown(event: KeyboardEvent) {
		if (!card) return;
		const action = keyAction(event, {
			sheetOpen: false,
			focus: focusKind(document.activeElement),
			page: { kind: 'card', flipped },
			listening: false,
			sideBySide: false
		});
		if (!action) return;
		event.preventDefault();
		if (action.type === 'flip') void flip();
		if (action.type === 'rate') rate(card, ratings[action.choice].status);
	}

	onMount(() => {
		scrollContentToTop();
		void focusMainHeading();
		return () => speech.stop();
	});
</script>

<svelte:window {onkeydown} />

<header class="sticky top-0 z-10 bg-background pt-[env(safe-area-inset-top)]">
	<div class="mx-auto w-full max-w-[760px]">
		<div class="flex items-center gap-0.5 px-1.5 pt-1">
			<a
				href={backHref}
				aria-label="그만하고 {backLabel}"
				class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted"
				onclick={leave}
			>
				<X aria-hidden="true" class="size-[22px]" />
			</a>
			<h1 class="min-w-0 flex-1 truncate text-[15px] font-bold outline-none">{title}</h1>
			<p role="status" class="pr-3 text-sm text-muted-foreground">{position} / {total}</p>
		</div>
		<div aria-hidden="true" class="mx-4 mt-1 h-1 overflow-hidden rounded-full bg-border">
			<div class="h-full bg-primary" style:width="{(session.index / total) * 100}%"></div>
		</div>
	</div>
</header>

<main
	class="mx-auto w-full max-w-[760px] px-4 pt-4 pb-[calc(9rem+env(safe-area-inset-bottom))] [&_h2]:outline-none"
>
	{#if card}
		<div class="flex justify-center">
			<div
				role="group"
				aria-label="카드 방향"
				class="inline-flex gap-1 rounded-[10px] bg-muted p-1"
			>
				{#each directions as [value, label] (value)}
					<button
						type="button"
						aria-pressed={direction === value}
						class={[
							'min-h-10 rounded-lg px-3 text-[13px]',
							direction === value
								? 'bg-card font-bold shadow-sm'
								: 'text-muted-foreground hover:text-foreground'
						]}
						onclick={() => setCardDirection(value)}
					>
						{label}
					</button>
				{/each}
			</div>
		</div>
		<WordCard
			{card}
			{direction}
			{flipped}
			status={statusOf(wordsRecord.entries, card)}
			onFlip={flip}
			onSpeak={() => wordSpeech.speak(card.word)}
			bind:frontButton
			bind:backArea
		/>
		<p role="status" class="mt-3 text-sm text-muted-foreground">{wordSpeech.notice}</p>
	{:else}
		<CardSummary
			counts={summaryOf(session)}
			onAgain={againDeck(session).length ? () => show(startSession(againDeck(session))) : undefined}
			{backLabel}
			{backHref}
			onBack={leave}
		/>
	{/if}
</main>

{#if card}
	<!-- Fixed to the content area; screens that open the cards hide the phone tab bar. -->
	<div class="fixed inset-x-0 bottom-0 z-10 border-t bg-card">
		<div
			class="mx-auto w-full max-w-[760px] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
		>
			{#if !flipped}
				<Button size="touch" class="min-h-14 w-full font-bold" onclick={flip}>
					{direction === 'en-ko' ? '뜻 보기' : '영어 보기'}
				</Button>
			{:else}
				{#if comesBack(session)}
					<p class="mb-2.5 text-center text-[13px] text-muted-foreground">
						‘처음’을 고르면 이번 세션 끝에 한 번 더 나와요
					</p>
				{/if}
				<div role="group" aria-label="이 단어 평가" class="flex gap-2">
					{#each ratings as { status, hint }, index (status)}
						{@const { label, icon: Icon, chip } = wordStatusLabels[status]}
						<button
							type="button"
							aria-keyshortcuts={String(index + 1)}
							class={[
								'flex min-h-[68px] flex-1 flex-col items-center justify-center gap-0.5 rounded-[14px] hover:brightness-95',
								chip
							]}
							onclick={() => rate(card, status)}
						>
							<span class="inline-flex items-center gap-1 text-base font-bold">
								<Icon aria-hidden="true" class="size-4" />
								{label}
							</span>
							<span class="text-xs">{hint}</span>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
