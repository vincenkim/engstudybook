<script lang="ts">
	import ProgressSummary from '#lib/components/home/ProgressSummary.svelte';
	import ResumeCard from '#lib/components/home/ResumeCard.svelte';
	import ReviewSummary from '#lib/components/home/ReviewSummary.svelte';
	import SettingsSheet from '#lib/components/settings/SettingsSheet.svelte';

	const today = new Date().toLocaleDateString('ko-KR', {
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	});
</script>

<main class="mx-auto w-full max-w-[1080px] px-4 pt-6 pb-12 lg:px-8 lg:pt-8">
	<header class="flex items-start justify-between gap-3">
		<div>
			<p class="text-sm text-muted-foreground">{today}</p>
			<h1 class="mt-1 text-[28px]/[1.25] font-bold tracking-[-0.5px] lg:text-[32px]/[1.25]">
				오늘
			</h1>
		</div>
		<SettingsSheet />
	</header>
	<!-- From 1024px the resume and progress cards take the wide column, review the narrow one. -->
	<div class="mt-4 grid gap-3 lg:mt-6 lg:grid-cols-[2fr_1fr] lg:gap-4">
		<ResumeCard />
		<ReviewSummary />
		<ProgressSummary />
	</div>
</main>
