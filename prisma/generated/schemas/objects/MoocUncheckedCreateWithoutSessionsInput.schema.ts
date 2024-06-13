import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    organization: z.string(),
    title: z.string(),
    description: z.string().optional().nullable(),
    theme: z.string().optional().nullable(),
    target: z.string().optional().nullable(),
  })
  .strict();

export const MoocUncheckedCreateWithoutSessionsInputObjectSchema = Schema;
