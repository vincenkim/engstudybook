import type { Part } from '#lib/content/index.js';

export const letters = ['A', 'B', 'C', 'D'];

export const partNames: Record<Part, string> = {
	2: 'Part 2 · 질의응답',
	3: 'Part 3 · 대화',
	4: 'Part 4 · 담화',
	5: 'Part 5 · 단문 빈칸',
	6: 'Part 6 · 장문 빈칸',
	7: 'Part 7 · 독해'
};

/** The confirm text before a day starts over; its wrong records and flags go with it. */
export const restartWarning = (day: number) =>
	`Day ${day}의 풀이 기록을 지우고 처음부터 다시 풉니다. 틀린 기록과 깃발도 함께 지워집니다.`;

const speakerNames: Record<string, string> = { M: '남', W: '여' };

/** 'M1' → '남1' */
export const speakerName = (speaker: string) => speakerNames[speaker[0]] + speaker.slice(1);
