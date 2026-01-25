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

const identity = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    logo: z.string(),
    favicon: z.string(),
    theme_color: z.object({
      primary: z.string(),
      accent: z.string(),
    }),
    contact: z.object({
      name: z.string(),
      phone: z.string(),
      whatsapp: z.string(),
    }),
    location: z.object({
      map_url: z.string(),
    }),
  }),
});

export const collections = { blog, identity };
