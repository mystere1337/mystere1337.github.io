<script>
    export let title;
    export let description;
    export let language;
    export let href;

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
        <div class="color" />
    {/if}
    <div class="content">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</div>

<style>
    .project-tile {
        background-color: #eeeeee;
        min-height: 150px;
        display: flex;
        cursor: pointer;
        transition-duration: 0.2s;
        margin-bottom: 20px;
    }

    .project-tile:hover {
        background-color: #ccc;
    }

    .color {
        height: inherit;
        background-color: #242424;
        width: 4px;
        transition-duration: 0.2s;
    }

    .csharp {
        background-color: #178600;
    }

    .cpp {
        background-color: #f34b7d;
    }

    .js {
        background-color: #f1e05a;
    }

    .svelte {
        background-color: #ff3e00;
    }

    .content {
        margin: 20px 20px 20px 20px;
    }

    h2 {
        color: #242424;
        font-size: 32px;
        font-weight: 400;
        margin: 0 0 10px 0;
    }

    p {
        color: #242424;
        font-size: 16px;
        font-weight: 400;
    }
</style>
