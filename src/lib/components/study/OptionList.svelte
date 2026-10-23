<script lang="ts">
	import { Check, X } from '@lucide/svelte';
	import { letters } from './labels';

	let {
		options,
		answer,
		notes,
		picked,
		revealed,
		showText,
		large = true,
		onPick
	}: {
		options: string[];
		answer: number;
		notes?: string[];
		picked?: number;
		revealed: boolean;
		showText: boolean;
		large?: boolean;
		/** Without it the options are a worked example and cannot be chosen. */
		onPick?: (index: number) => void;
	} = $props();

	const stateOf = (index: number) => {
		if (!revealed) return index === picked ? 'picked' : 'idle';
		return index === answer ? 'correct' : index === picked ? 'wrong' : 'idle';
	};

	const tone = {
		idle: 'border-border bg-card',
		picked: 'border-brand bg-accent',
		correct: 'border-ok bg-ok-soft',
		wrong: 'border-bad bg-bad-soft'
	};
</script>

<div class="grid gap-2">
	{#each options as option, index (index)}
		{@const state = stateOf(index)}
		{@const choosable = !revealed && !!onPick}
		<!-- Revealed options stay focusable (aria-disabled) so keyboard focus is not lost. -->
		<button
			type="button"
			class={[
				'flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-[10px] border-[1.5px] px-3.5 py-3 text-left',
				tone[state],
				choosable && 'cursor-pointer hover:border-brand',
				choosable && state === 'idle' && 'hover:bg-accent'
			]}
			disabled={!onPick}
			aria-disabled={revealed || undefined}
			aria-pressed={!revealed && onPick ? index === picked : undefined}
			onclick={() => choosable && onPick?.(index)}
		>
			<span
				class={[
					'font-bold',
					state === 'picked' ? 'text-accent-foreground' : 'text-muted-foreground'
				]}
			>
				({letters[index]})
			</span>
			{#if showText}
				<span class={large ? 'text-lg' : 'text-base'} lang="en">{option}</span>
			{/if}
			{#if state === 'correct'}
				<Check class="size-4 self-center text-ok" aria-hidden="true" />
				<span class="sr-only">정답</span>
			{:else if state === 'wrong'}
				<X class="size-4 self-center text-bad" aria-hidden="true" />
				<span class="sr-only">고른 답</span>
			{/if}
			{#if revealed && notes}
				<span class="ml-auto text-[13px] text-muted-foreground">{notes[index]}</span>
			{/if}
		</button>
	{/each}
</div>
