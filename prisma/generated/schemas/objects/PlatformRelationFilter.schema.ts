import { z } from 'zod';
import { PlatformWhereInputObjectSchema } from './PlatformWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformRelationFilter> = z
  .object({
    is: z
      .lazy(() => PlatformWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PlatformWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PlatformRelationFilterObjectSchema = Schema;
