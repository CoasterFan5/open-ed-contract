<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/geist/wght.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="wrap">
	<nav class="navbar"></nav>
	<div class="content">
		{@render children()}
	</div>
</div>

<style>
	:global(:root) {
		--font-family: 'Geist Variable', sans-serif;
		--font-size-default: 0.9rem;

		font-family: var(--font-family);

		--background: #f1f1f1;
		--color: #000;
		--accent: #1447e6;

		--color-20: color-mix(in srgb, var(--color) 20%, transparent);
		--color-50: color-mix(in srgb, var(--color) 50%, transparent);
		--color-80: color-mix(in srgb, var(--color) 80%, transparent);
		--accent-25: color-mix(in srgb, var(--accent) 25%, transparent);
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: var(--font-family);
		font-size: var(--font-size-default);
		background: var(--background);
		color: var(--color);
	}

	.wrap {
		width: 100%;
		height: 100dvh;
		display: flex;
		align-items: start;
		justify-content: center;
	}
</style>
