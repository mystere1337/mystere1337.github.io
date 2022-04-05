<script>
    export let title;
</script>

<div class="project-list">
    <h1 class="title">{title}</h1>
    <slot />
</div>

<style>
    .project-list {
        width: 100%;
        padding-bottom: 50px;
    }

    .title {
        font-size: 32px;
        font-weight: bold;
        padding-bottom: 20px;
    }
</style>
