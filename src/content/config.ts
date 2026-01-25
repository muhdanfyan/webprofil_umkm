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
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      image: z.string(),
    }),
    advantages: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })).optional(),
    services: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
    })).optional(),
    steps: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })),
    }).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    tips: z.array(z.object({
      title: z.string(),
      points: z.array(z.string()),
    })).optional(),
    stats: z.array(z.object({
      label: z.string(),
      value: z.string(),
      icon: z.string(),
    })).optional(),
    testimonials: z.array(z.object({
      name: z.string(),
      text: z.string(),
      location: z.string(),
      rating: z.number(),
    })).optional(),
  }),
});

export const collections = { blog, identity };
