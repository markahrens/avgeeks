// 1. Import utilities from `astro:content`
import {z, reference, defineCollection } from 'astro:content';

const creators = defineCollection({
  type: 'data', // v2.5.0 and later
  schema:  ({ image }) => z.object({
    name: z.string(),
    link: z.string().url().optional(),
    photo: image()
  }),
});

const locations = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    code: z.string().optional(),
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
    country: z.string(),
    region: z.string()
  })
});

const trips = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    source: z.string(),
    source_id: z.string(),
    type: z.string(),
    stops: z.array(reference('locations')),
    postdate:  z.string().transform((str) => new Date(str))
  })
});

export const collections = {
  'creators': creators,
  'locations': locations,
  'trips': trips
};