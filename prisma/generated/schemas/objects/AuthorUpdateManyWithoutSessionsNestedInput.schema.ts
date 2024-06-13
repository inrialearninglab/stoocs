import { z } from 'zod';
import { AuthorCreateWithoutSessionsInputObjectSchema } from './AuthorCreateWithoutSessionsInput.schema';
import { AuthorUncheckedCreateWithoutSessionsInputObjectSchema } from './AuthorUncheckedCreateWithoutSessionsInput.schema';
import { AuthorCreateOrConnectWithoutSessionsInputObjectSchema } from './AuthorCreateOrConnectWithoutSessionsInput.schema';
import { AuthorUpsertWithWhereUniqueWithoutSessionsInputObjectSchema } from './AuthorUpsertWithWhereUniqueWithoutSessionsInput.schema';
import { AuthorWhereUniqueInputObjectSchema } from './AuthorWhereUniqueInput.schema';
import { AuthorUpdateWithWhereUniqueWithoutSessionsInputObjectSchema } from './AuthorUpdateWithWhereUniqueWithoutSessionsInput.schema';
import { AuthorUpdateManyWithWhereWithoutSessionsInputObjectSchema } from './AuthorUpdateManyWithWhereWithoutSessionsInput.schema';
import { AuthorScalarWhereInputObjectSchema } from './AuthorScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AuthorUpdateManyWithoutSessionsNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => AuthorUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
        ),
        z
          .lazy(
            () => AuthorUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => AuthorWhereUniqueInputObjectSchema),
        z.lazy(() => AuthorWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AuthorWhereUniqueInputObjectSchema),
        z.lazy(() => AuthorWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AuthorWhereUniqueInputObjectSchema),
        z.lazy(() => AuthorWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AuthorWhereUniqueInputObjectSchema),
        z.lazy(() => AuthorWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => AuthorUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
        ),
        z
          .lazy(
            () => AuthorUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => AuthorUpdateManyWithWhereWithoutSessionsInputObjectSchema),
        z
          .lazy(() => AuthorUpdateManyWithWhereWithoutSessionsInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AuthorScalarWhereInputObjectSchema),
        z.lazy(() => AuthorScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AuthorUpdateManyWithoutSessionsNestedInputObjectSchema = Schema;
