import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		experimental: {
			async: true
		},
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		experimental: {
			remoteFunctions: true
		},

		adapter: adapter({
			platformProxy: {
				configPath: './wrangler.jsonc'
			}
		})
	}
};

export default config;
