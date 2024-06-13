import { z } from 'zod';
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorUpdateWithoutSessionsInputObjectSchema } from './AuthorUpdateWithoutSessionsInput.schema';
import { AuthorUncheckedUpdateWithoutSessionsInputObjectSchema } from './AuthorUncheckedUpdateWithoutSessionsInput.schema';
import { AuthorCreateWithoutSessionsInputObjectSchema } from './AuthorCreateWithoutSessionsInput.schema';
import { AuthorUncheckedCreateWithoutSessionsInputObjectSchema } from './AuthorUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorUpsertWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => AuthorWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AuthorUpdateWithoutSessionsInputObjectSchema),
        z.lazy(() => AuthorUncheckedUpdateWithoutSessionsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AuthorCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => AuthorUncheckedCreateWithoutSessionsInputObjectSchema),
      ]),
    })
    .strict();

export const AuthorUpsertWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
