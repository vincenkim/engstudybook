<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import { Button } from '#lib/components/ui/button/index.js';
	import type { CardRating } from './card-session';
	import { wordStatusLabels } from './status-labels';

	let {
		counts,
		onAgain,
		backLabel,
		backHref,
		onBack
	}: {
		counts: Record<CardRating, number>;
		/** Missing when no word was last rated 처음 or 애매. */
		onAgain?: () => void;
		backLabel: string;
		backHref: ResolvedPathname;
		onBack: (event: MouseEvent) => void;
	} = $props();

	const order: CardRating[] = ['new', 'unsure', 'known'];
	const words = $derived(order.reduce((sum, status) => sum + counts[status], 0));
</script>

<section class="mt-3 rounded-2xl border bg-card p-5">
	<h2 class="text-[22px] font-bold tracking-[-0.3px]">이번 세트 끝</h2>
	<p class="mt-1.5 text-[15px] text-muted-foreground">단어 {words}개를 봤어요</p>
	<ul aria-label="평가 결과" class="mt-4 grid grid-cols-3 gap-2">
		{#each order as status (status)}
			{@const { label, icon: Icon, chip } = wordStatusLabels[status]}
			<li class={['rounded-xl p-3 text-center', chip]}>
				<span class="flex items-center justify-center gap-1 text-[13px] font-bold">
					<Icon aria-hidden="true" class="size-3.5" />
					{label}
				</span>
				<span class="block text-2xl font-bold">{counts[status]}</span>
			</li>
		{/each}
	</ul>
	{#if onAgain}
		<Button size="touch" class="mt-5 min-h-12 w-full font-bold" onclick={onAgain}>
			처음·애매만 한 번 더
		</Button>
	{/if}
	<Button
		size="touch"
		variant={onAgain ? 'outline' : 'default'}
		class={['min-h-12 w-full', onAgain ? 'mt-2' : 'mt-5 font-bold']}
		href={backHref}
		onclick={onBack}
	>
		{backLabel}
	</Button>
</section>
