<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import type { CardWord } from './card-session';
	import WordLines from './WordLines.svelte';

	let {
		total,
		correct,
		wrong,
		fromCards,
		onCards,
		onRetry,
		onChange
	}: {
		total: number;
		correct: number;
		wrong: { card: CardWord; answer: string }[];
		/** Back from the wrong-word cards, focus returns to the button that opened them (KTD10). */
		fromCards: boolean;
		onCards: () => void;
		onRetry: () => void;
		onChange: () => void;
	} = $props();

	const id = $props.id();
	let cardsButton = $state<HTMLButtonElement | null>(null);

	onMount(() => {
		if (fromCards) cardsButton?.focus();
	});
</script>

<main class="mx-auto w-full max-w-[760px] px-4 pt-1 pb-12">
	<div class="flex items-center gap-0.5">
		<a
			href={resolve('/words')}
			aria-label="단어장으로 돌아가기"
			class="-ml-2.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted"
		>
			<ChevronLeft aria-hidden="true" class="size-[22px]" />
		</a>
		<h1 class="text-[22px] font-bold">시험 결과</h1>
	</div>

	<section class="mt-3 rounded-2xl border bg-card p-5 text-center">
		<p class="text-[44px] font-bold text-ok">{correct} / {total}</p>
		<p class="text-sm text-muted-foreground">
			{wrong.length ? `${wrong.length}개 틀렸어요` : '모두 맞혔어요'}
		</p>
		{#if wrong.length}
			<Button
				bind:ref={cardsButton}
				size="touch"
				class="mt-4 min-h-12 w-full font-bold"
				aria-describedby="{id}-cards"
				onclick={onCards}
			>
				카드로 다시 보기
			</Button>
			<p id="{id}-cards" class="mt-2 text-[13px] text-muted-foreground">
				카드에서 매긴 상태는 단어 기록에 남아요.
			</p>
		{/if}
	</section>

	{#if wrong.length}
		<h2 id="{id}-wrong" class="mx-1 mt-6 mb-2 font-bold">틀린 단어</h2>
		<ul aria-labelledby="{id}-wrong" class="overflow-hidden rounded-2xl border bg-card">
			{#each wrong as { card, answer }, index (index)}
				<li class="border-t px-4 py-3.5 first:border-t-0">
					<p>
						<span class="text-sm font-bold text-ok">정답</span>
						<span lang="en" class="text-lg font-bold">{card.word}</span>
					</p>
					<p class="text-sm">
						<span class="font-bold text-bad">내 답</span>
						{#if answer.trim()}<span lang="en">{answer}</span>{:else}(쓰지 않음){/if}
					</p>
					<div class="mt-1 text-[15px]/[1.6]"><WordLines lines={card.lines} size="sm" /></div>
				</li>
			{/each}
		</ul>
	{/if}

	<div class="mt-6 grid gap-2 sm:grid-cols-2">
		<Button size="touch" variant="outline" class="min-h-12" onclick={onRetry}>
			같은 범위로 다시
		</Button>
		<Button size="touch" variant="outline" class="min-h-12" onclick={onChange}>범위 바꾸기</Button>
	</div>
</main>
