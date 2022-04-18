<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut, bounceOut, sineOut, bounceInOut, quintOut } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '../Portal.svelte';
	import { toast } from './toast';
	import ToastMesage from './ToastMesage.svelte';

	let progress = tweened(0, {
		duration: 2000,
		easing: bounceInOut
	});

	async function updateProgress() {
		const newProgress = Math.random() * 100;
		progress.set(newProgress);
		await progress.set(newProgress);
		toast.remove();
	}
</script>

<h1>{$progress}</h1>
<div style={`width:  calc(${$progress}%); height: calc(${$progress}vh); background: green;`} />
<button on:click={updateProgress}>GO</button>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as message (message.id)}
			<div
				on:click={() => toast.remove(message.id)}
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				animate:flip
				class={`toast ${message.type.toLowerCase()}`}
			>
				<ToastMesage {message} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}

	.toast {
		overflow: hidden;
		position: relative;
		margin-bottom: 1rem;
		padding: 20px;
		color: white;
		background: var(--toast-background, rgb(97, 52, 204));
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
	}
	.toast.error {
		background: var(--toast-error-background, red);
		color: rgb(39, 39, 39);
		font-weight: 700;
	}
</style>
