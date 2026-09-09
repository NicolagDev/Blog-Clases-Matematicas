import { defineCollection, z } from 'astro:content';

const explicacionesCollection = defineCollection({
  type: 'content', // los archivos .md viven en src/content/explicaciones
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    difficulty: z.enum(['Principiante', 'Intermedio', 'Avanzado']),
  }),
});

export const collections = {
  explicaciones: explicacionesCollection,
};
