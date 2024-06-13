import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MoocSessionListRelationFilterObjectSchema } from './MoocSessionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PlatformWhereInputObjectSchema),
        z.lazy(() => PlatformWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PlatformWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PlatformWhereInputObjectSchema),
        z.lazy(() => PlatformWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    MoocSession: z
      .lazy(() => MoocSessionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PlatformWhereInputObjectSchema = Schema;
