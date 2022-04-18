<script>
	import { marked } from 'marked';
	export let text = 'hi';

	let markdownText = text;
	$: {
		//Reactive expression
		markdownText = marked(text);
	}
</script>

<div class="markdown-container">
	<textarea name="" id="" cols="30" rows="10" bind:value={text} />
	<div>
		{@html markdownText}
	</div>
</div>

<style>
	.markdown-container {
		display: flex;
	}
	.markdown-container > * {
		width: 50%;
	}
</style>
