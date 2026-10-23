/** Study keys (KTD11). Keys are read by `event.code`, so F and G still work while typing Korean. */

/** What holds keyboard focus. Inputs, radios and toggle groups keep their own keys. */
export type FocusKind = 'none' | 'button' | 'input' | 'radio' | 'toggle-group';

/**
 * The screen under the keys. A set page says which of its questions is current; a word card says
 * whether it shows its back.
 */
export type KeyPage =
	| { kind: 'question' | 'lesson' | 'guided' | 'result' | 'start' | 'review' }
	| { kind: 'set'; question: number; count: number }
	| { kind: 'card'; flipped: boolean };

export interface KeyContext {
	sheetOpen: boolean;
	focus: FocusKind;
	page: KeyPage;
	/** The page has audio to play (Part 1–4). */
	listening: boolean;
	/** Set questions sit beside the passage (1024px and up); narrower screens step through them. */
	sideBySide: boolean;
}

/**
 * `page` turns a Day page, or moves to the next question of a review session; `question` moves
 * within a set; `pick` answers the current question with option `choice` (0–3); `rate` rates a
 * word card 처음, 애매 or 완벽 (`choice` 0–2).
 */
export type KeyAction =
	| { type: 'page'; step: -1 | 1 }
	| { type: 'question'; step: -1 | 1 }
	| { type: 'pick' | 'rate'; choice: number }
	| { type: 'play' | 'flag' | 'map' | 'closeSheet' | 'flip' };

export type KeyPress = Pick<KeyboardEvent, 'code' | 'ctrlKey' | 'altKey' | 'metaKey' | 'repeat'>;

const horizontalSteps: Record<string, -1 | 1> = { ArrowLeft: -1, ArrowRight: 1 };
const verticalSteps: Record<string, -1 | 1> = { ArrowUp: -1, ArrowDown: 1 };
const optionKey = /^(?:Digit|Numpad)([1-4])$/;
const ratingKey = /^(?:Digit|Numpad)([1-3])$/;
const ownKeys: FocusKind[] = ['input', 'radio', 'toggle-group'];

/** The action a key press triggers, or null to leave the key to the browser. */
export function keyAction(press: KeyPress, context: KeyContext): KeyAction | null {
	if (press.ctrlKey || press.altKey || press.metaKey || press.repeat) return null;
	if (ownKeys.includes(context.focus)) return null;
	if (context.sheetOpen) {
		return press.code === 'KeyG' || press.code === 'Escape' ? { type: 'closeSheet' } : null;
	}

	const { page } = context;
	if (page.kind === 'card') return cardAction(press, context.focus, page.flipped);
	const horizontal = horizontalSteps[press.code];
	const option = optionKey.exec(press.code);
	const play =
		press.code === 'Space' && context.listening && context.focus !== 'button'
			? ({ type: 'play' } as const)
			: null;

	if (page.kind === 'review') {
		if (horizontal) return { type: 'page', step: horizontal };
		if (option) return { type: 'pick', choice: Number(option[1]) - 1 };
		return play;
	}
	if (page.kind !== 'question' && page.kind !== 'set') {
		if (horizontal) return { type: 'page', step: horizontal };
		return press.code === 'KeyG' ? { type: 'map' } : null;
	}

	if (horizontal) {
		const stepsWithinSet =
			page.kind === 'set' && !context.sideBySide && inSet(page, page.question + horizontal);
		return { type: stepsWithinSet ? 'question' : 'page', step: horizontal };
	}
	const vertical = verticalSteps[press.code];
	if (vertical && page.kind === 'set' && context.sideBySide) {
		return inSet(page, page.question + vertical) ? { type: 'question', step: vertical } : null;
	}
	if (option) return { type: 'pick', choice: Number(option[1]) - 1 };
	if (press.code === 'KeyF') return { type: 'flag' };
	if (press.code === 'KeyG') return { type: 'map' };
	return play;
}

/**
 * Space turns the front over, except on a focused button, which the browser presses itself (the
 * front is one). 1–3 rate the back wherever focus is.
 */
function cardAction(press: KeyPress, focus: FocusKind, flipped: boolean): KeyAction | null {
	if (!flipped) return press.code === 'Space' && focus !== 'button' ? { type: 'flip' } : null;
	const rating = ratingKey.exec(press.code);
	return rating ? { type: 'rate', choice: Number(rating[1]) - 1 } : null;
}

function inSet(page: { count: number }, question: number) {
	return question >= 0 && question < page.count;
}
