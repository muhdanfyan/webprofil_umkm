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
      email: z.string().optional(),
      instagram: z.string().optional(),
      facebook: z.string().optional(),
    }),
    location: z.object({
      address: z.string().optional(),
      map_embed_url: z.string(),
    }),
    advantages: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })).optional(),
  }),
});

export const collections = { blog, identity };
