<script>
	import { resolve } from '$app/paths';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { loginForm } from './login.remote';
</script>

<div class="text">
	<h3>Welcome Back!</h3>
	<p>Enter your username and password below.</p>
</div>
<form {...loginForm}>
	<TextInput name="email" label="Email" />
	<TextInput name="password" type="password" label="Password" />
	<Button type="submit">Login</Button>
</form>
<p>No account? <Link href={resolve('/contribute/(auth)/register')}>Make one!</Link></p>

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
