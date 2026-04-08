<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import type { PageData } from './$types';

	const {
		data
	}: {
		data: PageData;
	} = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<TextInput label="test" />

{#each data.items as item}
	{item.title}
{/each}
