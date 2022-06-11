import static_adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter(),
		prerender: {
			default: true
		},
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			},
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				posts: 'src/routes/blog/posts/_post.svelte'
			},
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		})
	],
};

export default config;
