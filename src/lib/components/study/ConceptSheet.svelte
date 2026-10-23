<script lang="ts">
	import { dayContent, type LessonPage as Lesson, type Section } from '#lib/content/index.js';
	import * as Sheet from '#lib/components/ui/sheet/index.js';
	import LessonPage from './LessonPage.svelte';
	import { stepPages } from './section-steps';

	let {
		open = $bindable(false),
		day,
		section
	}: { open?: boolean; day: number; section: Section } = $props();

	const lessons = $derived(
		stepPages(dayContent(day), section.start.lesson).filter(
			(page): page is Lesson => page.type === 'lesson'
		)
	);
</script>

<!-- Shows the lessons over the page instead of leaving it, so the place in the Day is kept. -->
<Sheet.Root bind:open>
	<Sheet.Content class="md:max-w-xl">
		<Sheet.Title>개념 다시 보기</Sheet.Title>
		<Sheet.Description class="-mt-3 text-sm text-muted-foreground">
			{section.name}
		</Sheet.Description>
		{#each lessons as lesson, index (index)}
			<div class={[index > 0 && 'border-t pt-5']}>
				<LessonPage page={lesson} />
			</div>
		{/each}
	</Sheet.Content>
</Sheet.Root>
