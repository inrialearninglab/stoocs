import { z } from 'zod';
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorUpdateWithoutSessionsInputObjectSchema } from './AuthorUpdateWithoutSessionsInput.schema';
import { AuthorUncheckedUpdateWithoutSessionsInputObjectSchema } from './AuthorUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorUpdateWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AuthorUpdateWithoutSessionsInputObjectSchema),
        z.lazy(() => AuthorUncheckedUpdateWithoutSessionsInputObjectSchema),
      ]),
    })
    .strict();

export const AuthorUpdateWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
