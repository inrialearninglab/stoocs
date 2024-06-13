import { z } from 'zod';
import { MoocSessionCreateNestedManyWithoutAuthorsInputObjectSchema } from './MoocSessionCreateNestedManyWithoutAuthorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorCreateInput> = z
  .object({
    id: z.string().optional(),
    firstname: z.string(),
    lastname: z.string(),
    sessions: z
      .lazy(() => MoocSessionCreateNestedManyWithoutAuthorsInputObjectSchema)
      .optional(),
  })
  .strict();

export const AuthorCreateInputObjectSchema = Schema;
