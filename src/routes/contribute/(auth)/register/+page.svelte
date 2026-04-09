<script>
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
</script>

<div class="text">
	<h3>Welcome!</h3>
	<p>Enter a username and password.</p>
</div>
<TextInput type="email" label="Email" />
<TextInput type="password" label="Chose Password" />
<TextInput type="password" label="Enter Password Again" />
<Button>Create Account</Button>
<p>Already have an account? <Link href={resolve('/contribute/(auth)/login')}>Sign In!</Link></p>

<style>
	h3 {
		margin: 0;
		font-weight: 500;
		font-size: 1.2rem;
	}

	p {
		margin: 0;
	}
</style>
