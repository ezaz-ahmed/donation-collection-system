<script lang="ts">
	import { goto } from '$app/navigation';
	import { login } from '$lib/api';
	import Loader from '$lib/comoponents/Loader.svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	let email: string,
		password: string,
		isLoading: boolean = false;

	const clearInput = () => {
		email = '';
		password = '';
	};

	const handleSubmit = async () => {
		const data = {
			email,
			password
		};

		isLoading = true;

		const { error } = await login(data);

		if (error) {
			clearInput();
			toast.error(error);
		} else {
			goto('/donate');
		}

		isLoading = false;
	};
</script>

<h1 class="auth-heading">Login</h1>

<Toaster />

<form on:submit|preventDefault={handleSubmit}>
	<fieldset disabled={isLoading}>
		<div class="field">
			<label for="email" class="text-goldenFizz">Email Address </label>
			<input type="email" name="email" placeholder="Your Email" bind:value={email} />
		</div>

		<div class="field">
			<div class="flex justify-between">
				<label for="password" class="text-goldenFizz">Password</label>
			</div>
			<input type="password" placeholder="Your password" bind:value={password} />
		</div>

		<div class="field">
			<button type="submit" class="auth-button flex items-center justify-center gap-x-2">
				{#if isLoading}
					<Loader /> Loading
				{:else}
					Let's do this!
				{/if}
			</button>

			<p class="mt-4 text-center text-sm text-white">
				<a href="/signup" class="hover-no-underline underline">Don't have an account yet?</a>
			</p>
		</div>
	</fieldset>
</form>
