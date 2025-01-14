import { defineCollection, z } from 'astro:content';

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string()
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string()
  })
});

export const collections = {
  legal: legalCollection,
  blog: blogCollection
};