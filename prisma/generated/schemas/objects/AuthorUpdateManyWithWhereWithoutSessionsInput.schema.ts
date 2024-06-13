import { z } from 'zod';
import { AuthorScalarWhereInputObjectSchema } from './AuthorScalarWhereInput.schema';
import { AuthorUpdateManyMutationInputObjectSchema } from './AuthorUpdateManyMutationInput.schema';
import { AuthorUncheckedUpdateManyWithoutAuthorsInputObjectSchema } from './AuthorUncheckedUpdateManyWithoutAuthorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorUpdateManyWithWhereWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => AuthorScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AuthorUpdateManyMutationInputObjectSchema),
        z.lazy(() => AuthorUncheckedUpdateManyWithoutAuthorsInputObjectSchema),
      ]),
    })
    .strict();

export const AuthorUpdateManyWithWhereWithoutSessionsInputObjectSchema = Schema;
