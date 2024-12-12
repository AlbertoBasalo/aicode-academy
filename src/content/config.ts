import { defineCollection, z } from 'astro:content';

const courseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
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

const metadata = defineCollection({
  type: 'data',
  schema: z.object({
    pages: z.record(z.object({
      title: z.string(),
      description: z.string(),
      layout: z.object({
        title: z.string(),
        description: z.string()
      }),
      hero: z.object({
        title: z.string(),
        subtitle: z.string(),
        cta: z.string()
      }).optional(),
      lead: z.object({
        text: z.string()
      }).optional()
    }))
  })
});

export const collections = {
  courses: courseCollection,
  site: siteCollection,
  metadata
};