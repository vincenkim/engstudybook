<script lang="ts">
	import type { QuestionItem } from '#lib/content/index.js';
	import { letters } from './labels';

	let {
		question,
		picked,
		revealed
	}: { question: QuestionItem; picked: number | undefined; revealed: boolean } = $props();

	const correct = $derived(picked === question.answer);
	const verdict = $derived.by(() => {
		if (correct) return '정답입니다';
		const reason = picked === undefined ? '풀지 않은 문제입니다' : '오답입니다';
		return `${reason} · 정답 (${letters[question.answer]})`;
	});
</script>

<!-- Always rendered so screen readers announce the verdict when it appears. -->
<p
	role="status"
	class={['font-bold', revealed && 'mt-5 mb-2 text-lg', correct ? 'text-ok' : 'text-bad']}
>
	{revealed ? verdict : ''}
</p>
