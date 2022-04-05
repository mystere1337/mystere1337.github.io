<script>
    import ProjectTile from "./ProjectTile.svelte";
    export let title;
    export let user;

    const fetchRepos = (async (user) => {
        const response = await fetch(
            "https://api.github.com/users/" + user + "/repos"
        );
        return await response.json();
    })(user);
</script>

<div class="project-list">
    <h1 class="title">{title}</h1>
    {#await fetchRepos}
        <p>...waiting</p>
    {:then data}
        {#each data as repo}
            {#if repo.name != user}
                {#if repo.description === null}
                <ProjectTile
                    title={repo.name}
                    description="No description provided."
                    href={repo.html_url}
                    language={repo.language}
                />
                {:else}
                <ProjectTile
                    title={repo.name}
                    description={repo.description}
                    href={repo.html_url}
                    language={repo.language}
                />
                {/if}
            {/if}
        {/each}
    {:catch error}
        <p>An error occurred!</p>
    {/await}
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
