<script>
    export let title;
    export let description;
    export let language;
    export let href;
    export let creationdate;

    function redirect(url) {
        window.open(url, "_self").focus();
    }
</script>

<div class="project-tile" on:click={redirect(href)}>
    {#if language === "C#"}
        <div class="color csharp" />
    {:else if language === "JavaScript"}
        <div class="color js" />
    {:else if language === "C++"}
        <div class="color cpp" />
    {:else if language === "Svelte"}
        <div class="color svelte" />
    {:else}
        <div class="color default" />
    {/if}
    <div class="content">
        <h2>{title}</h2>
        <p>Created <b>{creationdate}</b></p>
        <p>{description}</p>
    </div>
</div>

<style>
    .project-tile {
        background-color: rgb(0, 0, 0, 0.3);
        min-height: 50px;
        display: flex;
        cursor: pointer;
        transition-duration: 0.2s;
        margin-bottom: 20px;
    }

    .project-tile:hover {
        background-color: rgb(0, 0, 0, 0.6);
    }

    .project-tile:hover > .default {
        filter: drop-shadow(var(--saturated) 1px 0 10px);
        background-color: var(--saturated);
    }

    .color {
        height: inherit;
        background-color: var(--text);
        width: 4px;
        transition-duration: 0.2s;
    }

    .csharp {
        background-color: #178600;
    }

    .project-tile:hover > .csharp {
        background-color: #2bff00;
        filter: drop-shadow(#2bff00 1px 0 10px);
    }

    .cpp {
        background-color: #f34b7d;
    }

    .project-tile:hover > .cpp {
        background-color: #ff004c;
        filter: drop-shadow(#ff004c 1px 0 10px);
    }

    .js {
        background-color: #f1e05a;
    }

    .project-tile:hover > .js {
        background-color: #ffe100;
        filter: drop-shadow(#ffe100 1px 0 10px);
    }

    .svelte {
        background-color: #ff3e00;
    }

    .project-tile:hover > .svelte {
        background-color: #ff4000;
        filter: drop-shadow(#ff3e00 1px 0 10px);
    }

    .content {
        margin: 20px 20px 20px 20px;
    }

    h2 {
        color: var(--text);
        font-size: 32px;
        font-weight: 400;
        margin: 0 0 10px 0;
    }

    p {
        color: var(--text);
        font-size: 16px;
        font-weight: 400;
        margin: 0 0 5px 0;
    }
</style>
