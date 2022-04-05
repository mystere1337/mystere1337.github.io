<script>
	import Article from "./components/Article.svelte";
	import ProjectList from "./components/ProjectList.svelte";
	import ProjectTile from "./components/ProjectTile.svelte";
	import GithubList from "./components/GithubList.svelte";
</script>

<main>
	<Article
		image="https://github.com/mystere1337.png"
		title="Aymeric Baud"
		description="French computer science student. Passionate about computing
			and IT, always in search to discover new technologies and
			trying to understand how they work. Welcome to my portfolio,
			written in Svelte."
	/>
	<div class="flex">
		<ProjectList title="Personal Projects">
			<ProjectTile
				title="Vaulth"
				description="A solution to authenticate Works of Art thanks the Blockchain technology."
				href="#"
				language="null"
			/>
		</ProjectList>
		<GithubList title="Github Repos" user="mystere1337" />
	</div>
</main>

<style>
	main {
		max-width: 1200px;
		margin: auto;
	}

	.flex {
		display: flex;
		gap: 20px;
	}
</style>
