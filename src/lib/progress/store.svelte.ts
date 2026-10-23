import {
	dayContent,
	hasDay,
	questionsOf,
	questionsOnPage,
	type QuestionItem
} from '#lib/content/index.js';
import * as attempt from './attempt';
import {
	defaultProgress,
	newDayProgress,
	parseProgress,
	type DayProgress,
	type Mode,
	type Progress,
	type QuestionsOfDay,
	type Rate,
	type Theme
} from './model';
import { pickInReview } from './review';

const storageKey = 'toeicBasic.v2';
const legacyKey = 'toeicBasic.v1';

export const questionsOfDay: QuestionsOfDay = (day) => (hasDay(day) ? questionsOf(day) : null);

function readStorage(): Progress {
	try {
		for (const key of [storageKey, legacyKey]) {
			const raw = localStorage.getItem(key);
			if (raw) return parseProgress(JSON.parse(raw), questionsOfDay) ?? defaultProgress();
		}
	} catch {
		// Storage blocked or corrupt: start with an empty record.
	}
	return defaultProgress();
}

export const progress = $state(readStorage());

function save() {
	try {
		localStorage.setItem(storageKey, JSON.stringify(progress));
	} catch {
		// Storage blocked (private mode): progress lives for this session only.
	}
}

/** Read-only view of a day's progress; a fresh empty record when the day has not been opened. */
export const dayProgress = (day: number): DayProgress => progress.days[day] ?? newDayProgress();

const ensureDay = (day: number) => (progress.days[day] ??= newDayProgress());

const studyPages = (day: number) => attempt.pagesOf(dayContent(day), dayProgress(day));

export function goToPage(day: number, index: number) {
	if (index < 0 || index >= studyPages(day).length) return;
	ensureDay(day).page = index;
	progress.lastDay = day;
	save();
}

export function pickAnswer(day: number, question: QuestionItem, index: number) {
	const changed = attempt.pick(
		ensureDay(day),
		progress.settings,
		questionsOf(day),
		question,
		index
	);
	if (changed) {
		progress.lastDay = day;
		save();
	}
	return changed;
}

/** Answers a question again from the review (KTD6); the Day keeps its page, retry and grading. */
export function answerInReview(day: number, question: QuestionItem, index: number) {
	const changed = pickInReview(ensureDay(day), question, index);
	if (changed) save();
	return changed;
}

export function gradeDay(day: number) {
	attempt.grade(ensureDay(day), questionsOf(day));
	save();
}

export function retryMissed(day: number) {
	attempt.startRetry(ensureDay(day), questionsOf(day));
	save();
}

/** Leaves retry mode, optionally jumping to the page holding the given question. */
export function showAllPages(day: number, questionId?: string) {
	const state = ensureDay(day);
	state.retry = null;
	const index = studyPages(day).findIndex(
		(page) =>
			page.type !== 'cover' &&
			page.type !== 'result' &&
			questionsOnPage(page).some((q) => q.id === questionId)
	);
	state.page = Math.max(index, 0);
	save();
}

export function toggleFlag(day: number, questionId: string) {
	const state = ensureDay(day);
	const flags = state.flags ?? [];
	state.flags = flags.includes(questionId)
		? flags.filter((id) => id !== questionId)
		: [...flags, questionId];
	save();
}

/** Chooses the grading mode of a day not started yet; a started day keeps its own. */
export function setDayMode(day: number, mode: Mode) {
	attempt.presetMode(ensureDay(day), mode);
	save();
}

export function resetDay(day: number) {
	delete progress.days[day];
	save();
}

export function setMode(mode: Mode) {
	progress.settings.mode = mode;
	save();
}

export function setRate(rate: Rate) {
	progress.settings.rate = rate;
	save();
}

export function setTheme(theme: Theme) {
	progress.settings.theme = theme;
	save();
}

export function exportProgress() {
	const blob = new Blob([JSON.stringify($state.snapshot(progress))], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
	const link = Object.assign(document.createElement('a'), {
		href: url,
		download: 'toeic-basic-progress.json'
	});
	link.click();
	URL.revokeObjectURL(url);
}

/** Validates an exported progress file (v2, or v1 from the original app); null when unusable. */
export async function readProgressFile(file: File): Promise<Progress | null> {
	try {
		return parseProgress(JSON.parse(await file.text()), questionsOfDay);
	} catch {
		return null;
	}
}

export function replaceProgress(next: Progress) {
	progress.settings = next.settings;
	progress.lastDay = next.lastDay;
	progress.days = next.days;
	save();
}
