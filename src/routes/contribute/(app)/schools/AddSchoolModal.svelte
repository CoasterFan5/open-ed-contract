<script>
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { addSchool } from './addSchool.remote';
</script>

<form class="wrap" {...addSchool}>
	<h2>Add School</h2>
	<p>Add a new school!</p>
	<TextInput
		label="Name"
		name="name"
		placeholder="Acme University"
		issues={addSchool.fields.name.issues()}
	/>
	<TextInput label="Location" name="location" placeholder="Norfolk, VA" />
	<input hidden name="page" value={0} />
	<input hidden name="perPage" value={10} />
	<Button type="submit">Create</Button>

	{#each addSchool.fields.allIssues() as is, index (index)}
		{is.message}
	{/each}
</form>

<style lang="scss">
	.wrap {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		h2 {
			margin: 0;
			font-weight: 500;
		}

		p {
			margin: 0;
		}
	}
</style>
