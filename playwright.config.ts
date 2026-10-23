import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: { command: 'npm run build && npm run preview', port: 4173 },
	testMatch: '**/*.e2e.{ts,js}',
	// One project per layout: bottom tabs, left rail, sidebar (KTD12).
	projects: [
		{ name: 'phone', use: { viewport: { width: 390, height: 844 } } },
		{ name: 'tablet', use: { viewport: { width: 1180, height: 820 } } },
		{ name: 'desktop', use: { viewport: { width: 1440, height: 900 } } }
	]
});
