<script lang="ts">
	import DayView from '#lib/components/study/DayView.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head><title>Day {data.day} · 토익 문제집</title></svelte:head>

{#key data.day}<DayView day={data.day} />{/key}
