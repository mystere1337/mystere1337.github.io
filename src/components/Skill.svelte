<script>
    export let title;
    export let level;
    export let color;
</script>

<div class="skill">
    <div class="color default" style="background-color: {color}" />
    <div class="content">
        <h2>{title}</h2>
        <p>{level}</p>
    </div>
</div>

<style>
    .rate {
        background-color: aqua;
        min-height: 4px;
        min-width: 20px;
    }
    .skill {
        background-color: rgb(0, 0, 0, .3);
        min-height: 40px;
        display: flex;
        transition-duration: 0.2s;
        margin-bottom: 20px;
    }

    .color {
        height: inherit;
        background-color: var(--text);
        width: 4px;
        transition-duration: 0.2s;
    }

    .content {
        display: flex;
        align-items: center;
        gap: 50px;
        margin: 0px 20px 0px 20px;
    }

    h2 {
        color: var(--text);
        font-size: 20px;
        font-weight: 400;
        margin: 0 0 0 0;
    }
</style>
