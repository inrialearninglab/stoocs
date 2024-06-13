import { z } from 'zod';
import { MoocSessionCreateWithoutPlatformInputObjectSchema } from './MoocSessionCreateWithoutPlatformInput.schema';
import { MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema } from './MoocSessionUncheckedCreateWithoutPlatformInput.schema';
import { MoocSessionCreateOrConnectWithoutPlatformInputObjectSchema } from './MoocSessionCreateOrConnectWithoutPlatformInput.schema';
import { MoocSessionUpsertWithWhereUniqueWithoutPlatformInputObjectSchema } from './MoocSessionUpsertWithWhereUniqueWithoutPlatformInput.schema';
import { MoocSessionCreateManyPlatformInputEnvelopeObjectSchema } from './MoocSessionCreateManyPlatformInputEnvelope.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithWhereUniqueWithoutPlatformInputObjectSchema } from './MoocSessionUpdateWithWhereUniqueWithoutPlatformInput.schema';
import { MoocSessionUpdateManyWithWhereWithoutPlatformInputObjectSchema } from './MoocSessionUpdateManyWithWhereWithoutPlatformInput.schema';
import { MoocSessionScalarWhereInputObjectSchema } from './MoocSessionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateManyWithoutPlatformNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutPlatformInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateWithoutPlatformInputObjectSchema)
            .array(),
          z.lazy(
            () => MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MoocSessionCreateOrConnectWithoutPlatformInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionCreateOrConnectWithoutPlatformInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MoocSessionUpsertWithWhereUniqueWithoutPlatformInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpsertWithWhereUniqueWithoutPlatformInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MoocSessionCreateManyPlatformInputEnvelopeObjectSchema)
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
              MoocSessionUpdateWithWhereUniqueWithoutPlatformInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateWithWhereUniqueWithoutPlatformInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MoocSessionUpdateManyWithWhereWithoutPlatformInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateManyWithWhereWithoutPlatformInputObjectSchema,
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

export const MoocSessionUpdateManyWithoutPlatformNestedInputObjectSchema =
  Schema;
