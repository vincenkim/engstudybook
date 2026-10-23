<script lang="ts">
	import { resolve } from '$app/paths';
	import { reviewWords, wordTabHref } from '#lib/components/review/WordReviewList.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import { reviewList } from '#lib/progress/review.js';
	import { progress, questionsOfDay } from '#lib/progress/store.svelte.js';
	import { currentDate, wordsRecord } from '#lib/progress/words-store.svelte.js';

	const id = $props.id();
	const questions = $derived(reviewList(progress, questionsOfDay).length);
	const words = $derived(reviewWords(wordsRecord.entries, currentDate()).length);
	const counts = $derived([
		{ key: 'questions', label: '틀린 문제', count: questions },
		{ key: 'words', label: '복습할 단어', count: words }
	]);
</script>

<section aria-labelledby="review-title" class="flex flex-col rounded-2xl border bg-card p-5">
	<h2 id="review-title" class="text-[17px] font-bold">복습</h2>
	<!-- Each count is a group named by its label, since a description list's terms name nothing. -->
	<div class="mt-3 grid grid-cols-2 gap-2">
		{#each counts as { key, label, count } (key)}
			<div role="group" aria-labelledby="{id}-{key}" class="rounded-xl bg-background p-3">
				<p id="{id}-{key}" class="text-[13px] text-muted-foreground">{label}</p>
				<p class="text-[22px] font-bold">{count}</p>
			</div>
		{/each}
	</div>
	<!-- The review screen opens on 틀린 문제 when it has some, so only words need their tab named. -->
	<Button
		variant="secondary"
		size="touch"
		class="mt-3 min-h-12 w-full font-bold lg:mt-auto"
		href={questions || !words ? resolve('/review') : wordTabHref}
	>
		복습하기
	</Button>
</section>
