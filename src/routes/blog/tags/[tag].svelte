<script context="module">
    export const load = async ({ params, fetch }) => {
        const currentTag = params.tag;
        const response = await fetch("/api/posts.json");
        const posts = await response.json();

        const matchingPosts = posts.filter((post) =>
            post.meta.tags.includes(currentTag)
        );

        return {
            props: {
                posts: matchingPosts,
                tag: currentTag
            },
        };
    };
</script>

<script>
    export let posts;
    export let tag;
</script>

<svelte:head>
  <title>posts by tag: {tag} - mystere.dev</title>
</svelte:head>

<h1>Filter by tag</h1>
<p>Showing results for tag <b>{tag}</b></p>

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
