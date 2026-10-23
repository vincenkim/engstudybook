import { error } from '@sveltejs/kit';
import { wordDays } from '#lib/content/words.js';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => wordDays.map(({ key }) => ({ day: key }));

export const load: PageLoad = ({ params }) => {
	const wordDay = wordDays.find(({ key }) => key === params.day);
	if (!wordDay) error(404, '단어 Day를 찾을 수 없습니다.');
	return wordDay;
};
