<script module lang="ts">
	import type { Snippet } from 'svelte';

	export type ColumnDef<T> = {
		key: Extract<keyof T, string> | (string & {});
		label: string;
		align?: 'left' | 'center' | 'right';
		format?: (value: unknown, row: T) => string | number | null | undefined;
		cell?: Snippet<[row: T]>;
	};
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	let {
		data = [],
		columns = [],
		customCell
	}: {
		data: T[];
		columns: ColumnDef<T>[];
		customCell?: Snippet<[columnKey: string, row: T]>;
	} = $props();
</script>

<div class="table-container">
	<table class="data-table">
		<thead>
			<tr>
				{#each columns as col (col.key)}
					<th style:text-align={col.align || 'left'}>{col.label}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row (row.id ?? row)}
				<tr>
					{#each columns as col (col.key)}
						<td style:text-align={col.align || 'left'}>
							{#if col.cell}
								{@render col.cell(row)}
							{:else if customCell}
								{@render customCell(col.key, row)}
							{:else}
								{@const val = row[col.key as keyof T]}
								{col.format ? col.format(val, row) : (val ?? '')}
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
			{#if data.length === 0}
				<tr>
					<td colspan={columns.length} class="empty-state"> No data available. </td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<style>
	.table-container {
		width: 100%;
		overflow-x: auto;
		background: transparent;
		border-radius: 0.25rem;
		border: 1px solid var(--border);
	}

	.data-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	th,
	td {
		padding: 16px;
		border-bottom: 1px solid var(--border);
	}

	th {
		font-weight: 600;
		color: var(--color);
		background-color: rgba(255, 255, 255, 0.02);
		text-transform: uppercase;
		font-size: 0.85rem;
		letter-spacing: 0.05em;
	}

	tr:last-child td {
		border-bottom: none;
	}

	tr:hover td {
		background-color: rgba(255, 255, 255, 0.05);
	}

	.empty-state {
		text-align: center;
		color: var(--color);
		opacity: 0.7;
		padding: 32px;
		font-style: italic;
	}
</style>
