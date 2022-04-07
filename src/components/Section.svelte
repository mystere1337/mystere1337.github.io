<script>
    export let title;
</script>

<div class="section">
    {#if title != "null"}
        <h1 class="title">{title}</h1>
    {/if}
    <slot />
</div>

<style>
    .section {
        width: 100%;
        padding-bottom: 50px;
    }

    .title {
        font-size: 32px;
        font-weight: bold;
        padding-bottom: 20px;
        margin: 0;
    }
</style>
