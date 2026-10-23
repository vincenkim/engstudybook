<script lang="ts">
	import { ChevronRight } from '@lucide/svelte';
	import {
		curriculum,
		dayContent,
		dayTopics,
		questionsOf,
		sectionsOf
	} from '#lib/content/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { isStarted, modeOf, pageOfQuestion, pagesOf } from '#lib/progress/attempt.js';
	import type { Mode } from '#lib/progress/model.js';
	import {
		dayProgress,
		goToPage,
		progress,
		resetDay,
		setDayMode
	} from '#lib/progress/store.svelte.js';
	import { cn } from '#lib/utils.js';
	import { restartWarning } from './labels';
	import PageTag from './PageTag.svelte';
	import { sectionKind, sectionSteps } from './section-steps';

	let { day, onNavigate }: { day: number; onNavigate: () => void } = $props();

	const modes: { mode: Mode; name: string; note: string }[] = [
		{ mode: 'instant', name: '한 문제씩 바로 확인', note: '고를 때마다 정답과 해설을 봐요' },
		{ mode: 'exam', name: '다 풀고 한 번에 채점', note: '시험처럼 끝까지 풀고 점수를 봐요' }
	];

	const id = $props.id();
	const content = $derived(dayContent(day));
	const dayState = $derived(dayProgress(day));
	const mode = $derived(modeOf(dayState, progress.settings));
	const phase = $derived(curriculum.find((p) => p.days.some((d) => d.day === day))?.phase);

	function go(page: number) {
		goToPage(day, page);
		onNavigate();
	}

	/** The first unanswered question, or the result once every question has an answer. */
	function resume() {
		const next = questionsOf(day).find((q) => !(q.id in dayState.answers));
		go(next ? pageOfQuestion(content, dayState, next.id) : pagesOf(content, dayState).length - 1);
	}

	function restart() {
		if (!confirm(restartWarning(day))) return;
		resetDay(day);
		onNavigate();
	}
</script>

<PageTag>Day {day}{phase ? ` · ${phase}` : ''}</PageTag>
<h2 class="page-title">{dayTopics(day).join(' · ')}</h2>

<section aria-labelledby="{id}-goals" class="rounded-2xl border bg-card p-4">
	<h3 id="{id}-goals" class="font-bold">오늘의 목표</h3>
	<ul class="mt-1.5 list-disc pl-5">
		{#each content.goals as goal, index (index)}<li class="my-1">{goal}</li>{/each}
	</ul>
</section>

<h3 class="mx-1 mt-5 mb-2 font-bold">오늘 할 일 · 원하는 곳부터 시작</h3>
{#each sectionsOf(day) as section, index (index)}
	<section
		aria-labelledby="{id}-section-{index}"
		class="mb-2.5 overflow-hidden rounded-2xl border bg-card"
	>
		<div class="px-4 py-3">
			<p class="text-xs font-bold text-primary">{sectionKind(section)}</p>
			<h4 id="{id}-section-{index}" class="font-bold">{section.name}</h4>
		</div>
		{#each sectionSteps(content, section) as step, number (step.name)}
			<button
				type="button"
				class="flex min-h-[52px] w-full items-center gap-3 border-t px-4 py-2 text-left hover:bg-background"
				onclick={() => go(step.page)}
			>
				<span
					aria-hidden="true"
					class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-[13px] font-bold text-muted-foreground"
				>
					{number + 1}
				</span>
				<span class="flex-1">{step.name}</span>
				<span class="text-[13px] text-muted-foreground">{step.size}</span>
				<ChevronRight aria-hidden="true" class="size-4 text-muted-foreground" />
			</button>
		{/each}
	</section>
{/each}

<!-- The grading mode is chosen before the first answer; after that only a restart changes it (KTD13). -->
{#if isStarted(dayState)}
	<section aria-labelledby="{id}-mode" class="mt-5">
		<h3 id="{id}-mode" class="mx-1 font-bold">채점 방식</h3>
		<p class="mx-1 mt-1">{modes.find((m) => m.mode === mode)?.name}</p>
		<p class="mx-1 text-[13px] text-muted-foreground">처음부터 다시 풀면 바꿀 수 있어요.</p>
	</section>
	<div class="mt-5 grid gap-2">
		<Button size="touch" class="min-h-12 font-bold" onclick={resume}>이어서 하기</Button>
		<Button size="touch" variant="outline" class="min-h-12" onclick={restart}>
			처음부터 다시 풀기
		</Button>
	</div>
{:else}
	<fieldset class="mt-5">
		<legend class="mx-1 mb-2 font-bold">채점 방식</legend>
		<div class="grid gap-2">
			{#each modes as option (option.mode)}
				<label
					class={cn(
						'flex cursor-pointer items-start gap-3 rounded-xl border-[1.5px] bg-card px-4 py-3.5',
						mode === option.mode ? 'border-primary bg-accent/50' : 'hover:border-muted-foreground'
					)}
				>
					<input
						type="radio"
						name="{id}-mode"
						class="mt-1 size-5 shrink-0 accent-primary"
						checked={mode === option.mode}
						aria-labelledby="{id}-{option.mode}"
						aria-describedby="{id}-{option.mode}-note"
						onchange={() => setDayMode(day, option.mode)}
					/>
					<span>
						<span id="{id}-{option.mode}" class="block font-bold">{option.name}</span>
						<span id="{id}-{option.mode}-note" class="block text-[13px] text-muted-foreground">
							{option.note}
						</span>
					</span>
				</label>
			{/each}
		</div>
		<p class="mx-1 mt-2 text-[13px] text-muted-foreground">
			이번 풀이에만 적용돼요. 처음부터 다시 풀 때 바꿀 수 있어요.
		</p>
	</fieldset>
{/if}
