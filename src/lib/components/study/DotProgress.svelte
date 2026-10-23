<script lang="ts">
	import { sectionsOf } from '#lib/content/index.js';
	import type { QuestionState } from '#lib/progress/attempt.js';
	import { cn } from '#lib/utils.js';
	import { questionDotStyles } from './question-states';

	let {
		day,
		states,
		current,
		onOpen
	}: {
		day: number;
		/** One state per question of the day, in order. */
		states: QuestionState[];
		/** Indexes of the questions on the page shown. */
		current: number[];
		onOpen: () => void;
	} = $props();

	/** Question indexes grouped by section, so a gap marks where the next topic starts. */
	const groups = $derived.by(() => {
		let next = 0;
		return sectionsOf(day).map((section) => section.questions.map(() => next++));
	});

	const label = $derived.by(() => {
		const count = (state: QuestionState) => states.filter((s) => s === state).length;
		const solved = states.length - count('unanswered');
		const revealed = count('correct') + count('wrong');
		const result = revealed ? `, 맞힘 ${count('correct')}, 틀림 ${count('wrong')}` : '';
		return `실전 ${states.length}문항 중 ${solved}문항 풂${result}`;
	});
</script>

<button
	type="button"
	class="flex min-h-11 w-full items-center gap-1.5 rounded-lg px-1.5 hover:bg-muted"
	aria-label={label}
	aria-haspopup="dialog"
	onclick={onOpen}
>
	{#each groups as group, index (index)}
		<span class="flex gap-[3px]" style:flex={group.length}>
			{#each group as question (question)}
				<span
					class={cn(
						'h-1.5 flex-1 rounded-full',
						questionDotStyles[states[question]],
						current.includes(question) && 'h-2 ring-2 ring-foreground ring-offset-1'
					)}
				></span>
			{/each}
		</span>
	{/each}
</button>
