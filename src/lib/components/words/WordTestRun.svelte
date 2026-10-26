<script lang="ts">
	import { onMount, untrack } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import WordLines from './WordLines.svelte';
	import { answered, hintOf, questionLines, spokenHint, type TestQuestion } from './word-test';

	let {
		questions,
		onExit,
		onFinish
	}: {
		questions: TestQuestion[];
		onExit: () => void;
		onFinish: (answers: string[]) => void;
	} = $props();

	const id = $props.id();
	// The questions are fixed when the test starts (R7).
	let answers = $state(untrack(() => questions.map(() => '')));
	let index = $state(0);
	let input: HTMLInputElement;
	let gradeButton = $state<HTMLButtonElement | null>(null);
	// A Korean IME sends the Enter that ends a composition once more, until the key comes up (KTD5).
	let composed = false;

	const card = $derived(questions[index].card);
	const lines = $derived(questionLines(card));
	const meaning = $derived(
		lines
			.map(({ pos, senses }) => [pos, senses.map(({ text }) => text).join(', ')])
			.flat()
			.filter(Boolean)
			.join(' ')
	);
	const last = $derived(index === questions.length - 1);
	const blanks = $derived(answers.filter((answer) => !answered(answer)).length);

	// One answer box for the whole test, so the phone keyboard stays open between questions (KTD4).
	function move(step: number) {
		index += step;
		input.focus();
	}

	function keydown(event: KeyboardEvent) {
		if (event.key !== 'Enter' || event.isComposing || event.keyCode === 229 || composed) return;
		event.preventDefault();
		if (last) gradeButton?.focus();
		else move(1);
	}

	function exit() {
		if (answers.some(answered) && !confirm('지금까지 쓴 답이 사라져요. 시험을 그만둘까요?')) return;
		onExit();
	}

	onMount(() => input.focus());
</script>

<main class="mx-auto w-full max-w-[760px] px-4 pt-1 pb-12">
	<div class="flex min-h-11 items-center gap-2">
		<h1 class="flex-1 text-base font-bold">단어시험</h1>
		<p role="status" class="text-sm text-muted-foreground">
			<span class="sr-only">문제</span>
			{index + 1} / {questions.length}
			<span class="sr-only">· {meaning}</span>
		</p>
		<Button variant="ghost" size="touch" class="-mr-2.5 min-h-11" onclick={exit}>나가기</Button>
	</div>

	<section class="mt-3 rounded-2xl border bg-card p-5">
		<div id="{id}-meaning" class="grid gap-2.5 text-[19px]/[1.5]">
			<WordLines {lines} size="lg" />
		</div>
		<p
			aria-hidden="true"
			lang="en"
			class="mt-4 text-lg font-bold whitespace-pre text-muted-foreground"
		>
			{hintOf(card.word)}
		</p>
		<p id="{id}-hint" class="sr-only">{spokenHint(card.word)}</p>
		<input
			bind:this={input}
			bind:value={answers[index]}
			type="text"
			lang="en"
			autocapitalize="none"
			autocorrect="off"
			spellcheck="false"
			autocomplete="off"
			aria-labelledby="{id}-meaning"
			aria-describedby="{id}-hint"
			class="mt-3 h-12 w-full rounded-xl border-[1.5px] bg-background px-3 text-lg outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/50"
			onkeydown={keydown}
			oncompositionend={() => (composed = true)}
			onkeyup={() => (composed = false)}
		/>
		<div class="mt-3 grid grid-cols-2 gap-2">
			<Button
				size="touch"
				variant="outline"
				class="min-h-12"
				disabled={index === 0}
				onclick={() => move(-1)}
			>
				이전
			</Button>
			{#if last}
				<Button
					bind:ref={gradeButton}
					size="touch"
					class="min-h-12 font-bold"
					onclick={() => onFinish(answers)}
				>
					채점하기
				</Button>
			{:else}
				<Button size="touch" class="min-h-12 font-bold" onclick={() => move(1)}>다음</Button>
			{/if}
		</div>
		{#if last && blanks}
			<p class="mt-3 text-sm text-muted-foreground">
				쓰지 않은 답이 {blanks}개 있어요. 채점하면 틀린 것으로 쳐요.
			</p>
		{/if}
	</section>
</main>
