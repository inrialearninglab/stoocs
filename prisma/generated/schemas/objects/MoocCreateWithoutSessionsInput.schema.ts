import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    theme: z.string().optional().nullable(),
    target: z.string().optional().nullable(),
  })
  .strict();

export const MoocCreateWithoutSessionsInputObjectSchema = Schema;
