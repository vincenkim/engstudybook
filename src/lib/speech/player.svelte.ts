import { castVoices, examVoices, type LineSpeaker } from './voices';

export interface SpokenLine {
	text: string;
	speaker: LineSpeaker;
}

const pauseBetweenLines = 450;

class SpeechPlayer {
	readonly supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
	voices = $state<SpeechSynthesisVoice[]>([]);
	playing = $state(false);
	/** Index of the line being read aloud; -1 while nothing plays (KTD16). */
	line = $state(-1);
	/** The last play stopped on a speech error; cleared by the next play or stop (KTD15). */
	failed = $state(false);
	#token = 0;
	// Chrome drops `onend` when the utterance is garbage-collected mid-speech, so keep a reference.
	#current: SpeechSynthesisUtterance | null = null;

	constructor() {
		if (!this.supported) return;
		const refresh = () => (this.voices = examVoices(speechSynthesis.getVoices()));
		refresh();
		speechSynthesis.addEventListener('voiceschanged', refresh);
	}

	#idle() {
		this.playing = false;
		this.line = -1;
	}

	stop() {
		this.#token++;
		this.#idle();
		this.failed = false;
		if (this.#current) this.#current.onend = null;
		this.#current = null;
		if (this.supported) speechSynthesis.cancel();
	}

	play(lines: SpokenLine[], seed: number, rate: number) {
		this.stop();
		const cast = castVoices(
			this.voices,
			lines.map((line) => line.speaker),
			seed
		);
		if (!cast.size) return;
		const token = this.#token;
		this.playing = true;
		const speak = (index: number) => {
			if (token !== this.#token) return;
			if (index >= lines.length) return this.#idle();
			this.line = index;
			const { voice, pitch } = cast.get(lines[index].speaker)!;
			const utterance = new SpeechSynthesisUtterance(lines[index].text);
			Object.assign(utterance, { voice, lang: voice.lang, pitch, rate });
			utterance.onend = () => setTimeout(() => speak(index + 1), pauseBetweenLines);
			utterance.onerror = () => {
				if (token !== this.#token) return;
				this.failed = true;
				this.#idle();
			};
			this.#current = utterance;
			speechSynthesis.speak(utterance);
		};
		speak(0);
	}
}

export const speech = new SpeechPlayer();

export const noVoiceMessage =
	'영어 음성을 찾지 못했습니다. Microsoft Edge에서 인터넷에 연결한 상태로 열어 주세요.';
