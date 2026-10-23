import { describe, expect, it } from 'vitest';
import { keyAction, type FocusKind, type KeyContext, type KeyPress } from './keyboard';

const press = (code: string, init: Partial<KeyPress> & { key?: string } = {}) => ({
	code,
	ctrlKey: false,
	altKey: false,
	metaKey: false,
	repeat: false,
	...init
});

const questionPage: KeyContext = {
	sheetOpen: false,
	focus: 'none',
	page: { kind: 'question' },
	listening: false,
	sideBySide: false
};

const setPage = (question: number, sideBySide: boolean): KeyContext => ({
	...questionPage,
	page: { kind: 'set', question, count: 3 },
	sideBySide
});

const cardPage = (flipped: boolean, focus: FocusKind = 'none'): KeyContext => ({
	...questionPage,
	focus,
	page: { kind: 'card', flipped }
});

describe('keyAction', () => {
	it('reads the physical key, so F and G work while typing Korean', () => {
		expect(keyAction(press('KeyF', { key: 'ㄹ' }), questionPage)).toEqual({ type: 'flag' });
		expect(keyAction(press('KeyG', { key: 'ㅎ' }), questionPage)).toEqual({ type: 'map' });
	});

	it('picks an option with 1–4 on a question page', () => {
		expect(keyAction(press('Digit2'), questionPage)).toEqual({ type: 'pick', choice: 1 });
		expect(keyAction(press('Numpad4'), questionPage)).toEqual({ type: 'pick', choice: 3 });
		expect(keyAction(press('Digit5'), questionPage)).toBeNull();
	});

	it('only closes an open sheet with G or Escape', () => {
		const sheetOpen = { ...questionPage, sheetOpen: true };
		expect(keyAction(press('ArrowRight'), sheetOpen)).toBeNull();
		expect(keyAction(press('Digit2'), sheetOpen)).toBeNull();
		expect(keyAction(press('KeyG'), sheetOpen)).toEqual({ type: 'closeSheet' });
		expect(keyAction(press('Escape'), sheetOpen)).toEqual({ type: 'closeSheet' });
	});

	it('leaves keys to inputs, radios and toggle groups', () => {
		for (const focus of ['input', 'radio', 'toggle-group'] as const) {
			expect(keyAction(press('ArrowLeft'), { ...questionPage, focus })).toBeNull();
		}
		expect(keyAction(press('ArrowLeft'), questionPage)).toEqual({ type: 'page', step: -1 });
	});

	it('plays with Space only when no button has focus', () => {
		const listening = { ...questionPage, listening: true };
		expect(keyAction(press('Space'), { ...listening, focus: 'button' })).toBeNull();
		expect(keyAction(press('Space'), listening)).toEqual({ type: 'play' });
	});

	it('moves between set questions with the up and down arrows on wide screens', () => {
		expect(keyAction(press('ArrowDown'), setPage(0, true))).toEqual({ type: 'question', step: 1 });
		expect(keyAction(press('ArrowRight'), setPage(0, true))).toEqual({ type: 'page', step: 1 });
	});

	it('steps through a set with the right arrow on a phone, then turns the page', () => {
		expect(keyAction(press('ArrowRight'), setPage(1, false))).toEqual({
			type: 'question',
			step: 1
		});
		expect(keyAction(press('ArrowRight'), setPage(2, false))).toEqual({ type: 'page', step: 1 });
	});

	it('ignores modifier combinations and held-down keys', () => {
		for (const modifier of ['ctrlKey', 'altKey', 'metaKey', 'repeat'] as const) {
			expect(keyAction(press('ArrowRight', { [modifier]: true }), questionPage)).toBeNull();
		}
	});

	it('has no flag on lesson pages or in a review session', () => {
		expect(keyAction(press('KeyF'), { ...questionPage, page: { kind: 'lesson' } })).toBeNull();
		expect(keyAction(press('KeyF'), { ...questionPage, page: { kind: 'review' } })).toBeNull();
	});
});

describe('keyAction on a word card (KTD11)', () => {
	it('flips the front with Space unless a button has focus, which flips it itself', () => {
		expect(keyAction(press('Space'), cardPage(false))).toEqual({ type: 'flip' });
		expect(keyAction(press('Space'), cardPage(false, 'button'))).toBeNull();
		expect(keyAction(press('Space'), cardPage(true))).toBeNull();
	});

	it('rates the back with 1–3 wherever focus is and ignores 4', () => {
		expect(keyAction(press('Digit1'), cardPage(true))).toEqual({ type: 'rate', choice: 0 });
		expect(keyAction(press('Digit2'), cardPage(true, 'button'))).toEqual({
			type: 'rate',
			choice: 1
		});
		expect(keyAction(press('Numpad3'), cardPage(true))).toEqual({ type: 'rate', choice: 2 });
		expect(keyAction(press('Digit4'), cardPage(true))).toBeNull();
	});

	it('does not rate the front', () => {
		expect(keyAction(press('Digit1'), cardPage(false))).toBeNull();
	});

	it('leaves the rating keys to inputs and toggle groups', () => {
		for (const focus of ['input', 'toggle-group'] as const) {
			expect(keyAction(press('Digit1'), cardPage(true, focus))).toBeNull();
		}
	});

	it('has no page, flag or map keys', () => {
		for (const code of ['ArrowRight', 'KeyF', 'KeyG']) {
			expect(keyAction(press(code), cardPage(true))).toBeNull();
		}
	});
});
