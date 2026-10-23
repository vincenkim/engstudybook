<script lang="ts">
	import { Play, SlidersHorizontal } from '@lucide/svelte';
	import SegmentedSetting from '#lib/components/SegmentedSetting.svelte';
	import { Button } from '#lib/components/ui/button/index.js';
	import * as Sheet from '#lib/components/ui/sheet/index.js';
	import {
		exportProgress,
		progress,
		readProgressFile,
		restoreBackup,
		setMode,
		setRate,
		setTheme
	} from '#lib/progress/store.svelte.js';
	import { noVoiceMessage, speech } from '#lib/speech/player.svelte.js';

	const sample = [
		{ text: 'Where is the meeting room?', speaker: 0 },
		{ text: 'On the second floor.', speaker: 1 }
	];

	// The file input lives in the sheet, which stays open while the file is picked and confirmed.
	let fileInput: HTMLInputElement;
	let importMessage = $state('');

	async function importFile() {
		const file = fileInput.files?.[0];
		fileInput.value = '';
		if (!file) return;
		const next = await readProgressFile(file);
		if (!next) {
			importMessage = '기록 파일을 읽을 수 없습니다.';
			return;
		}
		const replaced = next.words
			? '문제집 기록과 단어 기록을'
			: next.unreadableWords
				? '문제집 기록을 (파일의 단어 기록은 읽을 수 없어 지금 단어 기록을 그대로 둡니다)'
				: '문제집 기록을 (단어 기록은 그대로 둡니다)';
		if (!confirm(`지금 ${replaced} 가져온 기록으로 바꿉니다. 계속할까요?`)) return;
		restoreBackup(next);
		importMessage = '기록을 가져왔습니다.';
	}
</script>

<Sheet.Root onOpenChange={(open) => !open && speech.stop()}>
	<Sheet.Trigger
		aria-label="설정"
		class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted"
	>
		<SlidersHorizontal aria-hidden="true" class="size-[22px]" />
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Title>설정</Sheet.Title>
		<section>
			<SegmentedSetting
				label="채점 방식"
				options={[
					['instant', '바로 채점'],
					['exam', '다 풀고 채점']
				]}
				value={progress.settings.mode}
				onChange={setMode}
			/>
			<p class="mt-1 text-sm text-muted-foreground">새로 시작하는 Day의 기본값</p>
			<SegmentedSetting
				label="음성 속도"
				options={[
					[0.8, '느리게'],
					[1, '보통']
				]}
				value={progress.settings.rate}
				onChange={setRate}
			/>
			<SegmentedSetting
				label="화면 테마"
				options={[
					['system', '시스템'],
					['light', '밝게'],
					['dark', '어둡게']
				]}
				value={progress.settings.theme ?? 'system'}
				onChange={setTheme}
			/>
			<div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
				<span class="min-w-[76px] text-sm font-bold">음성 확인</span>
				<Button
					size="touch"
					variant="outline"
					class="min-h-11"
					disabled={!speech.voices.length}
					onclick={() => speech.play(sample, 0, progress.settings.rate)}
				>
					<Play aria-hidden="true" /> 들어보기
				</Button>
				<span class="text-sm text-muted-foreground">
					{speech.voices.length ? `영어 음성 ${speech.voices.length}개 사용 가능` : noVoiceMessage}
				</span>
			</div>
		</section>
		<section class="border-t pt-4">
			<h3 class="font-bold">학습 기록</h3>
			<p class="text-sm text-muted-foreground">
				기록은 이 브라우저에만 저장됩니다. 브라우저 기록을 지우기 전에 내보내 두세요.
			</p>
			<div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
				<Button size="touch" variant="outline" class="min-h-11" onclick={exportProgress}>
					기록 내보내기
				</Button>
				<Button size="touch" variant="outline" class="min-h-11" onclick={() => fileInput.click()}>
					기록 가져오기
				</Button>
				<input
					bind:this={fileInput}
					type="file"
					accept=".json,application/json"
					hidden
					onchange={importFile}
				/>
				<span class="text-sm text-muted-foreground" role="status">{importMessage}</span>
			</div>
		</section>
	</Sheet.Content>
</Sheet.Root>
