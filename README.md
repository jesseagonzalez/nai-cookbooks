# Latent Lab: a field guide to Nutanix Enterprise AI

An education site for Nutanix Enterprise AI with Learn, Demos, Cookbook, Recipes, Showcase, and Blog resources for beginners through experts. Live at https://jesseagonzalez.github.io/nai-cookbooks/

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build): fast static output, built-in search, dark/light mode, and pages written in Markdown/MDX.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in ./dist
npm run preview    # serve ./dist
```

## Structure

```
src/content/docs/    pages (folder = section, file = URL)
src/components/      ResourceLibrary (filterable library), LabDemo (browser labs), HomeHero, LearningPaths, Mermaid
src/styles/theme.css colors and layout tweaks
templates/           starter files for each content type
```

See `src/content/docs/contribute/content-guide.mdx` for the authoring guide.

## Deploy

`npm run build` produces plain static files in `dist/`, so the site can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3/Nutanix Objects + CDN, or any web server. Set `site` in `astro.config.mjs` to the final URL.
