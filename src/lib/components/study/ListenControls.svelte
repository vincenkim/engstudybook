<script module lang="ts">
	/** The play toggle of the controls on screen, which Space reaches from the page's key handler. */
	let onScreen: (() => void) | null = null;

	export const listeningOnScreen = () => onScreen !== null;
	export const toggleListening = () => onScreen?.();
</script>

<script lang="ts">
	import { Play, RotateCcw, Square } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import type { Rate } from '#lib/progress/model.js';
	import { progress, setRate } from '#lib/progress/store.svelte.js';
	import { noVoiceMessage, speech, type SpokenLine } from '#lib/speech/player.svelte.js';
	import { letters } from './labels';

	let {
		lines,
		seed,
		scriptToggle = false,
		scriptOpen = $bindable(false)
	}: {
		lines: SpokenLine[];
		seed: number;
		scriptToggle?: boolean;
		scriptOpen?: boolean;
	} = $props();

	const rates: [Rate, string][] = [
		[0.8, '0.8배'],
		[1, '1배']
	];

	const ready = $derived(speech.voices.length > 0);
	// Part 2 reads its question (speaker 0), then responses A–C (speaker 1); sets read script lines.
	const responses = $derived(lines.every((line) => typeof line.speaker === 'number'));
	const steps = $derived(
		lines.map((_, index) => (!responses ? `${index + 1}` : index ? letters[index - 1] : '질문'))
	);
	const reading = $derived(speech.playing ? speech.line : -1);
	const status = $derived.by(() => {
		if (reading < 0)
			return responses ? `질문 하나, 응답 ${lines.length - 1}개` : `모두 ${lines.length}줄`;
		if (!responses) return `${reading + 1} / ${lines.length}줄 듣는 중`;
		return reading ? `응답 (${steps[reading]}) 듣는 중` : '질문 듣는 중';
	});

	// The speed applies from the next play (KTD16).
	const play = () => speech.play(lines, seed, progress.settings.rate);

	function toggle() {
		if (speech.playing) speech.stop();
		else play();
	}

	onMount(() => {
		onScreen = toggle;
		return () => {
			if (onScreen === toggle) onScreen = null;
			speech.stop();
		};
	});
</script>

<section aria-label="듣기" class="mt-1.5 mb-[18px] rounded-2xl border bg-card p-4">
	<div class="flex items-center gap-4">
		<button
			type="button"
			class="inline-flex size-[72px] shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground outline-none hover:bg-primary/80 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"
			aria-label={speech.playing ? '정지' : '듣기'}
			disabled={!ready}
			onclick={toggle}
		>
			{#if speech.playing}
				<Square aria-hidden="true" class="size-7 fill-current" />
			{:else}
				<Play aria-hidden="true" class="size-8 translate-x-0.5 fill-current" />
			{/if}
		</button>
		<div class="min-w-0 flex-1">
			<p class="text-[15px] font-bold">{status}</p>
			<ol aria-label="듣기 순서" class="mt-2.5 flex gap-1">
				{#each steps as step, index (index)}
					<li class="flex-1 text-center" aria-current={index === reading ? 'step' : undefined}>
						<span
							class={['block h-1.5 rounded-full', index <= reading ? 'bg-primary' : 'bg-border']}
						></span>
						<span
							class={[
								'text-xs',
								index === reading ? 'font-bold' : 'text-muted-foreground',
								!responses && 'sr-only'
							]}>{step}</span
						>
					</li>
				{/each}
			</ol>
		</div>
	</div>
	<div class="mt-4 flex flex-wrap items-center gap-2">
		<Button size="touch" variant="outline" disabled={!ready} onclick={play}>
			<RotateCcw aria-hidden="true" /> 처음부터
		</Button>
		{#if scriptToggle}
			<Button size="touch" variant="outline" onclick={() => (scriptOpen = !scriptOpen)}>
				{scriptOpen ? '스크립트 숨기기' : '스크립트 보기'}
			</Button>
		{/if}
		<div
			role="group"
			aria-label="음성 속도"
			class="ml-auto inline-flex rounded-[10px] bg-muted p-[3px]"
		>
			{#each rates as [rate, label] (rate)}
				<button
					type="button"
					class={[
						'min-h-10 rounded-lg px-3.5 text-sm',
						progress.settings.rate === rate
							? 'bg-card font-bold shadow-sm'
							: 'text-muted-foreground hover:text-foreground'
					]}
					aria-pressed={progress.settings.rate === rate}
					onclick={() => setRate(rate)}
				>
					{label}
				</button>
			{/each}
		</div>
	</div>
	{#if !ready}<p class="mt-3 text-sm text-muted-foreground">{noVoiceMessage}</p>{/if}
</section>
