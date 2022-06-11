<script context="module">
    export const load = async () => {
        const response = await fetch("https://api.github.com/users/mystere1337/repos");

        return {
            status: response.status,
            props: {
                repos: response.ok && (await response.json())
            },
        };
    };
</script>

<script>
    export let repos;
</script>

<svelte:head>
    <title>projects@mystere.dev</title>
</svelte:head>

<h1>projects@mystere.dev</h1>

{#each repos as repo}
    <div>
        <h3>
            <a href={repo.html_url}>
                {repo.name}
            </a>
        </h3>
    </div>
    <p class="subtitle">
        {repo.description}
    </p>
{/each}
