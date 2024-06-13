import { z } from 'zod';
import { MoocSessionCreateWithoutAuthorsInputObjectSchema } from './MoocSessionCreateWithoutAuthorsInput.schema';
import { MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutAuthorsInput.schema';
import { MoocSessionCreateOrConnectWithoutAuthorsInputObjectSchema } from './MoocSessionCreateOrConnectWithoutAuthorsInput.schema';
import { MoocSessionUpsertWithWhereUniqueWithoutAuthorsInputObjectSchema } from './MoocSessionUpsertWithWhereUniqueWithoutAuthorsInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithWhereUniqueWithoutAuthorsInputObjectSchema } from './MoocSessionUpdateWithWhereUniqueWithoutAuthorsInput.schema';
import { MoocSessionUpdateManyWithWhereWithoutAuthorsInputObjectSchema } from './MoocSessionUpdateManyWithWhereWithoutAuthorsInput.schema';
import { MoocSessionScalarWhereInputObjectSchema } from './MoocSessionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateManyWithoutAuthorsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutAuthorsInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateWithoutAuthorsInputObjectSchema)
            .array(),
          z.lazy(
            () => MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MoocSessionCreateOrConnectWithoutAuthorsInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionCreateOrConnectWithoutAuthorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MoocSessionUpsertWithWhereUniqueWithoutAuthorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpsertWithWhereUniqueWithoutAuthorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MoocSessionUpdateWithWhereUniqueWithoutAuthorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateWithWhereUniqueWithoutAuthorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MoocSessionUpdateManyWithWhereWithoutAuthorsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateManyWithWhereWithoutAuthorsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MoocSessionScalarWhereInputObjectSchema),
          z.lazy(() => MoocSessionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionUpdateManyWithoutAuthorsNestedInputObjectSchema =
  Schema;
