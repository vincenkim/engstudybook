<script lang="ts">
	import { Check, Flag, X } from '@lucide/svelte';
	import { dayContent, questionsOf, sectionsOf } from '#lib/content/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Sheet from '#lib/components/ui/sheet/index.js';
	import { pageOfQuestion, pagesOf, type QuestionState } from '#lib/progress/attempt.js';
	import { dayProgress } from '#lib/progress/store.svelte.js';
	import { cn } from '#lib/utils.js';
	import { questionStateNames } from './question-states';
	import { sectionKind, sectionSteps } from './section-steps';

	let {
		open = $bindable(false),
		day,
		states,
		current,
		onGo,
		onCloseAutoFocus
	}: {
		open?: boolean;
		day: number;
		/** One state per question of the day, in order. */
		states: QuestionState[];
		/** Ids of the questions on the page shown. */
		current: string[];
		/** Opens a study page; the caller closes the sheet. */
		onGo: (page: number) => void;
		onCloseAutoFocus: (event: Event) => void;
	} = $props();

	const id = $props.id();
	const content = $derived(dayContent(day));
	const questions = $derived(questionsOf(day));
	const dayState = $derived(dayProgress(day));
	const flags = $derived(dayState.flags ?? []);
	const resultPage = $derived(pagesOf(content, dayState).length - 1);

	const cellStyles: Record<QuestionState, string> = {
		correct: 'bg-ok text-card',
		wrong: 'bg-bad text-card',
		answered: 'bg-muted-foreground text-card',
		unanswered: 'bg-muted text-muted-foreground ring-1 ring-border ring-inset'
	};
	const legend: QuestionState[] = ['correct', 'wrong', 'answered', 'unanswered'];
</script>

<Sheet.Root bind:open>
	<Sheet.Content {onCloseAutoFocus}>
		<Sheet.Title>Day {day} 문항 지도</Sheet.Title>
		<ul aria-label="표시 설명" class="-mt-2 flex flex-wrap gap-x-3.5 gap-y-1 text-[13px]">
			{#each legend as state (state)}
				<li class="inline-flex items-center gap-1.5 text-muted-foreground">
					<span class={cn('size-3.5 rounded', cellStyles[state])}></span>
					{questionStateNames[state]}
				</li>
			{/each}
			<li class="inline-flex items-center gap-1.5 text-muted-foreground">
				<Flag aria-hidden="true" class="size-3.5 fill-flag text-flag" /> 깃발
			</li>
		</ul>

		{#each sectionsOf(day) as section, index (index)}
			<section aria-labelledby="{id}-{index}">
				<h3 id="{id}-{index}" class="font-bold">{section.name} ({sectionKind(section)})</h3>
				<!-- A retry keeps to its questions; only '전체 페이지 보기' on the result ends it (KTD13). -->
				{#if !dayState.retry}
					<div class="mt-2 flex flex-wrap gap-1.5">
						{#each sectionSteps(content, section) as step (step.name)}
							{#if step.name !== '실전'}
								<Button
									size="touch"
									variant="outline"
									class="min-h-11 rounded-full text-[13px]"
									onclick={() => onGo(step.page)}
								>
									{step.name}
									{step.size}
								</Button>
							{/if}
						{/each}
					</div>
				{/if}
				<div class="mt-2.5 grid grid-cols-5 gap-2">
					{#each section.questions as question (question.id)}
						{@const number = questions.indexOf(question) + 1}
						{@const state = states[number - 1]}
						{@const flagged = flags.includes(question.id)}
						{@const page = pageOfQuestion(content, dayState, question.id)}
						<button
							type="button"
							class={cn(
								'relative flex h-12 items-center justify-center gap-0.5 rounded-xl text-[15px] font-bold disabled:opacity-50',
								cellStyles[state],
								current.includes(question.id) && 'ring-2 ring-foreground ring-offset-2'
							)}
							aria-label="{number}번, {questionStateNames[state]}{flagged ? ', 깃발' : ''}"
							aria-current={current.includes(question.id) || undefined}
							disabled={page === -1}
							onclick={() => onGo(page)}
						>
							{number}
							{#if state === 'correct'}
								<Check aria-hidden="true" class="size-3.5" />
							{:else if state === 'wrong'}
								<X aria-hidden="true" class="size-3.5" />
							{/if}
							{#if flagged}
								<Flag
									aria-hidden="true"
									class="absolute top-0.5 right-0.5 size-4 rounded-full bg-card fill-flag p-0.5 text-flag"
								/>
							{/if}
						</button>
					{/each}
				</div>
			</section>
		{/each}

		<Button size="touch" variant="outline" class="min-h-12" onclick={() => onGo(resultPage)}>
			지금까지 결과 보기
		</Button>
	</Sheet.Content>
</Sheet.Root>
