<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		showing = $bindable(false),
		children
	}: {
		showing?: boolean;
		children?: Snippet<[]>;
	} = $props();

	const close = () => {
		showing = false;
	};
</script>

{#if showing}
	<div class="modal" role="dialog" aria-modal="true">
		<button class="backdrop" aria-label="Close modal" onclick={close}></button>
		<div class="panel">
			{@render children?.()}
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		z-index: 1000;
	}

	.backdrop {
		position: absolute;
		inset: 0;
		background: var(--color-50);
		backdrop-filter: blur(8px);
		border: 0;
	}

	.panel {
		position: relative;
		background: var(--background);
		color: var(--color);
		padding: 1rem;
		border-radius: 0.5rem;
		width: 90%;
		max-width: 20rem;
	}

	.backdrop:focus-visible {
		outline-offset: 2px;
	}
</style>
