import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.date(),
    author: z.string().default('Klyn'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.enum(['limpieza', 'papeleria', 'industrias', 'guias']).default('guias'),
  }),
});

export const collections = { blog };
