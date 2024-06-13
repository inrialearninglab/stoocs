import { z } from 'zod';
import { SessionTypeWhereInputObjectSchema } from './SessionTypeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeRelationFilter> = z
  .object({
    is: z
      .lazy(() => SessionTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SessionTypeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SessionTypeRelationFilterObjectSchema = Schema;
