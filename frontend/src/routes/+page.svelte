<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	let name = '';
	let message = '';

	function handleSubmit() {
		if (name.trim()) {
			message = `Hello! ${name}`;
		}
	}
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-50">
	<h1 class="text-5xl font-black text-center">Welcome to SvelteKit + shadcn!</h1>
	<Card.Root class="w-full max-w-sm rounded-md bg-white shadow-lg mt-10">
		<Card.Header>
			<Card.Title>What is your name?</Card.Title>
		</Card.Header>
		<Card.Content>
			<form>
				<div class="flex flex-col gap-6">
					<div class="grid gap-2">
						<Input id="name" type="name" placeholder="enter_your_name" required bind:value={name} />
					</div>
				</div>
			</form>
		</Card.Content>
		<Card.Footer class="flex-col gap-2">
			<Button type="button" class="w-full" onclick={handleSubmit}>Send</Button>
		</Card.Footer>
	</Card.Root>
	{#if message}
		<div class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
			{message}
		</div>
	{/if}
</main>
