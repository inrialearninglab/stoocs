import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { MoocSessionListRelationFilterObjectSchema } from './MoocSessionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuthorWhereInputObjectSchema),
        z.lazy(() => AuthorWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AuthorWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuthorWhereInputObjectSchema),
        z.lazy(() => AuthorWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    firstname: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastname: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sessions: z
      .lazy(() => MoocSessionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const AuthorWhereInputObjectSchema = Schema;
