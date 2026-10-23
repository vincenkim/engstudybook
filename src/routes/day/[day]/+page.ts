import { error } from '@sveltejs/kit';
import { dayNumbers, hasDay } from '#lib/content/index.js';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => dayNumbers.map((day) => ({ day: String(day) }));

export const load: PageLoad = ({ params }) => {
	const day = Number(params.day);
	if (!hasDay(day)) error(404, 'Day를 찾을 수 없습니다.');
	return { day };
};
