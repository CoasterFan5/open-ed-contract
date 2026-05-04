<script lang="ts">
	import type { Snippet } from 'svelte';
	import IconHome from '~icons/ph/house';
	import IconCode from '~icons/ph/code';
	import IconBuilding from '~icons/ph/building-office';
	import { resolve } from '$app/paths';

	const {
		children
	}: {
		children: Snippet<[]>;
	} = $props();
</script>

<div class="container">
	<aside class="sidebar">
		<nav class="sidebar-nav">
			<ul>
				<li>
					<a href={resolve('/contribute/(app)/portal')}>
						<span class="icon">
							<IconHome />
						</span>
						<span>Dashboard</span>
					</a>
				</li>
				<li>
					<a href={resolve('/contribute/(app)/software')}>
						<span class="icon">
							<IconCode />
						</span>
						<span>Software</span>
					</a>
				</li>
				<li>
					<a href={resolve('/contribute/(app)/schools')}>
						<span class="icon">
							<IconBuilding />
						</span>
						<span>Schools</span>
					</a>
				</li>
			</ul>
		</nav>
	</aside>
	<main class="content">
		{@render children?.()}
	</main>
</div>

<style>
	.container {
		display: flex;
		height: 100%;
		width: 100%;
		gap: 0.25rem;
	}

	.sidebar {
		width: 14rem;
		background: var(--background-alt);
		border-right: 1px solid var(--border);
		padding: 1rem 0.75rem;
		box-sizing: border-box;
		overflow-y: auto;
		font-weight: 400;
	}

	.sidebar-nav {
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: column;
		}

		li {
			margin: 0;
			padding: 0;
		}

		a {
			display: flex;
			align-items: center;
			gap: 0.75rem;
			padding: 0.5rem;
			border-radius: 0.25rem;
			color: var(--color);
			text-decoration: none;
			font-size: 0.9rem;
			font-weight: 400;
			transition:
				background-color 0.2s,
				color 0.2s;

			&:hover {
				background-color: var(--accent-25);
				color: var(--accent);
			}

			.icon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 1.25rem;
				height: 1.25rem;
			}
		}
	}

	.content {
		flex: 1;
		padding: 1rem;
		box-sizing: border-box;
		overflow-y: auto;
	}
</style>
