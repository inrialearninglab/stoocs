import { z } from 'zod';
import { MoocSessionWhereInputObjectSchema } from './MoocSessionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionListRelationFilter> = z
  .object({
    every: z.lazy(() => MoocSessionWhereInputObjectSchema).optional(),
    some: z.lazy(() => MoocSessionWhereInputObjectSchema).optional(),
    none: z.lazy(() => MoocSessionWhereInputObjectSchema).optional(),
  })
  .strict();

export const MoocSessionListRelationFilterObjectSchema = Schema;
