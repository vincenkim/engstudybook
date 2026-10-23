import type { Curriculum } from '#lib/content/index.js';
import type { Progress } from '#lib/progress/model.js';

export type Phase = Curriculum[number];

/** Days of the phase with a first score. */
export const finishedDays = (phase: Phase, days: Progress['days']) =>
	phase.days.filter(({ day }) => days[day]?.firstScore).length;
