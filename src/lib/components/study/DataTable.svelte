<script lang="ts">
	import type { Table } from '#lib/content/index.js';
	import Rich from './Rich.svelte';

	let { table, class: className = 'my-4' }: { table: Table; class?: string } = $props();
</script>

<table class="w-full border-collapse bg-card {className}">
	<thead>
		<tr>
			{#each table.head as cell, index (index)}
				<th class="border bg-accent px-3 py-2 text-left align-top text-sm">{cell}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each table.rows as row, rowIndex (rowIndex)}
			<tr>
				{#each row as cell, index (index)}
					<Rich tag="td" text={cell} class="border px-3 py-2 text-left align-top" />
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
