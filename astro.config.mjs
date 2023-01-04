import { defineConfig } from 'astro/config'
import NetlifyCMS from 'astro-netlify-cms'

export default defineConfig({
	site: 'https://aifuse.github.io',
	base: '/aifuse-web',
	experimental: {
		integrations: true
	},
	vite: {
		optimizeDeps: {},
		ssr: {
			external: ['atomico/html']
		}
	},
	integrations: [
		NetlifyCMS({
			config: {
				backend: {
					name: 'git-gateway',
					branch: 'main'
				},
				publish_mode: 'editorial_workflow',
				media_folder: 'public/uploads',
				public_folder: 'public/uploads',
				site_url: 'https://aifuse.com',
				display_url: 'https://aifuse.com',
				logo_url: 'https://aifuse.com/logo.svg',
				collections: [
					// Content collections
					{
						name: 'posts',
						label: 'Posts',
						folder: 'src/pages/blog',
						create: true,
						slug: '{{slug}}',
						label_singular: 'Post',
						fields: [
							{ label: 'Title', name: 'title', widget: 'string' },
							{ label: 'Description', name: 'description', widget: 'string' },
							{ label: 'Date', name: 'date', widget: 'datetime' },
							{
								label: 'Language',
								name: 'lang',
								widget: 'select',
								options: ['en'],
								default: 'en'
							},
							{
								label: 'Cover',
								name: 'cover',
								widget: 'image',
								required: false
							},
							{ label: 'Author', name: 'author', widget: 'string' },
							{
								label: 'Layout',
								name: 'layout',
								widget: 'hidden',
								default: '../../components/templates/BlogPostTemplate.astro'
							},
							{
								label: 'Tags',
								name: 'tags',
								widget: 'list',
								allow_add: true,
								default: ['IT']
							},
							{
								label: 'Categories',
								name: 'categories',
								widget: 'list',
								allow_add: true,
								default: ['IT']
							},
							{
								label: 'Draft',
								name: 'draft',
								widget: 'boolean',
								default: false
							},
							{ label: 'Body', name: 'body', widget: 'markdown' }
						]
					}
				]
			}
		})
	]
})
