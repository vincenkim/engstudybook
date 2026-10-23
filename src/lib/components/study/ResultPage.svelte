<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { dayTopics, questionsOf, type Part } from '#lib/content/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { modeOf, nextDay, scoreOf } from '#lib/progress/attempt.js';
	import { reviewList } from '#lib/progress/review.js';
	import {
		dayProgress,
		gradeDay,
		progress,
		resetDay,
		retryMissed,
		showAllPages
	} from '#lib/progress/store.svelte.js';
	import { partNames, restartWarning } from './labels';
	import PageTag from './PageTag.svelte';

	let { day, onNavigate }: { day: number; onNavigate: () => void } = $props();

	const id = $props.id();
	const questions = $derived(questionsOf(day));
	const dayState = $derived(dayProgress(day));
	const score = $derived(scoreOf(questions, dayState.answers));
	const awaitingGrade = $derived(
		modeOf(dayState, progress.settings) === 'exam' && !dayState.graded
	);
	// This day's review items (R11), so a review answer leaves this list too: revealed wrong
	// answers, questions waiting in a retry and graded blanks.
	const stillWrong = $derived(reviewList(progress, (d) => (d === day ? questions : null)));
	const partScores = $derived(
		[...new Set(questions.map((q) => q.part))].map((part: Part) => ({
			name: partNames[part],
			...scoreOf(
				questions.filter((q) => q.part === part),
				dayState.answers
			)
		}))
	);
	const next = $derived(nextDay(day));

	const wrongItem =
		'flex min-h-11 items-center gap-2 rounded-xl bg-bad-soft px-3 py-2 text-sm font-bold text-bad';

	function act(action: () => void) {
		action();
		onNavigate();
	}

	function restart() {
		if (confirm(restartWarning(day))) act(() => resetDay(day));
	}
</script>

{#if awaitingGrade}
	<PageTag>채점</PageTag>
	<h2 class="page-title">답안 {score.answered} / {score.total} 작성</h2>
	{#if score.answered < score.total}
		<p class="my-3">아직 풀지 않은 문제가 있습니다. 지금 채점하면 틀린 것으로 처리됩니다.</p>
	{/if}
	<div class="mt-[22px] flex flex-wrap gap-2">
		<Button size="touch" class="font-bold" onclick={() => act(() => gradeDay(day))}>채점하기</Button
		>
	</div>
{:else}
	<section aria-labelledby="{id}-score" class="rounded-2xl border bg-card p-5">
		<h2 id="{id}-score" class="text-sm text-muted-foreground">Day {day} 결과</h2>
		<p class="mt-1.5 text-[44px]/[1.15] font-bold text-ok">
			{score.correct} <span class="text-[22px] text-muted-foreground">/ {score.total}</span>
		</p>
		{#if dayState.firstScore && dayState.firstScore.correct !== score.correct}
			<p class="mt-1.5">첫 점수 <b>{dayState.firstScore.correct}</b> → <b>{score.correct}</b></p>
		{/if}
		<ul class="mt-4 grid gap-2.5 text-sm">
			{#each partScores as part (part.name)}
				<li>
					<span class="flex justify-between gap-2">
						<span>{part.name}</span>
						<span class="font-bold">{part.correct} / {part.total}</span>
					</span>
					<span aria-hidden="true" class="mt-1.5 block h-2 overflow-hidden rounded-full bg-muted">
						<span class="block h-full bg-ok" style:width="{(part.correct / part.total) * 100}%"
						></span>
					</span>
				</li>
			{/each}
		</ul>
		{#if score.correct === score.total}
			<p class="mt-3">모든 문제를 맞혔습니다.</p>
		{:else if score.answered < score.total}
			<p class="mt-3 text-sm text-muted-foreground">
				아직 풀지 않은 문제 {score.total - score.answered}개가 포함되어 있습니다.
			</p>
		{/if}
	</section>

	{#if stillWrong.length}
		<section aria-labelledby="{id}-wrong" class="mt-3 rounded-2xl border bg-card p-4">
			<h2 id="{id}-wrong" class="font-bold">아직 틀린 문제 {stillWrong.length}개</h2>
			<ul class="mt-2.5 grid gap-2">
				{#each stillWrong as { number, question, misses } (question.id)}
					{@const label = `${number}번 · Part ${question.part} · ${misses}번 틀림`}
					<li>
						<!-- A retry keeps to its questions; only '전체 페이지 보기' ends it (KTD13). -->
						{#if dayState.retry}
							<p class={wrongItem}>{label}</p>
						{:else}
							<button
								type="button"
								class={[wrongItem, 'w-full text-left hover:bg-bad-soft/70']}
								onclick={() => act(() => showAllPages(day, question.id))}
							>
								<span class="flex-1">{label}</span>
								<ChevronRight aria-hidden="true" class="size-4" />
							</button>
						{/if}
					</li>
				{/each}
			</ul>
			<p class="mt-2.5 text-[13px] text-muted-foreground">
				틀린 문제는 복습에 담겨 있어요. 맞히면 빠져요.
			</p>
			<!-- Only after a first score, so a partial result never becomes one (KTD14). -->
			{#if dayState.firstScore}
				<Button
					size="touch"
					class="mt-3 min-h-12 w-full font-bold"
					onclick={() => act(() => retryMissed(day))}
				>
					틀린 문제만 다시 풀기
				</Button>
			{/if}
		</section>
	{/if}

	{#if next}
		<section aria-labelledby="{id}-next" class="mt-3 overflow-hidden rounded-2xl border bg-card">
			<h2 id="{id}-next" class="px-4 pt-3.5 pb-2.5 font-bold">다음 할 일</h2>
			<a
				href={resolve('/day/[day]', { day: String(next) })}
				class="flex min-h-15 items-center gap-3 border-t px-4 py-2.5 hover:bg-background"
			>
				<span class="min-w-0 flex-1">
					<span class="block text-xs text-muted-foreground">문제집</span>
					<span class="block font-medium">Day {next} · {dayTopics(next).join(' · ')}</span>
				</span>
				<ChevronRight aria-hidden="true" class="size-[18px] text-muted-foreground" />
			</a>
		</section>
	{/if}

	{#if dayState.retry}
		<Button
			size="touch"
			variant="outline"
			class="mt-3 min-h-12 w-full"
			onclick={() => act(() => showAllPages(day))}
		>
			전체 페이지 보기
		</Button>
	{/if}
	<div class="mt-3 grid grid-cols-2 gap-2">
		<Button size="touch" variant="outline" class="min-h-12 whitespace-normal" onclick={restart}>
			처음부터 다시 풀기
		</Button>
		<Button size="touch" variant="outline" class="min-h-12" href={resolve('/days')}>목차로</Button>
	</div>
{/if}
