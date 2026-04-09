<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Snippet } from 'svelte';

	const {
		children
	}: {
		children?: Snippet<[]>;
	} = $props();
</script>

<div class="wrap">
	<div class="nav">
		<a class="homeLink" href={resolve('/(front)')}>Sunlight Ledger</a>
	</div>
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style lang="scss">
	.nav {
		display: flex;
		width: 100%;
		background: var(--background-alt);
		border-bottom: 1px solid var(--border);
		padding: 1rem;

		.homeLink {
			text-decoration: none;
			color: var(--color);
			font-size: 1rem;

			&:hover {
				color: var(--accent);
			}
		}
	}
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		width: 100%;
		height: 100dvh;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		height: 100%;
		width: 100%;
	}
</style>
