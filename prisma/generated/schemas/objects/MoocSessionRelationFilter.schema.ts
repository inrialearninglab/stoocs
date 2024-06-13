import { z } from 'zod';
import { MoocSessionWhereInputObjectSchema } from './MoocSessionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionRelationFilter> = z
  .object({
    is: z
      .lazy(() => MoocSessionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MoocSessionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MoocSessionRelationFilterObjectSchema = Schema;
