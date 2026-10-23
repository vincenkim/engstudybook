<script lang="ts">
	import './layout.css';
	import { afterNavigate } from '$app/navigation';
	import AppNav from '#lib/components/shell/AppNav.svelte';
	import { contentRegionId, scrollContentToTop } from '#lib/components/shell/content-region.js';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	afterNavigate(scrollContentToTop);
</script>

<!-- The shell renders no <main> or <h1>; each page has exactly one of each. -->
<div class="flex h-dvh flex-col md:flex-row">
	<AppNav />
	<!-- Layout containment makes fixed bars inside a page span the content area, not the menu. -->
	<div class="relative min-h-0 min-w-0 flex-1 contain-layout">
		<div id={contentRegionId} class="h-full overflow-y-auto">
			{@render children()}
		</div>
	</div>
</div>
