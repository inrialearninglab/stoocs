import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateManyMoocInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
  })
  .strict();

export const PinnedMoocCreateManyMoocInputObjectSchema = Schema;
