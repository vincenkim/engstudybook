<script lang="ts">
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import { cn } from '#lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SheetPrimitive.TitleProps = $props();
</script>

<!-- Leaves room for the close button in the top-right corner. -->
<SheetPrimitive.Title
	bind:ref
	data-slot="sheet-title"
	class={cn('pr-12 text-lg font-bold', className)}
	{...restProps}
/>
