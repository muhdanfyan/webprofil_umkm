import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    judul: z.string(),
    tanggal: z.date(),
    kategori: z.string(),
    image: z.string(),
  }),
});

export const collections = { blog };
