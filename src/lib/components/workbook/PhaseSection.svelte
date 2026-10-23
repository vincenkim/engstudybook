<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import { Collapsible } from 'bits-ui';
	import { progress } from '#lib/progress/store.svelte.js';
	import DayRow from './DayRow.svelte';
	import { finishedDays, type Phase } from './phase-progress.js';

	/** `current` is the day to continue, marked in its row. */
	let {
		phase,
		current,
		open = $bindable(false)
	}: { phase: Phase; current: number | null; open?: boolean } = $props();
</script>

<Collapsible.Root bind:open class="overflow-hidden rounded-2xl border bg-card">
	<h2>
		<Collapsible.Trigger
			class="group flex min-h-11 w-full items-center gap-3 p-4 text-left hover:bg-background"
		>
			<span class="min-w-0 flex-1">
				<span class="block font-bold">{phase.phase}</span>
				<span class="mt-0.5 block text-[13px] text-muted-foreground">
					{phase.mix} ·
					<span class="whitespace-nowrap">
						{finishedDays(phase, progress.days)} / {phase.days.length}일 완료
					</span>
				</span>
			</span>
			<ChevronDown
				aria-hidden="true"
				class="size-5 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180"
			/>
		</Collapsible.Trigger>
	</h2>
	<Collapsible.Content>
		<ul>
			{#each phase.days as { day } (day)}
				<li><DayRow {day} current={day === current} /></li>
			{/each}
		</ul>
	</Collapsible.Content>
</Collapsible.Root>
