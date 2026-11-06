import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/** Extra frontmatter used by Latent Lab resource pages. All optional so plain pages still work. */
export const levels = ['beginner', 'intermediate', 'advanced'] as const;
export const contentTypes = [
  'concept', 'demo', 'cookbook', 'playbook', 'recipe', 'showcase', 'blog', 'guide',
] as const;

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        level: z.enum(levels).optional(),
        type: z.enum(contentTypes).optional(),
        /** Rough time to complete, e.g. "15 min". */
        duration: z.string().optional(),
        /** Library facets, e.g. topic "Endpoint APIs", task "Connect & integrate". */
        topic: z.string().optional(),
        task: z.string().optional(),
        tags: z.array(z.string()).default([]),
        /** External references shown at the end of the page. */
        sources: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
        /** Blog posts only. */
        date: z.coerce.date().optional(),
        author: z.string().optional(),
      }),
    }),
  }),
};
