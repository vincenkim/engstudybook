<script lang="ts">
	import { onMount, untrack } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import type { CardDirection } from '#lib/progress/words-store.svelte.js';
	import { speech } from '#lib/speech/player.svelte.js';
	import WordLines from './WordLines.svelte';
	import WordTestWordPrompt from './WordTestWordPrompt.svelte';
	import { answered, hintOf, questionLines, spokenHint, type TestQuestion } from './word-test';

	let {
		questions,
		direction,
		onExit,
		onFinish
	}: {
		questions: TestQuestion[];
		direction: CardDirection;
		onExit: () => void;
		onFinish: (answers: string[]) => void;
	} = $props();

	const id = $props.id();
	// The questions are fixed when the test starts (R7).
	let answers = $state(untrack(() => questions.map(() => '')));
	let index = $state(0);
	let input: HTMLInputElement;
	let gradeButton = $state<HTMLButtonElement | null>(null);
	// Chrome's Korean IME sends the Enter that ends a composition twice: while composing, then plain,
	// before the key comes up. An Android keyboard ends composing a word and sends one plain Enter.
	let composingEnter = false;
	// 영어 → 뜻 moves on as Enter comes up: composing has ended then and the last syllable is in. A
	// Korean IME may report the Enter that ends composing as 'Process' (KTD5).
	let enterDown = false;
	const meaningTest = $derived(direction === 'en-ko');

	const card = $derived(questions[index].card);
	const lines = $derived(questionLines(card));
	const meaning = $derived(
		lines
			.flatMap(({ pos, senses }) => [pos, senses.map(({ text }) => text).join(', ')])
			.filter(Boolean)
			.join(' ')
	);
	const last = $derived(index === questions.length - 1);
	const blanks = $derived(answers.filter((answer) => !answered(answer)).length);

	// One answer box for the whole test, so the phone keyboard stays open between questions (KTD4).
	function move(step: number) {
		speech.stop();
		index += step;
		input.focus();
	}

	const next = () => (last ? gradeButton?.focus() : move(1));

	function keydown(event: KeyboardEvent) {
		if (meaningTest) {
			if (event.key !== 'Enter') enterDown = event.keyCode === 229;
			else if (!event.repeat) enterDown = true;
			return;
		}
		// A held Enter repeats; the repeats must not run on through the questions into grading.
		if (event.key !== 'Enter' || event.repeat) return;
		if (event.isComposing || event.keyCode === 229) {
			composingEnter = true;
			return;
		}
		if (composingEnter) return;
		event.preventDefault();
		next();
	}

	function keyup(event: KeyboardEvent) {
		composingEnter = false;
		const pressed = enterDown && event.key === 'Enter';
		enterDown = false;
		if (meaningTest && pressed) next();
	}

	function exit() {
		if (answers.some(answered) && !confirm('지금까지 쓴 답이 사라져요. 시험을 그만둘까요?')) return;
		onExit();
	}

	onMount(() => {
		input.focus();
		return () => speech.stop();
	});
</script>

<main class="mx-auto w-full max-w-[760px] px-4 pt-1 pb-12">
	<div class="flex min-h-11 items-center gap-2">
		<h1 class="flex-1 text-base font-bold">단어시험</h1>
		<p role="status" class="text-sm text-muted-foreground">
			<span class="sr-only">문제</span>
			{index + 1} / {questions.length}
			<span class="sr-only">
				·
				{#if meaningTest}<span lang="en">{card.word}</span>{:else}{meaning}{/if}
			</span>
		</p>
		<Button variant="ghost" size="touch" class="-mr-2.5 min-h-11" onclick={exit}>나가기</Button>
	</div>

	<section class="mt-3 rounded-2xl border bg-card p-5">
		{#if meaningTest}
			<WordTestWordPrompt {card} wordId="{id}-word" />
			<span id="{id}-asks" class="sr-only">뜻</span>
		{:else}
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
		{/if}
		<input
			bind:this={input}
			bind:value={answers[index]}
			type="text"
			lang={meaningTest ? 'ko' : 'en'}
			autocapitalize="none"
			autocorrect="off"
			spellcheck="false"
			autocomplete="off"
			aria-labelledby={meaningTest ? `${id}-word ${id}-asks` : `${id}-meaning`}
			aria-describedby={meaningTest ? undefined : `${id}-hint`}
			class="mt-3 h-12 w-full rounded-xl border-[1.5px] bg-background px-3 text-lg outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/50"
			onkeydown={keydown}
			onkeyup={keyup}
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
