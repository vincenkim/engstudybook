<script lang="ts">
	import { ArrowLeft, ArrowRight, Flag } from '@lucide/svelte';
	import { Button } from '#lib/components/ui/button/index.js';

	let {
		flag,
		onPrev,
		onNext,
		nextLabel = '다음',
		aboveTabs = false
	}: {
		/** The flag of the current question; left out on pages without questions. */
		flag?: { on: boolean; toggle: () => void };
		/** Left out on the first page, which has nothing before it. */
		onPrev?: () => void;
		/** Left out on the last page, which disables the button. */
		onNext?: () => void;
		nextLabel?: string;
		/** Set where the phone tab bar stays below, which already keeps clear of the home indicator. */
		aboveTabs?: boolean;
	} = $props();
</script>

<!-- Fixed to the content area; the page leaves room for it at the bottom so nothing hides behind it. -->
<nav
	aria-label="페이지 이동"
	class={[
		'fixed inset-x-0 bottom-0 z-10 border-t bg-card',
		aboveTabs ? 'md:pb-[env(safe-area-inset-bottom)]' : 'pb-[env(safe-area-inset-bottom)]'
	]}
>
	<div class="mx-auto flex w-full max-w-[760px] gap-2 px-4 py-2.5">
		{#if flag}
			<Button
				size="touch"
				variant="outline"
				class="min-h-12 w-12 px-0"
				aria-label="깃발"
				aria-pressed={flag.on}
				onclick={flag.toggle}
			>
				<Flag aria-hidden="true" class={['size-5', flag.on && 'fill-flag text-flag']} />
			</Button>
		{/if}
		{#if onPrev}
			<Button size="touch" variant="outline" class="min-h-12" onclick={onPrev}>
				<ArrowLeft aria-hidden="true" /> 이전
			</Button>
		{/if}
		<Button size="touch" class="min-h-12 flex-1 font-bold" disabled={!onNext} onclick={onNext}>
			{nextLabel}
			<ArrowRight aria-hidden="true" />
		</Button>
	</div>
</nav>
