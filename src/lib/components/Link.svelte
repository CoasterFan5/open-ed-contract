<script lang="ts">
	import { resolve } from '$app/paths';
	import type { ResolvedPathname } from '$app/types';
	import type { Snippet } from 'svelte';

	const {
		children,
		href
	}: {
		children: Snippet<[]>;
		href: ResolvedPathname;
	} = $props();
</script>

<a {href}>
	{@render children()}
</a>

<style>
	a {
		color: var(--accent);
		font-weight: 500;

		&:hover {
			opacity: 0.8;
		}
	}
</style>
