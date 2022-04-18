<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut, bounceOut, sineOut, bounceInOut, cubicOut, cubicIn } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { toast } from './toast';
	export let message;
	// export let duration = 1000;

	let progress = tweened(100, { duration: message.duration });

	onMount(async () => {
		await progress.set(0);
		toast.remove(message.id);
	});
</script>

<div class={`progress toast ${message.type.toLowerCase()}`} style={`width: ${$progress}%;`} />
<p>{message.message}</p>

<style>
	.progress {
		height: 9px;
		background: white;
		opacity: 0.3;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	.progress.error {
		opacity: 0.5;
	}
	p {
		margin: 0;
	}
</style>
