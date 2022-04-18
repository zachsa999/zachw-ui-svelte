<script>
    import { slide } from './Slide';
    export let buttonText = "";
    export let isOpen = true;
</script>

<style>
    button {
        display: block;
        border: 0;
        width: 100%;
        text-align: left;
        border: solid 1px #333;
        margin: 0;
    }

    span {
        margin-right: 5px;
        display: inline-block;
        transform: rotate(0.25turn);
        transition: transform 0.3s ease;
    }

    .isOpen {
        transform: rotate(0.5turn);
    }
    .accordionContent {
        border: solid 1px #333;
        border-top: 0;
        padding: 4px;

    }
</style>

<button on:click={() => (isOpen = !isOpen)}>
    <span class:isOpen>▲</span>
    {buttonText}
</button>
<div class="accordionContent" 
        use:slide={{ isOpen, duration: 200 }} 
        on:animationend={() => console.log('animation')}>
    <div class="wrapper">
        <slot />
    </div>
</div>

