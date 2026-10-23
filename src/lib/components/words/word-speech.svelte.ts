import { progress } from '#lib/progress/store.svelte.js';
import { noVoiceMessage, speech } from '#lib/speech/player.svelte.js';
import { spokenWord } from './card-session';

/** Reads a word aloud as one line, and says when it cannot (KTD15). One per screen. */
export class WordSpeech {
	#noVoice = $state(false);

	/** For the screen's `role="status"` line; empty while nothing went wrong. */
	get notice() {
		if (this.#noVoice) return noVoiceMessage;
		return speech.failed ? '발음을 재생하지 못했어요.' : '';
	}

	speak(word: string) {
		this.#noVoice = !speech.voices.length;
		speech.play([{ text: spokenWord(word), speaker: 0 }], 0, progress.settings.rate);
	}
}
