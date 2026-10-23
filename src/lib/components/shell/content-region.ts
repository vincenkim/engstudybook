/** Pages scroll inside the shell's content region, not the window (KTD12). */
export const contentRegionId = 'app-content';

/** SvelteKit only resets the window's scroll, so route and Day page changes reset the region. */
export function scrollContentToTop() {
	document.getElementById(contentRegionId)?.scrollTo(0, 0);
}
