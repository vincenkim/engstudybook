<script lang="ts">
	import { BookOpen, House, RotateCcw } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { cn } from '#lib/utils.js';

	// The wordbook tab stays hidden until phase 2.
	const tabs = [
		{ path: '/', label: '오늘', icon: House, routes: ['/'] },
		{ path: '/days', label: '문제집', icon: BookOpen, routes: ['/days', '/day/[day]'] },
		{ path: '/review', label: '복습', icon: RotateCcw, routes: ['/review'] }
	] as const;

	const isCurrent = (routes: readonly string[]) => routes.some((route) => route === page.route.id);
	// Solving a Day needs the whole phone screen; the rail and sidebar stay beside it.
	const studying = $derived(page.route.id === '/day/[day]');
</script>

<!-- Below 768px a bottom tab bar, up to 1279px a left rail, then a sidebar (KTD12). -->
<nav
	aria-label="주 메뉴"
	class={cn(
		'order-last flex shrink-0 gap-1 border-t bg-card px-2 pt-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))]',
		'md:order-first md:w-[88px] md:flex-col md:items-center md:gap-1.5 md:border-t-0 md:border-r md:px-0 md:py-5',
		'xl:w-60 xl:items-stretch xl:gap-1 xl:px-4 xl:py-7',
		studying && 'max-md:hidden'
	)}
>
	<p class="mx-3 mb-5 hidden text-lg font-bold tracking-[-0.3px] xl:block">토익 문제집</p>
	{#each tabs as { path, label, icon: Icon, routes } (path)}
		<a
			href={resolve(path)}
			aria-current={isCurrent(routes) ? 'page' : undefined}
			class={cn(
				'flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground aria-[current=page]:font-bold aria-[current=page]:text-primary',
				'md:min-h-[60px] md:w-16 md:flex-none md:rounded-[14px] md:hover:bg-muted md:aria-[current=page]:bg-accent md:aria-[current=page]:text-accent-foreground',
				'xl:min-h-11 xl:w-auto xl:flex-row xl:justify-start xl:gap-3 xl:rounded-[10px] xl:px-3 xl:text-[15px]'
			)}
		>
			<Icon aria-hidden="true" class="size-6 xl:size-[22px]" />
			{label}
		</a>
	{/each}
</nav>
