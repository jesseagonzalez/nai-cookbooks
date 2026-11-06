import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/**
 * Extra frontmatter used across the Academy.
 * All fields are optional so plain reference pages still work.
 */
export const levels = ['beginner', 'intermediate', 'advanced'] as const;
export const contentTypes = ['concept', 'tutorial', 'recipe', 'demo', 'blog', 'guide'] as const;

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        level: z.enum(levels).optional(),
        type: z.enum(contentTypes).optional(),
        /** Rough time to complete, e.g. "15 min". */
        duration: z.string().optional(),
        tags: z.array(z.string()).default([]),
        /** Blog posts only. */
        date: z.coerce.date().optional(),
        author: z.string().optional(),
      }),
    }),
  }),
};
