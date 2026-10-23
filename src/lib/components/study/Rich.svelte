<script lang="ts">
	import { richText } from '#lib/markup.js';

	let {
		text,
		tag = 'span',
		fill,
		class: className,
		lang
	}: {
		text: string;
		tag?: string;
		fill?: string | false;
		class?: string;
		lang?: string;
	} = $props();
</script>

<!-- richText escapes the text before adding its own markup. -->
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<svelte:element this={tag} class={className} {lang}>{@html richText(text, fill)}</svelte:element>
