<script lang="ts" module>
	import type { TestCount, TestRange } from './word-test';

	/** What the setup screen chose; Week and Day keep their pick while another range is chosen. */
	export interface TestSetup {
		kind: TestRange['kind'];
		week: number;
		day: number;
		count: TestCount;
	}

	export const rangeOf = ({ kind, week, day }: TestSetup): TestRange =>
		kind === 'week' ? { kind, week } : kind === 'day' ? { kind, day: `w${week}d${day}` } : { kind };
</script>

<script lang="ts">
	import { ChevronLeft } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import SegmentedSetting from '#lib/components/SegmentedSetting.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { wordsRecord } from '#lib/progress/words-store.svelte.js';
	import { cn } from '#lib/utils.js';
	import { testCounts, testWords } from './word-test';

	let {
		setup = $bindable(),
		onStart
	}: {
		setup: TestSetup;
		onStart: () => void;
	} = $props();

	const id = $props.id();
	const kinds: [TestRange['kind'], string][] = [
		['all', '전체'],
		['week', 'Week'],
		['day', 'Day'],
		['saved', '담은 단어'],
		['star', '별표']
	];

	const pool = $derived(testWords(rangeOf(setup), wordsRecord.entries, wordsRecord.saved));
	const size = $derived(Math.min(setup.count, pool.words.length));
	const leftOut = $derived(
		pool.leftOut ? `~·A/B 같은 표현이 든 ${pool.leftOut}개는 빠져요` : undefined
	);
	const empty = $derived.by(() => {
		if (size) return undefined;
		if (setup.kind === 'star') return '별표한 단어가 없어요';
		return pool.leftOut
			? `담은 단어 ${pool.leftOut}개 모두 ~·A/B 같은 표현이라 빠져요`
			: '담은 단어가 없어요';
	});

	const numbers = (count: number) =>
		Array.from({ length: count }, (_, index): [number, string] => [index + 1, `${index + 1}`]);
</script>

<main class="mx-auto w-full max-w-[760px] px-4 pt-1 pb-12">
	<div class="flex items-center gap-0.5">
		<!-- A fixed link, not history.back(), so a test opened from a bookmark still leads out (KTD9). -->
		<a
			href={resolve('/words')}
			aria-label="단어장으로 돌아가기"
			class="-ml-2.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted"
		>
			<ChevronLeft aria-hidden="true" class="size-[22px]" />
		</a>
		<h1 class="text-[22px] font-bold">단어시험</h1>
	</div>
	<p class="mt-1 text-sm text-muted-foreground">뜻을 보고 영어로 써요. 다 풀고 한 번에 채점해요.</p>

	<fieldset class="mt-5">
		<legend class="mx-1 mb-2 font-bold">범위</legend>
		<div class="grid gap-2">
			{#each kinds as [kind, label] (kind)}
				<div
					class={cn(
						'rounded-xl border-[1.5px] bg-card px-4 py-3',
						setup.kind === kind ? 'border-primary bg-accent/50' : 'hover:border-muted-foreground'
					)}
				>
					<label class="flex cursor-pointer items-center gap-3">
						<input
							type="radio"
							name="{id}-kind"
							class="size-5 shrink-0 accent-primary"
							checked={setup.kind === kind}
							onchange={() => (setup.kind = kind)}
						/>
						<span class="font-bold">{label}</span>
					</label>
					{#if setup.kind === kind && (kind === 'week' || kind === 'day')}
						<SegmentedSetting
							label="Week"
							options={numbers(4)}
							value={setup.week}
							onChange={(week) => (setup.week = week)}
						/>
						{#if kind === 'day'}
							<SegmentedSetting
								label="Day"
								options={numbers(5)}
								value={setup.day}
								onChange={(day) => (setup.day = day)}
							/>
						{/if}
					{/if}
				</div>
			{/each}
		</div>
		{#if leftOut && size}
			<p class="mx-1 mt-2 text-[13px] text-muted-foreground">{leftOut}</p>
		{/if}
	</fieldset>

	<SegmentedSetting
		label="문항 수"
		options={testCounts.map((count) => [count, `${count}`])}
		value={setup.count}
		onChange={(count) => (setup.count = count)}
	/>

	<div class="mt-6">
		{#if empty}
			<p id="{id}-empty" class="mb-2 text-center text-sm text-muted-foreground">{empty}</p>
		{/if}
		<Button
			size="touch"
			class="min-h-12 w-full font-bold"
			disabled={!size}
			aria-describedby={empty ? `${id}-empty` : undefined}
			onclick={onStart}
		>
			{size ? `${size}문제로 시작` : '시작'}
		</Button>
	</div>
</main>
