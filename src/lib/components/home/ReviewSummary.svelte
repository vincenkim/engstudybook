<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';
	import { reviewList } from '#lib/progress/review.js';
	import { progress, questionsOfDay } from '#lib/progress/store.svelte.js';

	const count = $derived(reviewList(progress, questionsOfDay).length);
</script>

<section aria-labelledby="review-title" class="flex flex-col rounded-2xl border bg-card p-5">
	<h2 id="review-title" class="text-[17px] font-bold">복습</h2>
	<dl class="mt-3 rounded-xl bg-background p-3">
		<dt class="text-[13px] text-muted-foreground">틀린 문제</dt>
		<dd class="text-[22px] font-bold">{count}</dd>
	</dl>
	<Button
		variant="secondary"
		size="touch"
		class="mt-3 min-h-12 w-full font-bold lg:mt-auto"
		href={resolve('/review')}
	>
		복습하기
	</Button>
</section>
