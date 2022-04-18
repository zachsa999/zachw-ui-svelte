<script>
    export let label = '';
    export let isToggled;
    export let style = "";
</script>

<label {style} {label}>
    <input type="checkbox" bind:checked={isToggled} />
    <div class="toggle" />
    This is a checkbox
</label>


<style>
    input {
        display: none;
    }
    label {
        --width: 40px;
        --height: calc(var(--width) / 2);
        --radius: calc(var(--height) / 2);
        display: flex;
    }

    .toggle {
        position: relative;
        width: var(--width);
        height: var(--height);
        border-radius: var(--radius);
        border: solid 1px rgb(182, 182, 182);
        transition: background-color 0.3s ease;
        margin-right: 5px;
        background-color: var(--toggleBackgroundButtonButtonColor, white);
        transition: transform 0.3s ease;
    }

    .toggle:hover {
        cursor: pointer;
    }

    .toggle::after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        height: calc(var(--height) + 2px);
        width: calc(var(--height) + 2px);
        border-radius: var(--radius);
        background-color: var(--togglebuttonColor, aliceblue);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }

    input:checked + .toggle {
        background-color: var(--toggleBackgroundCheckedButtonColor, cyan);
        /* transition: transform 0.3s ease; */
    }
    input:checked + .toggle::after {
        transform: translate3d(100%, 0, 0);
        /* background-color: rgb(202, 245, 241); */
    }
</style>