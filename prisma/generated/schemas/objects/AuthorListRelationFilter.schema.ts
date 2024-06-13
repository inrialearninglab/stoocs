import { z } from 'zod';
import { AuthorWhereInputObjectSchema } from './AuthorWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorListRelationFilter> = z
  .object({
    every: z.lazy(() => AuthorWhereInputObjectSchema).optional(),
    some: z.lazy(() => AuthorWhereInputObjectSchema).optional(),
    none: z.lazy(() => AuthorWhereInputObjectSchema).optional(),
  })
  .strict();

export const AuthorListRelationFilterObjectSchema = Schema;
