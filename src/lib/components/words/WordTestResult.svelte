<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import type { CardDirection } from '#lib/progress/words-store.svelte.js';
	import type { CardWord } from './card-session';
	import { answered } from './word-test';
	import WordLines from './WordLines.svelte';

	let {
		direction,
		total,
		correct,
		wrong,
		left,
		marked,
		fromCards,
		onMark,
		onCards,
		onRetry,
		onChange
	}: {
		direction: CardDirection;
		total: number;
		/** Right answers, with the ones the learner marked right (R10). */
		correct: number;
		/** Every wrong answer, marked or not, so a mark can be taken back. */
		wrong: { card: CardWord; answer: string; lines: CardWord['lines'] }[];
		/** Wrong answers not marked right. */
		left: number;
		marked: ReadonlySet<string>;
		/** Back from the wrong-word cards, focus returns to the button that opened them (KTD10). */
		fromCards: boolean;
		onMark: (key: string) => void;
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
		<!-- Read again when a mark changes the score (R12). -->
		<div role="status">
			<p class="text-[44px] font-bold text-ok">{correct} / {total}</p>
			<p class="text-sm text-muted-foreground">
				{left ? `${left}개 틀렸어요` : '모두 맞혔어요'}
			</p>
		</div>
		{#if left}
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
			{#each wrong as { card, answer, lines }, index (index)}
				<li class="border-t px-4 py-3.5 first:border-t-0">
					{#if direction === 'en-ko'}
						{@const on = marked.has(card.key)}
						<div class="flex items-start justify-between gap-3">
							<div class="min-w-0">
								<p id="{id}-word-{index}" lang="en" class="text-lg font-bold">{card.word}</p>
								<p class="text-sm">
									<span class="font-bold text-bad">내 답</span>
									{answered(answer) ? answer : '(쓰지 않음)'}
									{#if on}<span class="font-bold text-ok">· 맞음으로 침</span>{/if}
								</p>
							</div>
							{#if answered(answer)}
								<Button
									size="touch"
									variant={on ? 'default' : 'outline'}
									class="min-h-11 shrink-0"
									aria-pressed={on}
									aria-describedby="{id}-word-{index}"
									onclick={() => onMark(card.key)}
								>
									맞은 걸로
								</Button>
							{/if}
						</div>
						<p class="mt-1 text-sm font-bold text-ok">정답</p>
					{:else}
						<p>
							<span class="text-sm font-bold text-ok">정답</span>
							<span lang="en" class="text-lg font-bold">{card.word}</span>
						</p>
						<p class="text-sm">
							<span class="font-bold text-bad">내 답</span>
							{#if answer.trim()}<span lang="en">{answer}</span>{:else}(쓰지 않음){/if}
						</p>
					{/if}
					<div class="mt-1 text-[15px]/[1.6]"><WordLines {lines} size="sm" /></div>
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
