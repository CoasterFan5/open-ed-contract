<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		children
	}: {
		children: Snippet<[]>;
	} = $props();
</script>

<div class="wrap">
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style lang="scss">
	.content {
		padding: 1rem;
		box-sizing: border-box;
		border: 1px solid var(--border);
		border-radius: 0.25rem;
		width: 20rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.wrap {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
