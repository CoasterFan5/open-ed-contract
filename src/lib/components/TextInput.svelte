<script lang="ts">
	const uid = $props.id();

	let {
		label = '',
		placeholder = '',
		name = '',
		value = $bindable(''),
		type
	}: {
		label?: string;
		name?: string;
		placeholder?: string;
		value?: string;
		type?: HTMLInputElement['type'];
	} = $props();
</script>

<div class="field">
	{#if label}
		<label for={uid}>{label}</label>
	{/if}

	<input id={uid} {name} {type} {placeholder} bind:value />
</div>

<style>
	.field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	label {
		font-family: var(--font-family);
		font-weight: 400;
		font-size: var(--font-size-default);
		color: var(--color-80);
	}

	input {
		font-family: var(--font-family);
		font-weight: 400;
		font-size: var(--font-size-default);
		line-height: 1.4;
		color: var(--color);
		background: var(--background);
		border: 1px solid var(--border);
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		outline: none;
		transition: all 120ms ease;
	}

	input::placeholder {
		color: var(--color-50);
	}

	input:focus {
		border-color: var(--accent);
	}
</style>
