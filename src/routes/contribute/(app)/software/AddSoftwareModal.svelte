<script>
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { addSoftware } from './addSoftware.remote';
</script>

<form class="wrap" {...addSoftware}>
	<h2>Add Software</h2>

	<TextInput
		label="Name"
		name="name"
		placeholder="Great Software"
		issues={addSoftware.fields.name.issues()}
	/>
	<TextInput
		label="Unique Slug"
		name="slug"
		placeholder="GS"
		issues={addSoftware.fields.slug.issues()}
	/>

	<Button type="submit">Add</Button>
</form>

<style lang="scss">
	.wrap {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
