import { defineCollection, z } from 'astro:content';

const courseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    level: z.string(),
    duration: z.string(),
    price: z.string(),
    prerequisites: z.array(z.string()),
    description: z.string(),
    outcomes: z.array(z.string()),
    curriculum: z.array(z.object({
      module: z.string(),
      topics: z.array(z.string())
    }))
  })
});

const siteCollection = defineCollection({
  type: 'data',
  schema: z.object({
    features: z.array(z.object({
      title: z.string(),
      description: z.string()
    })).optional()
  })
});

export const collections = {
  courses: courseCollection,
  site: siteCollection
};