<script lang="ts">
	import { X } from '@lucide/svelte';
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { cn, type WithoutChildrenOrChild } from '#lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChildrenOrChild<SheetPrimitive.ContentProps> & { children: Snippet } = $props();
</script>

<!-- A bottom sheet on phones and a right-hand panel from 768px. Dialog traps focus and closes on Esc. -->
<SheetPrimitive.Portal>
	<SheetPrimitive.Overlay
		data-slot="sheet-overlay"
		class="fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
	/>
	<SheetPrimitive.Content
		bind:ref
		data-slot="sheet-content"
		class={cn(
			'fixed z-50 flex flex-col gap-4 overflow-y-auto bg-card p-5 shadow-lg data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=open]:duration-300',
			'inset-x-0 bottom-0 max-h-[85dvh] rounded-t-2xl pb-[calc(1.25rem+env(safe-area-inset-bottom))] max-md:data-[state=closed]:slide-out-to-bottom max-md:data-[state=open]:slide-in-from-bottom',
			'md:inset-y-0 md:right-0 md:left-auto md:max-h-none md:w-full md:max-w-md md:rounded-none md:border-l md:pb-5 md:data-[state=closed]:slide-out-to-right md:data-[state=open]:slide-in-from-right',
			className
		)}
		{...restProps}
	>
		{@render children()}
		<SheetPrimitive.Close
			class="absolute top-3 right-3 inline-flex size-11 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
		>
			<X aria-hidden="true" />
			<span class="sr-only">닫기</span>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPrimitive.Portal>
