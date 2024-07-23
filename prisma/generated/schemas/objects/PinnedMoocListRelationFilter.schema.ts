import { z } from 'zod';
import { PinnedMoocWhereInputObjectSchema } from './PinnedMoocWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocListRelationFilter> = z
  .object({
    every: z.lazy(() => PinnedMoocWhereInputObjectSchema).optional(),
    some: z.lazy(() => PinnedMoocWhereInputObjectSchema).optional(),
    none: z.lazy(() => PinnedMoocWhereInputObjectSchema).optional(),
  })
  .strict();

export const PinnedMoocListRelationFilterObjectSchema = Schema;
