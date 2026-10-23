<script lang="ts">
	import { Volume2 } from '@lucide/svelte';
	import type { WordStatus } from '#lib/content/words.js';
	import type { CardDirection } from '#lib/progress/words-store.svelte.js';
	import type { CardWord } from './card-session';
	import { wordStatusLabels } from './status-labels';

	let {
		card,
		direction,
		flipped,
		status,
		onFlip,
		onSpeak,
		frontButton = $bindable(),
		backArea = $bindable()
	}: {
		card: CardWord;
		direction: CardDirection;
		flipped: boolean;
		status: WordStatus;
		onFlip: () => void;
		onSpeak: () => void;
		frontButton?: HTMLButtonElement;
		backArea?: HTMLElement;
	} = $props();

	const { label, icon: Icon, chip } = $derived(wordStatusLabels[status]);
	// From 뜻 to 영어 the front would give the word away, so only the back reads it aloud (KTD10).
	const speakable = $derived(flipped || direction === 'en-ko');
</script>

{#snippet senses()}
	{#each card.lines as line, lineIndex (lineIndex)}
		{@const last = line.senses.length - 1}
		<p>
			{#if line.pos}
				<span
					class="mr-2 inline-block min-w-6 rounded-md bg-muted px-1.5 text-center align-[2px] text-[13px] font-bold text-muted-foreground"
					>{line.pos}</span
				>
			{/if}
			{#each line.senses as sense, index (index)}
				{#if sense.key}<strong>{sense.text}</strong>{:else}{sense.text}{/if}{index < last
					? ', '
					: ''}
			{/each}
		</p>
	{/each}
{/snippet}

<div
	class="mt-4 flex min-h-[400px] flex-col rounded-[20px] border bg-card p-5 shadow-[0_6px_20px_rgb(24_32_27/0.06)]"
>
	<div class="flex min-h-11 items-center justify-between">
		<span
			class={[
				'inline-flex h-[26px] items-center gap-1 rounded-full px-2.5 text-xs font-bold',
				chip
			]}
		>
			<Icon aria-hidden="true" class="size-3.5" />
			<span class="sr-only">지금 상태</span>
			{label}
		</span>
		{#if speakable}
			<button
				type="button"
				aria-label="발음 듣기"
				class="inline-flex size-11 items-center justify-center rounded-xl text-primary hover:bg-muted"
				onclick={onSpeak}
			>
				<Volume2 aria-hidden="true" class="size-[22px]" />
			</button>
		{/if}
	</div>
	{#if flipped}
		<div
			bind:this={backArea}
			tabindex="-1"
			class="flex flex-1 flex-col justify-center gap-1 rounded-xl px-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
		>
			<span lang="en" class="text-[26px] font-bold break-words">{card.word}</span>
			{#if card.ipa}<span class="text-sm text-muted-foreground">{card.ipa}</span>{/if}
			<div class="mt-4 grid gap-2.5 text-[19px]/[1.5]">{@render senses()}</div>
		</div>
	{:else}
		<button
			bind:this={frontButton}
			type="button"
			class="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl px-1 text-center"
			onclick={onFlip}
		>
			{#if direction === 'en-ko'}
				<span lang="en" class="text-[36px]/[1.2] font-bold tracking-[-0.5px] break-words"
					>{card.word}</span
				>
				{#if card.ipa}<span class="text-base text-muted-foreground">{card.ipa}</span>{/if}
			{:else}
				<span class="grid gap-2.5 text-[21px]/[1.5]">{@render senses()}</span>
			{/if}
			<span class="mt-6 text-[13px] text-muted-foreground">
				카드를 누르면 {direction === 'en-ko' ? '뜻이' : '영어가'} 보여요
			</span>
		</button>
	{/if}
</div>
