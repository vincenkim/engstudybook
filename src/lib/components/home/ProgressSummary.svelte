<script lang="ts">
	import { curriculum } from '#lib/content/index.js';
	import { finishedDays } from '#lib/components/workbook/phase-progress.js';
	import { progress } from '#lib/progress/store.svelte.js';
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
	</ul>
</section>
