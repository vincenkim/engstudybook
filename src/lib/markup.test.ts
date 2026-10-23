import { describe, expect, it } from 'vitest';
import { passageText, richText } from './markup';

describe('richText', () => {
	it('escapes html before applying markup', () => {
		expect(richText('<b>**A & B**</b>')).toBe('&lt;b&gt;<strong>A &amp; B</strong>&lt;/b&gt;');
	});

	it('highlights ==text==', () => {
		expect(richText('the ==decision==')).toBe('the <mark>decision</mark>');
	});

	it('renders an empty blank, or the filled answer', () => {
		expect(richText('Please review the -------.')).toBe(
			'Please review the <span class="blank"></span>.'
		);
		expect(richText('the -------.', 'proposal')).toBe(
			'the <span class="blank filled">proposal</span>.'
		);
	});

	it('escapes the filled answer', () => {
		expect(richText('-------', '<i>')).toBe('<span class="blank filled">&lt;i&gt;</span>');
	});
});

describe('passageText', () => {
	it('numbers blanks and fills only the revealed ones', () => {
		expect(passageText('The crew {1} at 9. {2} left.', { 1: 'will arrive', 2: false })).toBe(
			'The crew <span class="blank filled">(1) will arrive</span> at 9. <span class="blank">(2)</span> left.'
		);
	});
});
