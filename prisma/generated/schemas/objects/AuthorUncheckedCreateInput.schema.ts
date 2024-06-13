import { z } from 'zod';
import { MoocSessionUncheckedCreateNestedManyWithoutAuthorsInputObjectSchema } from './MoocSessionUncheckedCreateNestedManyWithoutAuthorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    firstname: z.string(),
    lastname: z.string(),
    sessions: z
      .lazy(
        () =>
          MoocSessionUncheckedCreateNestedManyWithoutAuthorsInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AuthorUncheckedCreateInputObjectSchema = Schema;
