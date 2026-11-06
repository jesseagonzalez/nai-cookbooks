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
      title: 'Nutanix AI Labs',
      description:
        'A field guide to Nutanix Enterprise AI: learn to deploy, integrate, and operate private AI, from first concepts to production patterns.',
      customCss: ['./src/styles/theme.css'],
      routeMiddleware: './src/routeData.ts',
      lastUpdated: true,
      components: {
        Header: './src/components/Header.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        PageTitle: './src/components/PageTitle.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        Footer: './src/components/Footer.astro',
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
        { label: 'Learn', items: [{ autogenerate: { directory: 'learn' } }] },
        { label: 'Cookbook', items: [{ autogenerate: { directory: 'cookbook' } }] },
        { label: 'Recipes', items: [{ autogenerate: { directory: 'recipes' } }] },
        { label: 'Showcase', items: [{ autogenerate: { directory: 'showcase' } }] },
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
