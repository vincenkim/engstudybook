<script lang="ts">
	import { MediaQuery } from 'svelte/reactivity';
	import {
		dayContent,
		questionsOf,
		questionsOnPage,
		sectionsOf,
		type QuestionItem
	} from '#lib/content/index.js';
	import { scrollContentToTop } from '#lib/components/shell/content-region.js';
	import { focusMainHeading } from '#lib/components/shell/focus-heading.js';
	import { keyAction, type KeyAction, type KeyPage } from '#lib/keyboard.js';
	import { isRevealed, isStarted, modeOf, pagesOf, questionState } from '#lib/progress/attempt.js';
	import {
		dayProgress,
		goToPage,
		pickAnswer,
		progress,
		toggleFlag
	} from '#lib/progress/store.svelte.js';
	import { speech } from '#lib/speech/player.svelte.js';
	import ActionBar from './ActionBar.svelte';
	import ConceptSheet from './ConceptSheet.svelte';
	import DayStart from './DayStart.svelte';
	import DayTopBar from './DayTopBar.svelte';
	import { focusKind } from './focus-kind';
	import GuidedPage from './GuidedPage.svelte';
	import LessonPage from './LessonPage.svelte';
	import { listeningOnScreen, toggleListening } from './ListenControls.svelte';
	import QuestionMapSheet from './QuestionMapSheet.svelte';
	import QuestionPage from './QuestionPage.svelte';
	import ResultPage from './ResultPage.svelte';
	import SetPage from './SetPage.svelte';

	let { day }: { day: number } = $props();

	const pageKinds = { cover: '시작', lesson: '개념', guided: '따라 풀기', result: '결과' };

	const content = $derived(dayContent(day));
	const questions = $derived(questionsOf(day));
	const dayState = $derived(dayProgress(day));
	const pages = $derived(pagesOf(content, dayState));
	const index = $derived(Math.min(dayState.page, pages.length - 1));
	const page = $derived(pages[index]);
	// The cover and result entries are rebuilt with the page list; keyed by type they stay mounted.
	const pageKey = $derived(page.type === 'cover' || page.type === 'result' ? page.type : page);
	const onPage = $derived(
		page.type === 'question' || page.type === 'set' ? questionsOnPage(page) : []
	);
	const states = $derived(questions.map((q) => questionState(dayState, progress.settings, q)));
	const flags = $derived(dayState.flags ?? []);

	const numberOf = (question: QuestionItem) => questions.indexOf(question) + 1;

	/** The set question moved to or answered last; screen state only, cleared on every page change. */
	let stepped = $state<number | null>(null);
	/** The set's current question (KTD4): the one moved to, else the first unanswered, else the last. */
	const setQuestion = $derived.by(() => {
		if (stepped !== null) return stepped;
		const unanswered = onPage.findIndex((q) => !(q.id in dayState.answers));
		return unanswered === -1 ? onPage.length - 1 : unanswered;
	});
	/** The question the number keys and the flag act on. */
	const current = $derived(page.type === 'set' ? onPage[setQuestion] : onPage[0]);

	/** The topic section of the page, by its place in the full page list, so a retry finds it too. */
	const section = $derived.by(() => {
		if (page.type === 'cover' || page.type === 'result') return undefined;
		const studyIndex = content.pages.indexOf(page) + 1;
		return sectionsOf(day).findLast((s) => s.start.lesson <= studyIndex);
	});

	let mapOpen = $state(false);
	let conceptOpen = $state(false);
	// Set when a page opens from the map, whose closing would otherwise return focus to its opener.
	let focusPageOnClose = false;

	/** After a page change: stop the voice, start at the top and move focus to the new page. */
	function onNavigate() {
		stepped = null;
		speech.stop();
		scrollContentToTop();
		if (mapOpen) {
			focusPageOnClose = true;
			mapOpen = false;
		} else {
			void focusMainHeading();
		}
	}

	function onMapCloseAutoFocus(event: Event) {
		if (!focusPageOnClose) return;
		focusPageOnClose = false;
		event.preventDefault();
		void focusMainHeading();
	}

	function go(target: number) {
		if (target < 0 || target >= pages.length) return;
		goToPage(day, target);
		onNavigate();
	}

	function pick(question: QuestionItem, choice: number) {
		// The answered set question stays current, so its explanation stays on screen.
		if (page.type === 'set') stepped = onPage.indexOf(question);
		const picked = pickAnswer(day, question, choice);
		// Part 2 answers show the script, so stop reading the options aloud.
		if (picked && question.part === 2 && modeOf(dayState, progress.settings) === 'instant') {
			speech.stop();
		}
	}

	function toggleCurrentFlag() {
		if (current) toggleFlag(day, current.id);
	}

	const keyPage = $derived.by((): KeyPage => {
		if (page.type === 'cover') return { kind: 'start' };
		if (page.type === 'set') return { kind: 'set', question: setQuestion, count: onPage.length };
		return { kind: page.type };
	});
	// Sets sit beside their passage from 1024px; narrower screens step through them (KTD12).
	const sideBySide = new MediaQuery('(min-width: 1024px)', false);

	function run(action: KeyAction) {
		switch (action.type) {
			case 'page':
				return go(index + action.step);
			case 'question':
				stepped = setQuestion + action.step;
				return;
			case 'pick':
				if (current) pick(current, action.choice);
				return;
			case 'play':
				return toggleListening();
			case 'flag':
				return toggleCurrentFlag();
			case 'map':
				mapOpen = true;
				return;
			case 'closeSheet':
				mapOpen = conceptOpen = false;
		}
	}

	function onkeydown(event: KeyboardEvent) {
		const action = keyAction(event, {
			sheetOpen: mapOpen || conceptOpen,
			focus: focusKind(document.activeElement),
			page: keyPage,
			listening: listeningOnScreen(),
			sideBySide: sideBySide.current
		});
		if (!action) return;
		event.preventDefault();
		run(action);
	}

	/** 이전/다음 do what ←/→ do: on narrow screens they step through a set before turning the page. */
	function barMove(code: 'ArrowLeft' | 'ArrowRight') {
		const press = { code, ctrlKey: false, altKey: false, metaKey: false, repeat: false };
		const action = keyAction(press, {
			sheetOpen: false,
			focus: 'none',
			page: keyPage,
			listening: false,
			sideBySide: sideBySide.current
		});
		if (action?.type === 'question' || (action?.type === 'page' && pages[index + action.step])) {
			return () => run(action);
		}
	}

	const setAnswers = $derived(
		onPage.map((q) => ({
			picked: dayState.answers[q.id],
			revealed: isRevealed(dayState, progress.settings, q),
			status: questionState(dayState, progress.settings, q)
		}))
	);
