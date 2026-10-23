// Content strings use a tiny markup: **bold**, ==highlight==, a run of 5+ dashes for a Part 5
// blank and {n} for a numbered Part 6 blank. Text is escaped first, so the result is safe for {@html}.

type Fill = string | false | undefined;

const escapeHtml = (text: string) =>
	text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const blank = (fill: Fill, label = '') => {
	const filled = fill ? escapeHtml(fill) : '';
	const content = label && filled ? `${label} ${filled}` : label || filled;
	return `<span class="blank${fill ? ' filled' : ''}">${content}</span>`;
};

export function richText(text: string, fill?: Fill): string {
	return escapeHtml(text)
		.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
		.replace(/==(.+?)==/g, '<mark>$1</mark>')
		.replace(/-{5,}/g, () => blank(fill));
}

export function passageText(text: string, fills: Record<number, Fill> = {}): string {
	return richText(text).replace(/\{(\d)\}/g, (_, number: string) =>
		blank(fills[Number(number)], `(${number})`)
	);
}
