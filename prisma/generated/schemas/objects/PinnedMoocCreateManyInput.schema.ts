import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateManyInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    moocId: z.string(),
  })
  .strict();

export const PinnedMoocCreateManyInputObjectSchema = Schema;
