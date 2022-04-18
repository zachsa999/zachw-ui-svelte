<script>
	export let navItems;
	export let logo;
	// export let mainItem;
	// export let style = '';
</script>

<nav class="nav-items">
	<button class="nav-logo">
		{logo}
	</button>
	{#each navItems as item}
		<button href="" class="nav-item">{item}</button>
	{/each}
</nav>

<style>
	.nav-items {
		display: flex;
		flex-direction: row;
		height: 80px;
	}
	.nav-item {
		vertical-align: middle;
	}
	nav {
		border-style: solid;
		border-width: 0 0 1px 0;
	}
	.nav-logo {
		background-color: white;
		border: 0;
		font-size: xx-large;
	}
</style>
