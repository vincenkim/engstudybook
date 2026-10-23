// Progress lives in the browser, so pages render client-side; prerendering still emits one HTML
// shell per route, which lets any static host serve deep links and the service worker cache them.
export const prerender = true;
export const ssr = false;
