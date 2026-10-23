// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			/** The card session is open over the screen that opened it (KTD9). */
			cards?: true;
		}
		// interface Platform {}
	}
}

export {};
