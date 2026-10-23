import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			// Set BASE_PATH when the host serves the app from a sub-path (e.g. GitHub Pages: /repo-name).
			paths: { base: (process.env.BASE_PATH ?? '') as '' | `/${string}` }
		})
	],
	build: {
		// All 1,000 questions ship in one chunk: 390 KB gzipped, 2.5 s first load on Slow 4G
		// (measured 2026-10-21; later visits come from the service worker). Split per day if it grows.
		chunkSizeWarningLimit: 1500
	},
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
