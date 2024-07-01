import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    organization: z.literal(true).optional(),
    title: z.literal(true).optional(),
    courseNumber: z.literal(true).optional(),
    description: z.literal(true).optional(),
    theme: z.literal(true).optional(),
    target: z.literal(true).optional(),
  })
  .strict();

export const MoocMinAggregateInputObjectSchema = Schema;
