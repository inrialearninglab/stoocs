import { z } from 'zod';
import { PinnedMoocUserIdMoocIdCompoundUniqueInputObjectSchema } from './PinnedMoocUserIdMoocIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId_moocId: z
      .lazy(() => PinnedMoocUserIdMoocIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const PinnedMoocWhereUniqueInputObjectSchema = Schema;
