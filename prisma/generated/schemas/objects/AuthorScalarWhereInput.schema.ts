import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuthorScalarWhereInputObjectSchema),
        z.lazy(() => AuthorScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AuthorScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuthorScalarWhereInputObjectSchema),
        z.lazy(() => AuthorScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const AuthorScalarWhereInputObjectSchema = Schema;
