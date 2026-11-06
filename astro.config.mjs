// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeBaseLinks from './plugins/rehype-base-links.mjs';

// Hosted on GitHub Pages at https://jesseagonzalez.github.io/nai-cookbooks/
const site = process.env.SITE_URL ?? 'https://jesseagonzalez.github.io';
const base = process.env.BASE_PATH ?? '/nai-cookbooks';

export default defineConfig({
  site,
  base,
  markdown: { rehypePlugins: [rehypeBaseLinks(base)] },
  integrations: [
    starlight({
      title: 'Nutanix Enterprise AI Academy',
      description:
        'Learn to deploy, operate, and build with Nutanix Enterprise AI, from first concepts to production patterns.',
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      customCss: ['./src/styles/theme.css'],
      lastUpdated: true,
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jesseagonzalez/nai-cookbooks' },
      ],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Welcome', link: '/start-here/overview/' },
            { label: 'Learning paths', link: '/start-here/learning-paths/' },
          ],
        },
        { label: 'Concepts', items: [{ autogenerate: { directory: 'concepts' } }] },
        { label: 'Tutorials', items: [{ autogenerate: { directory: 'tutorials' } }] },
        { label: 'Recipes', items: [{ autogenerate: { directory: 'recipes' } }] },
        { label: 'Demos & showcases', items: [{ autogenerate: { directory: 'demos' } }] },
        { label: 'Blog', items: [{ autogenerate: { directory: 'blog' } }] },
        {
          label: 'Contribute',
          collapsed: true,
          items: [{ autogenerate: { directory: 'contribute' } }],
        },
      ],
    }),
  ],
});
