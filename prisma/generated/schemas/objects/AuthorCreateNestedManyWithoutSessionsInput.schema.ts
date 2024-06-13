import { z } from 'zod';
import { AuthorCreateWithoutSessionsInputObjectSchema } from './AuthorCreateWithoutSessionsInput.schema';
import { AuthorUncheckedCreateWithoutSessionsInputObjectSchema } from './AuthorUncheckedCreateWithoutSessionsInput.schema';
import { AuthorCreateOrConnectWithoutSessionsInputObjectSchema } from './AuthorCreateOrConnectWithoutSessionsInput.schema';
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorCreateNestedManyWithoutSessionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AuthorCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => AuthorCreateWithoutSessionsInputObjectSchema).array(),
        z.lazy(() => AuthorUncheckedCreateWithoutSessionsInputObjectSchema),
        z
          .lazy(() => AuthorUncheckedCreateWithoutSessionsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AuthorCreateOrConnectWithoutSessionsInputObjectSchema),
        z
          .lazy(() => AuthorCreateOrConnectWithoutSessionsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AuthorWhereUniqueInputObjectSchema),
        z.lazy(() => AuthorWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AuthorCreateNestedManyWithoutSessionsInputObjectSchema = Schema;
