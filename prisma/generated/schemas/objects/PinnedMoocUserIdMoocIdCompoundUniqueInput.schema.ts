import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUserIdMoocIdCompoundUniqueInput> = z
  .object({
    userId: z.string(),
    moocId: z.string(),
  })
  .strict();

export const PinnedMoocUserIdMoocIdCompoundUniqueInputObjectSchema = Schema;
