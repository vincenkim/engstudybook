/**
 * Korean meanings as a 영어 → 뜻 test compares them (R7, KTD1). The answer and the senses go
 * through the same functions, so what one side may leave out the other may too.
 */

/** Meanings written as a list split at commas and semicolons outside parentheses. */
export function splitMeanings(text: string) {
	const parts = [''];
	let depth = 0;
	for (const char of text) {
		if (char === '(') depth++;
		else if (char === ')') depth = Math.max(depth - 1, 0);
		if (depth === 0 && (char === ',' || char === ';')) parts.push('');
		else parts[parts.length - 1] += char;
	}
	return parts.map((part) => part.trim()).filter(Boolean);
}

/** Spaces, `~`, `…`, sentence marks, commas, middle dots and parentheses do not count. */
export const meaningKey = (text: string) =>
	text
		.normalize('NFC')
		.toLowerCase()
		.replace(/[\s~～….?!,·()]/g, '');

/** A sense's keys with each Korean parenthesis taken in or out: `보증(서)` is 보증 and 보증서. */
export function senseKeys(sense: string) {
	let variants = [sense];
	for (const group of sense.match(/\([^()]*\)/g) ?? []) {
		variants = variants.flatMap((variant) => [
			variant.replace(group, ''),
			variant.replace(group, group.slice(1, -1))
		]);
	}
	return [...new Set(variants.map(meaningKey).filter(Boolean))];
}
