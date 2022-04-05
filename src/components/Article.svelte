<script>
    import SvgLink from "./SvgLink.svelte";

    export let image;
    export let title;
    export let description;
</script>

<div class="container">
    <div class="flex-container">
        <div class="image-container">
            <img src={image} alt="" />
        </div>
        <div class="article">
            <h1>{title}</h1>
            <br />
            <span class="subtitle">{description}</span>
            <br />
            <div class="links-container">
                <SvgLink
                    icon={"github"}
                    href={"https://github.com/mystere1337/"}
                />
                <SvgLink
                    icon={"twitter"}
                    href={"https://twitter.com/mystere1337/"}
                />
                <SvgLink
                    icon={"linkedin"}
                    href={"https://www.linkedin.com/in/aymeric-baud/"}
                />
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        padding: 60px 0 60px 0;
    }
    .flex-container {
        display: flex;
        gap: 50px;
    }
    .links-container {
        display: flex;
        gap: 20px;
    }
    .image-container > img {
        flex-shrink: 1;
        min-width: 100%;
        min-height: 100%;
    }
    .image-container {
        background-color: blue;
        /* border-radius: 500px; */
        min-width: 256px;
        min-height: 256px;
        max-width: 256px;
        max-height: 256px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .article {
        max-width: 590px;
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-size: 64px;
        font-weight: bold;
        margin: 0;
    }
    .subtitle {
        font-size: 20px;
    }
    .subtitle {
        font-size: 20px;
    }
</style>
