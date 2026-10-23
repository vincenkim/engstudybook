import type { FocusKind } from '#lib/keyboard.js';

/** What holds keyboard focus, so the study keys leave inputs, radios and toggle groups alone. */
export function focusKind(element: Element | null): FocusKind {
	if (!(element instanceof HTMLElement)) return 'none';
	if (element.closest('[data-slot="toggle-group"]')) return 'toggle-group';
	if (element.matches('input[type="radio"], [role="radio"]')) return 'radio';
	if (element.matches('input, textarea, select') || element.isContentEditable) return 'input';
	if (element.matches('button, [role="button"]')) return 'button';
	return 'none';
}
