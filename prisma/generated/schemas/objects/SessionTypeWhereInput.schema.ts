import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MoocSessionListRelationFilterObjectSchema } from './MoocSessionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SessionTypeWhereInputObjectSchema),
        z.lazy(() => SessionTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SessionTypeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionTypeWhereInputObjectSchema),
        z.lazy(() => SessionTypeWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    moocSession: z
      .lazy(() => MoocSessionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const SessionTypeWhereInputObjectSchema = Schema;
