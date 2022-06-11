<script context="module">
    export const load = async ({ fetch }) => {
        const posts = await fetch("/api/posts.json");
        const allPosts = await posts.json();

        return {
            props: {
                posts: allPosts,
            },
        };
    };
</script>

<script>
    export let posts;
</script>

<svelte:head>
    <title>blog@mystere.dev</title>
</svelte:head>

<h1>blog@mystere.dev</h1>

{#each posts as post}
    <div>
        <h3>
            <a href={post.path}>
                {post.meta.title}
            </a>
        </h3>
    </div>
    <p class="subtitle">{post.meta.desc} <i style="color: #e5c07a">[{post.meta.date}]</i></p>
{/each}