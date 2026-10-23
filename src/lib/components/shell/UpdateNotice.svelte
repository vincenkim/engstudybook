<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '#lib/components/ui/button/index.js';

	// A new version installed while the old one serves this tab from its cache.
	let waiting = $state<ServiceWorker | null>(null);

	async function watch(workers: ServiceWorkerContainer, signal: AbortSignal) {
		const registration = await workers.ready;
		if (signal.aborted) return;
		const track = (worker: ServiceWorker | null) =>
			worker?.addEventListener(
				'statechange',
				() => {
					if (worker.state === 'installed') waiting = worker;
				},
				{ signal }
			);
		waiting = registration.waiting;
		// Loading the page may have started installing one already.
		track(registration.installing);
		registration.addEventListener('updatefound', () => track(registration.installing), { signal });
		// An app left open checks for a new version when it shows again; offline, it checks next time.
		document.addEventListener(
			'visibilitychange',
			() => {
				if (document.visibilityState === 'visible') registration.update().catch(() => {});
			},
			{ signal }
		);
	}

	onMount(() => {
		// A tab no worker controls loads the new version by itself.
		if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) return;
		const stop = new AbortController();
		// The new version takes over every tab of the old one, so each reloads into it.
		navigator.serviceWorker.addEventListener('controllerchange', () => location.reload(), {
			signal: stop.signal
		});
		void watch(navigator.serviceWorker, stop.signal);
		return () => stop.abort();
	});
</script>

{#if waiting}
	<div class="flex items-center justify-between gap-3 border-b bg-muted px-4 py-1.5">
		<p role="status" class="text-sm">새 버전이 있어요.</p>
		<Button size="touch" class="min-h-11" onclick={() => waiting?.postMessage('skipWaiting')}>
			새로고침
		</Button>
	</div>
{/if}
