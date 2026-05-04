<script>
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import AddSchoolModal from './AddSchoolModal.svelte';
	import CustomTable from './CustomTable.svelte';
	import { getSchools } from './getSchools.remote';

	let showingAddSchoolModal = $state(false);

	const schools = await getSchools({
		page: 0,
		perPage: 10
	});
</script>

<Modal bind:showing={showingAddSchoolModal}>
	<AddSchoolModal />
</Modal>

<div class="toolbar">
	<h2>Schools</h2>
	<div>
		<Button type="button" onclick={() => (showingAddSchoolModal = !showingAddSchoolModal)}
			>Add</Button
		>
	</div>
</div>
<p>Schools are instituions or districts that pay for contracts.</p>
<CustomTable
	columns={[
		{
			key: 'id',
			label: 'Id'
		},
		{
			key: 'name',
			label: 'Name'
		},
		{
			key: 'location',
			label: 'Location',
			align: 'left'
		},
		{
			key: '',
			label: 'Actions',
			align: 'right'
		}
	]}
	data={schools}
/>

<style>
	.toolbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
