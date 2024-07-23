import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    moocId: z.string(),
  })
  .strict();

export const PinnedMoocCreateManyUserInputObjectSchema = Schema;
