import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { MoocSessionListRelationFilterObjectSchema } from './MoocSessionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MoocWhereInputObjectSchema),
        z.lazy(() => MoocWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MoocWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MoocWhereInputObjectSchema),
        z.lazy(() => MoocWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    organization: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    theme: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    target: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    sessions: z
      .lazy(() => MoocSessionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const MoocWhereInputObjectSchema = Schema;
