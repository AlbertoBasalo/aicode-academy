import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';



const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string()
  })
});


export const collections = {
  legal: legalCollection
};