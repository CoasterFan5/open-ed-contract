<script>
	import { resolve } from '$app/paths';
</script>

<div class="wrap">
	<h1>Contributor Portal</h1>
	<p>If you are here by mistake, you can head to <a href={resolve('/(front)')}>the home page</a></p>
	<p>Otherwise, proceede to <a href={resolve('/contribute/(auth)/login')}>login</a></p>
</div>

<style>
	:global(body) {
		background-color: var(--background);
		color: var(--color);
	}

	.wrap {
		padding: 2rem;
		max-width: 60rem;
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 600;
		margin: 0 0 1.5rem 0;
	}

	p {
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		margin: 0.75rem 0;
	}

	a {
		color: var(--accent);
		text-decoration: none;
		font-weight: 500;
		transition: opacity 0.2s ease;
	}

	a:hover {
		opacity: 0.8;
	}
</style>
