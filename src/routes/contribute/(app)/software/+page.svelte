<script lang="ts">
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import type { PageData } from './$types';
	import AddSoftwareModal from './AddSoftwareModal.svelte';

	let addingSoftware = $state(false);

	let {
		data
	}: {
		data: PageData;
	} = $props();
</script>

<Modal bind:showing={addingSoftware}>
	<AddSoftwareModal></AddSoftwareModal>
</Modal>

<div class="topToolbar">
	<h2>Software</h2>
	<div>
		<Button type="button" onclick={() => (addingSoftware = true)}>Add</Button>
	</div>
</div>
<p>Software is individual software like CampusGroups</p>

{#await data.software}
	<span>Loading...</span>
{:then software}
	{#each software as softwareItem (softwareItem.id)}
		<a
			href={resolve('/contribute/(app)/software/[slug]', {
				slug: softwareItem.slug
			})}
		>
			{softwareItem.name}
		</a>
	{/each}
{:catch e}
	{e}
{/await}

<style>
	.topToolbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
