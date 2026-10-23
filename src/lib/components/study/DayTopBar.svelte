<script lang="ts">
	import { ChevronLeft, LayoutGrid, Lightbulb } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { dayTopics } from '#lib/content/index.js';
	import type { QuestionState } from '#lib/progress/attempt.js';
	import DotProgress from './DotProgress.svelte';

	let {
		day,
		status,
		states,
		current,
		conceptAvailable,
		onOpenMap,
		onOpenConcept
	}: {
		day: number;
		/** Where the page sits: '실전 n / 25', or the kind of page. */
		status: string;
		states: QuestionState[];
		current: number[];
		conceptAvailable: boolean;
		onOpenMap: () => void;
		onOpenConcept: () => void;
	} = $props();

	const tool =
		'inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-1.5 rounded-xl text-[13px] hover:bg-muted disabled:opacity-40 md:rounded-full md:border md:bg-card md:px-3';
</script>

<header class="sticky top-0 z-10 border-b bg-card pt-[env(safe-area-inset-top)]">
	<div class="flex items-center gap-1 px-1.5 pt-1 md:px-3">
		<!-- A fixed link, not history.back(), so a Day opened from a bookmark still leads out (KTD9). -->
		<a
			href={resolve('/days')}
			aria-label="문제집으로 돌아가기"
			class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted"
		>
			<ChevronLeft aria-hidden="true" class="size-[22px]" />
		</a>
		<div class="min-w-0 flex-1">
			<h1 class="truncate text-[15px] font-bold outline-none md:text-base">
				Day {day} · {dayTopics(day).join(' · ')}
			</h1>
			<p class="text-xs text-muted-foreground">{status}</p>
		</div>
		<button
			type="button"
			class={tool}
			aria-haspopup="dialog"
			disabled={!conceptAvailable}
			onclick={onOpenConcept}
		>
			<Lightbulb aria-hidden="true" class="size-[22px] md:size-4" />
			<span class="max-md:sr-only">개념 다시 보기</span>
		</button>
		<button type="button" class={tool} aria-haspopup="dialog" onclick={onOpenMap}>
			<LayoutGrid aria-hidden="true" class="size-[22px] md:size-4" />
			<span class="max-md:sr-only">문항 지도</span>
		</button>
	</div>
	<div class="px-1.5 pb-0.5 md:px-3">
		<DotProgress {day} {states} {current} onOpen={onOpenMap} />
	</div>
</header>
