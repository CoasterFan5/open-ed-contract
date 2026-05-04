<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import type { PageData } from './$types';
	import AddContractModal from './AddContractModal.svelte';

	const {
		data
	}: {
		data: PageData;
	} = $props();

	let addingContract = $state(false);
</script>

<Modal bind:showing={addingContract}>
	<AddContractModal />
</Modal>

<div class="topBar">
	<h2>{data.software.name}</h2>
	<div>
		<Button onclick={() => (addingContract = true)}>Add Contract</Button>
	</div>
</div>
<p>Contracts are pricing data made public</p>

<style lang="scss">
	.topBar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
