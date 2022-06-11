<script>
    export let title;
    export let date;
    export let tags;
    export let desc;
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
</svelte:head>

<div>
    <h2>{title}</h2>
    <p>{desc} <i style="color: #e5c07a">[{date}]</i></p>

    <div class="tags">
        {#if tags.length}
            {#each tags as tag}
                <h4>
                    <a href="/blog/tags/{tag}">
                        {tag}
                    </a>
                </h4>
            {/each}
        {/if}
    </div>
</div>

<br />
<hr />
<br />

<slot />

<style lang="scss">
    h4 {
        margin-top: 0;
    }

    hr {
        height: 1px;
        border: none;
        background: #abb2bf;
        opacity: 30%;
    }

    .tags {
        display: flex;
        gap: 1rem;
        padding: 0;
        margin: 0;
    }
</style>
