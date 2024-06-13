import { z } from 'zod';
import { MoocWhereInputObjectSchema } from './MoocWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocRelationFilter> = z
  .object({
    is: z
      .lazy(() => MoocWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MoocWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MoocRelationFilterObjectSchema = Schema;
