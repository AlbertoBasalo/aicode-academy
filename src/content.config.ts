// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

/**
 * Base schema for all collections
 * Defines a page with a title, subtitle, description, slug
 */
const baseSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().min(1),
  slug: z.string().min(1),
});

/**
 * Blog schema
 * Defines a blog post adding a category and date
 */
const blogSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  category: z.string().min(1),
  date: z.string().min(1)
});

/**
 * Blog collection
 * Defines a collection of blog posts
 */
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog/es" }),
  schema: blogSchema
});

// Other content collections

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: baseSchema
});

const cursosCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cursos" }),
  schema: baseSchema.extend({
    category: z.string().optional(),
    duration: z.string().optional(),
    level: z.enum(["básico", "intermedio", "avanzado"]).optional(),
    price: z.string().optional(),
    instructor: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    order: z.number().optional()
  })
});

const communityCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/community" }),
  schema: baseSchema.extend({
    date: z.string().optional(),
    cta: z.object({
      link: z.string(),
      text: z.string()
    }).optional()
  })
});

const metadataCollection = defineCollection({
  type: 'content',
  schema: baseSchema
});

/**
 * Content collections
 * - Blog, cursos, community, legal...
 * Each collection has a loader from the content folder and a schema for the content
 */
export const collections = {
  'blog': blogCollection,
  'legal': legalCollection,
  'cursos': cursosCollection,
  'community': communityCollection,
  'metadata': metadataCollection
};