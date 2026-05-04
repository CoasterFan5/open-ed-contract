<script>
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { addContract } from './addContract.remote';
</script>

<form class="wrap" {...addContract} enctype="multipart/form-data">
	<h2>Add Contract Modal</h2>
	<p>Add a new contract</p>
	<TextInput name="seatCost" label="Seat Cost" placeholder="0.25" />
	<input name="file" type="file" placeholder="Upload Invoice" />
	<Button type="submit">Create</Button>

	{#each addContract.fields.allIssues() as is, index (index)}
		{is.message}
	{/each}
</form>
