import { self } from '$app/service-worker';
import { version } from '$app/env';
import { assets, immutable, prerendered } from '$app/manifest';
import { resolve } from '$app/paths';

// One cache per deployment. Every page shell is precached so the app works offline after one visit.
const CACHE = `toeic-${version}`;
const PRECACHE = [...immutable, ...assets, ...prerendered].map((file) => resolve(file.path));

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)));
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
			)
	);
});

self.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url);
	if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

	async function respond() {
		const cache = await caches.open(CACHE);
		if (PRECACHE.includes(url.pathname)) {
			const cached = await cache.match(url.pathname);
			if (cached) return cached;
		}
		try {
			const response = await fetch(event.request);
			if (response.status === 200) void cache.put(event.request, response.clone());
			return response;
		} catch (error) {
			const cached = await cache.match(event.request);
			if (cached) return cached;
			throw error;
		}
	}

	event.respondWith(respond());
});
