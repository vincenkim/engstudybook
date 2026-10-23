<script lang="ts" generics="T extends string | number">
	import * as ToggleGroup from '#lib/components/ui/toggle-group/index.js';

	let {
		label,
		options,
		value,
		onChange
	}: {
		label: string;
		options: [T, string][];
		value: T;
		onChange: (value: T) => void;
	} = $props();

	const id = $props.id();

	// ToggleGroup values are strings and a click on the active item would clear it; ignore that.
	function select(next: string) {
		const option = options.find(([option]) => String(option) === next);
		if (option) onChange(option[0]);
	}
</script>

<div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
	<span class="min-w-[76px] text-sm font-bold" {id}>{label}</span>
	<ToggleGroup.Root
		type="single"
		variant="outline"
		aria-labelledby={id}
		bind:value={() => String(value), select}
	>
		{#each options as [option, text] (option)}
			<ToggleGroup.Item
				value={String(option)}
				class="h-auto min-h-11 py-1.5 text-base group-data-[spacing=0]/toggle-group:px-3.5 data-[state=on]:bg-primary data-[state=on]:font-bold data-[state=on]:text-primary-foreground"
			>
				{text}
			</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
</div>
