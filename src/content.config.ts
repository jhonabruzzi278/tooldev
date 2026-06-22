import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.enum(['frontend', 'backend', 'devops', 'ia', 'diseno', 'productividad']),
    tags: z.array(z.string()),
    officialSite: z.string().url(),
    github: z.string().url().optional(),
    pricing: z.enum(['gratis', 'freemium', 'pago', 'open-source']),
    openSource: z.boolean(),
    license: z.string().optional(),
    technicalLevel: z.enum(['principiante', 'intermedio', 'avanzado']),
    compatibility: z.array(z.string()),
    featured: z.boolean().default(false),
    verified: z.boolean().default(false),
    screenshots: z.array(z.string()).optional(),
    features: z.array(z.string()),
    alternatives: z.array(z.string()).optional(),
    relatedTools: z.array(z.string()).optional(),
    howToUse: z.array(z.object({
      step: z.number(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    whenToUse: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    examples: z.array(z.object({
      title: z.string(),
      code: z.string(),
      output: z.string().optional(),
    })).optional(),
    tips: z.array(z.object({
      text: z.string(),
    })).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { tools };
