<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	const {
		type = 'button',
		disabled = false,
		onclick,
		children
	}: {
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: MouseEventHandler<HTMLButtonElement>;
		children: Snippet;
	} = $props();
</script>

<button {type} {disabled} onmousedown={onclick} class="button">
	{@render children?.()}
</button>

<style>
	.button {
		font-family: var(--font-family);
		font-size: var(--font-size-default);
		font-weight: 400;

		padding: 0.25rem 0.5rem;
		width: 100%;
		border: 1px solid var(--accent);
		border-radius: 0.25rem;
		background: var(--accent);
		color: var(--background);

		cursor: pointer;
		transition: all 0.15s ease-in-out;

		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
	}

	.button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
