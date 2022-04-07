<script>
    export let title;
    export let href;

    function redirect(url) {
        window.open(url, "_self").focus();
    }
</script>

<div class="button" on:click={redirect(href)}>
    <div class="color default" />
    <div class="content">
        <h2>{title}</h2>
    </div>
</div>

<style>
    .button {
        background-color: rgb(0, 0, 0, .3);
        min-height: 40px;
        display: flex;
        cursor: pointer;
        transition-duration: 0.2s;
    }

    .button:hover {
        background-color: rgb(0, 0, 0, .6);
    }

    .button:hover > .default {
        filter: drop-shadow(var(--saturated) 1px 0 10px);
        background-color: var(--saturated);
    }

    .color {
        height: inherit;
        background-color: var(--text);
        width: 4px;
        transition-duration: 0.2s;
    }

    .content {
        margin: 20px 20px 20px 20px;
    }

    h2 {
        color: var(--text);
        font-size: 20px;
        font-weight: 400;
        margin: 0 0 0 0;
    }
</style>
