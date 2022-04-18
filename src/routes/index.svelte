<script>
	// export const prerender = true;

	import Header from '$lib/Header.svelte';
	import Portal from '$lib/Portal.svelte';
	import Markdown from '$lib/Markdown.svelte';
	import Modal from '$lib/Modal.svelte';
	import Field from '$lib/Field.svelte';
	import Toast from '$lib/toast/Toast.svelte';
	import { toast } from '$lib/toast/toast';

	import SearchFilter from '$lib/SearchFilter.svelte';

	// import { Toggle, Accordion0, Accordion1, SearchFilter, Field, Markdown, Portal } from '$lib/';

	let isToggled = false;
	let search = '';
	let navItems = ['page 1', 'page 2', 'page 3'];
	let logo = 'Logo';

	let toggl = true;
	let text = 'hi';
	let items = ['s', 'sc', 'scott', 'scot', 'cott', 'cott', 'scot'];
	let isModalOpen = false;
</script>

<Header {logo} {navItems} />
<h1>Welcome to Zachw-UI{search}</h1>
<!-- 
<Portal>
	<Markdown bind:text />
</Portal> -->

<Modal bind:isModalOpen>
	<div style="background: white; box-shadow: 1px 1px 3px black; padding: 15px;">
		<Field bind:value={search} label="Search" instructions="Type to Search" placeholder="Joe" />
		<Field value={0} label="Number" type="number" instructions="Enter a number" placeholder="12" />
		<Field value={false} label="Search" type="checkbox" instructions="Select" placeholder="" />
	</div>
</Modal>

<button on:click={() => (isModalOpen = true)}>Open Modal Form</button>
<Toast />

<button on:click={() => toast.send('NEW MESSAGE', { duration: 3000 })}>Open Toast Message</button>
<button on:click={() => toast.send('NEW MESSAGE', { duration: 5000, type: 'error' })}
	>Open Toast Error</button
>

<SearchFilter {items} bind:search />

<!-- <Accordion0 isOpen = {true} buttonText="This is accordian0 text">
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius totam adipisci, non ea error, tempore, 
            culpa officia nobis doloribus soluta odit tenetur saepe nulla neque aperiam cumque laudantium corrupti!
        </p>
    </div>
</Accordion0>
<Accordion1 isOpen = {true} buttonText="This is accordian1 text">
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius totam adipisci, non ea error, tempore, 
            culpa officia nobis doloribus soluta odit tenetur saepe nulla neque aperiam cumque laudantium corrupti!
        </p>
    </div>
</Accordion1>
<Accordion1 isOpen = {true} buttonText="This is accordian1 text">
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius totam adipisci, non ea error, tempore, 
            culpa officia nobis doloribus soluta odit tenetur saepe nulla neque aperiam cumque laudantium corrupti!
        </p>
    </div>
</Accordion1>

<Toggle bind:isToggled label="Beta" />
<Toggle bind:isToggled label="Beta" style="--togglebuttonColor: red;" /> -->

{#if isToggled}
	<h1>I'm Toggled</h1>
{/if}
