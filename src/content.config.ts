import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    vertical: z.enum(["plumbing", "heating", "cooling", "electrical", "company"]),
    heroImage: z.string(),
    tags: z.array(z.string()).default([]),
    video: z.boolean().default(false),
  }),
});

export const collections = { blog };
