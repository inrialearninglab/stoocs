import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUncheckedCreateWithoutMoocInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
  })
  .strict();

export const PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema = Schema;
