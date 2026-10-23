import { tick } from 'svelte';

/** After the next render, moves focus to the first heading in main, where a new view starts; the page title when main has none. */
export async function focusMainHeading() {
	await tick();
	const heading =
		document.querySelector('main')?.querySelector<HTMLElement>('h1, h2') ??
		document.querySelector<HTMLElement>('h1');
	if (!heading) return;
	heading.tabIndex = -1;
	heading.focus({ preventScroll: true });
}
