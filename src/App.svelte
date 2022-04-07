<script>
	import Article from "./components/Article.svelte";
	import GithubList from "./components/GithubList.svelte";
	import Section from "./components/Section.svelte";
	import ProjectTile from "./components/ProjectTile.svelte";
	import Skill from "./components/Skill.svelte";
	import Navbar from "./components/Navbar.svelte";
</script>

<main>
	<Article
		image="https://github.com/mystere1337.png"
		title="Aymeric Baud"
		description="French computer science student. Passionate about computing
			and IT, always in search to discover new technologies and
			trying to understand how they work."
	/>
	<div class="flex">
		<Section title="Projects">
			<ProjectTile
				title="vaulth"
				description="A solution to authenticate works of art thanks to the blockchain technology."
				language="null"
				creationdate="2021"
				href="#"
			/>
		</Section>
		<GithubList user="mystere1337" />
	</div>
	<Section title="Skills">
		<div class="flex">
			<p>System</p>
			<Skill title="C" color="#555555" level="3+ years" />
			<Skill title="C++" color="#f34b7d" level="3+ years" />
			<Skill title="C#" color="#178600" level="3+ years" />
			<Skill title="Java" color="#b07219" level="3+ years" />
		</div>
		<div class="flex">
			<p>Web</p>
			<Skill title="ReactJS" color="#F1E05A" level="2+ years" />
			<Skill title="Svelte" color="#f73a00" level="1+ years" />
			<Skill title="Razor" color="#178600" level="1+ years" />
			<Skill title="ExpressJS" color="#F1E05A" level="2+ years" />
		</div>
		<div class="flex">
			<p>Scripting</p>
			<Skill title="Python" color="#3572a5" level="3+ years" />
			<Skill title="Haskell" color="#5e5086" level="2+ years" />
			<Skill title="Shell" color="#89e051" level="3+ years" />
		</div>
		<div class="flex">
			<p>Database</p>
			<Skill title="MongoDB" color="#13aa52" level="2+ years" />
		</div>
		<div class="flex">
			<p>Dev</p>
			<Skill title="Git" color="#e84d31" level="3+ years" />
			<Skill title="Docker" color="#0098d5" level="2+ years" />
			<Skill title="Visual Studio 2022" color="#cb95f7" level="3+ years" />
			<Skill title="VSCode" color="#23a8f2" level="3+ years" />
		</div>
		<div class="flex">
			<p>Operating Systems</p>
			<Skill title="Windows" color="#0074d0" level="5+ years" />
			<Skill title="Linux" color="#f0b910" level="3+ years" />
		</div>
		<div class="flex">
			<p>Languages</p>
			<Skill title="English" level="B1" />
			<Skill title="French" level="Native" />
		</div>
	</Section>
</main>

<style>
	main {
		max-width: 1200px;
		margin: auto;
	}

	.flex {
		display: flex;
		gap: 20px;
		margin: 0;
	}
</style>
