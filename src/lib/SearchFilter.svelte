<script>
	import { fade, slide } from 'svelte/transition';
	export let items;
	export let search = '';
	let isFocused = false;

	$: filteredSearch = items.filter((item) => {
		// console.log(filteredSearch);
		return search === '' || item.indexOf(search.toLowerCase()) !== -1;
	});
</script>

<div class="wrapper">
	<label>
		Search Names: <br />
		<input
			on:focus={() => (isFocused = true)}
			bind:value={search}
			type="text"
			placeholder="Search"
		/>
	</label>

	{#if isFocused}
		<ul transition:fade>
			{#each filteredSearch as item}
				<li
					transition:fade
					on:click={() => {
						search = item;
					}}
				>
					{item}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.wrapper {
		position: absolute;
		display: inline-block;
	}
	ul {
		position: absolute;
		width: 100%;
		border: solid 1px black;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		padding: 10px;
		cursor: pointer;
		transition: 0.3s background ease;
	}
	li:hover {
		background-color: var(--listItemBackground, #eee);
	}
</style>
