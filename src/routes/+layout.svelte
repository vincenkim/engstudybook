<script lang="ts">
	import './layout.css';
	import { MediaQuery } from 'svelte/reactivity';
	import { afterNavigate } from '$app/navigation';
	import AppNav from '#lib/components/shell/AppNav.svelte';
	import { contentRegionId, scrollContentToTop } from '#lib/components/shell/content-region.js';
	import UpdateNotice from '#lib/components/shell/UpdateNotice.svelte';
	import { progress } from '#lib/progress/store.svelte.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	afterNavigate(scrollContentToTop);

	// app.html sets the theme before the first paint; this keeps it in step with the setting and,
	// for 'system', with the system's. The bar colors match the ones in app.html.
	const systemDark = new MediaQuery('(prefers-color-scheme: dark)');
	const dark = $derived(
		progress.settings.theme === 'dark' ||
			(progress.settings.theme !== 'light' && systemDark.current)
	);
	$effect(() => {
		document.documentElement.dataset.theme = dark ? 'dark' : 'light';
		const bar = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
		if (bar) bar.content = dark ? '#111513' : '#2556c4';
	});
</script>

<!-- The shell renders no <main> or <h1>; each page has exactly one of each. -->
<div class="flex h-dvh flex-col md:flex-row">
	<AppNav />
	<!-- Layout containment makes fixed bars inside a page span the content area, not the menu. -->
	<div class="relative flex min-h-0 min-w-0 flex-1 flex-col contain-layout">
		<UpdateNotice />
		<div id={contentRegionId} class="min-h-0 flex-1 overflow-y-auto">
			{@render children()}
		</div>
	</div>
</div>