</script>

<svelte:window {onkeydown} />

<DayTopBar
	{day}
	status={page.type === 'question' || page.type === 'set'
		? `실전 ${numberOf(onPage[0])} / ${questions.length}`
		: pageKinds[page.type]}
	{states}
	current={onPage.map((q) => numberOf(q) - 1)}
	conceptAvailable={section !== undefined}
	onOpenMap={() => (mapOpen = true)}
	onOpenConcept={() => (conceptOpen = true)}
/>

<main
	class={[
		'mx-auto w-full max-w-[760px] px-4 pt-6 pb-[calc(110px+env(safe-area-inset-bottom))] [&_h2]:outline-none',
		// Part 6·7 sets put the passage beside the questions from 1024px (KTD12).
		page.type === 'set' && page.part >= 6 && 'lg:max-w-[1160px]'
	]}
>
	{#key pageKey}
		{#if page.type === 'cover'}
			<DayStart {day} {onNavigate} />
		{:else if page.type === 'lesson'}
			<LessonPage {page} />
		{:else if page.type === 'guided'}
			<GuidedPage {page} />
		{:else if page.type === 'question'}
			{@const question = onPage[0]}
			<QuestionPage
				{question}
				number={numberOf(question)}
				total={questions.length}
				picked={dayState.answers[question.id]}
				revealed={isRevealed(dayState, progress.settings, question)}
				onPick={(choice) => pick(question, choice)}
			/>
		{:else if page.type === 'set'}
			<SetPage
				{page}
				first={numberOf(onPage[0])}
				total={questions.length}
				answers={setAnswers}
				current={setQuestion}
				onCurrent={(question) => (stepped = question)}
				onPick={pick}
			/>
		{:else}
			<ResultPage {day} {onNavigate} />
		{/if}
	{/key}
</main>

<ActionBar
	flag={current && { on: flags.includes(current.id), toggle: toggleCurrentFlag }}
	onPrev={barMove('ArrowLeft')}
	onNext={barMove('ArrowRight')}
	nextLabel={page.type === 'cover' && !isStarted(dayState) ? '처음부터 시작' : '다음'}
/>

<QuestionMapSheet
	bind:open={mapOpen}
	{day}
	{states}
	current={onPage.map((q) => q.id)}
	onGo={go}
	onCloseAutoFocus={onMapCloseAutoFocus}
/>
{#if section}<ConceptSheet bind:open={conceptOpen} {day} {section} />{/if}
