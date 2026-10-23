<script lang="ts">
	import { curriculum } from '#lib/content/index.js';
	import { wordDays, wordsOf } from '#lib/content/words.js';
	import { finishedDays } from '#lib/components/workbook/phase-progress.js';
	import { progress } from '#lib/progress/store.svelte.js';
	import { countStatuses, pdfItem } from '#lib/progress/words.js';
	import { wordsRecord } from '#lib/progress/words-store.svelte.js';

	const wordItems = wordDays.flatMap(({ key }) => wordsOf(key).map(pdfItem));
	// The wordbook counts unique words; a repeated word shares one record (R2).
	const wordCount = new Set(wordItems.map(({ key }) => key)).size;
	const known = $derived(countStatuses(wordsRecord.entries, wordItems).known);
</script>

<section aria-labelledby="overall-title" class="rounded-2xl border bg-card p-5">
	<h2 id="overall-title" class="text-[17px] font-bold">전체 진도</h2>
	<ul class="mt-3 grid gap-3">
		{#each curriculum as phase (phase.phase)}
			{@const done = finishedDays(phase, progress.days)}
			<li>
				<div class="flex justify-between gap-2 text-sm">
					<span>{phase.phase}</span>
					<span class="text-muted-foreground">{done} / {phase.days.length}일 완료</span>
				</div>
				<div class="mt-1.5 h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
					<span class="block h-full bg-primary" style:width="{(done / phase.days.length) * 100}%"
					></span>
				</div>
			</li>
		{/each}
		<li>
			<div class="flex justify-between gap-2 text-sm">
				<span>단어장</span>
				<span class="text-muted-foreground">
					완벽 {known.toLocaleString('ko-KR')} / {wordCount.toLocaleString('ko-KR')}단어
				</span>
			</div>
			<div class="mt-1.5 h-2 overflow-hidden rounded-full bg-muted" aria-hidden="true">
				<span class="block h-full bg-word-known" style:width="{(known / wordCount) * 100}%"></span>
			</div>
		</li>
	</ul>
</section>
