<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '#lib/components/ui/button/index.js';

	let { total, correct, onBack }: { total: number; correct: number; onBack: () => void } = $props();
</script>

<main class="mx-auto w-full max-w-[760px] px-4 pt-6 pb-12 [&_h1]:outline-none">
	<section class="rounded-2xl border bg-card p-5">
		<h1 class="text-[22px] font-bold tracking-[-0.3px]">복습을 마쳤어요</h1>
		<p class="mt-1.5 text-lg"><b>{total}개 중 {correct}개 맞힘</b></p>
		<div class="mt-4 grid grid-cols-2 gap-2">
			<Button size="touch" class="min-h-12 font-bold" onclick={onBack}>복습으로</Button>
			<Button size="touch" variant="outline" class="min-h-12" href={resolve('/')}>오늘로</Button>
		</div>
	</section>
</main>
