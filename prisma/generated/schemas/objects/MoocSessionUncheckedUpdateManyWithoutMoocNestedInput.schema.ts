import { z } from 'zod';
import { MoocSessionCreateWithoutMoocInputObjectSchema } from './MoocSessionCreateWithoutMoocInput.schema';
import { MoocSessionUncheckedCreateWithoutMoocInputObjectSchema } from './MoocSessionUncheckedCreateWithoutMoocInput.schema';
import { MoocSessionCreateOrConnectWithoutMoocInputObjectSchema } from './MoocSessionCreateOrConnectWithoutMoocInput.schema';
import { MoocSessionUpsertWithWhereUniqueWithoutMoocInputObjectSchema } from './MoocSessionUpsertWithWhereUniqueWithoutMoocInput.schema';
import { MoocSessionCreateManyMoocInputEnvelopeObjectSchema } from './MoocSessionCreateManyMoocInputEnvelope.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithWhereUniqueWithoutMoocInputObjectSchema } from './MoocSessionUpdateWithWhereUniqueWithoutMoocInput.schema';
import { MoocSessionUpdateManyWithWhereWithoutMoocInputObjectSchema } from './MoocSessionUpdateManyWithWhereWithoutMoocInput.schema';
import { MoocSessionScalarWhereInputObjectSchema } from './MoocSessionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUncheckedUpdateManyWithoutMoocNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutMoocInputObjectSchema),
          z.lazy(() => MoocSessionCreateWithoutMoocInputObjectSchema).array(),
          z.lazy(() => MoocSessionUncheckedCreateWithoutMoocInputObjectSchema),
          z
            .lazy(() => MoocSessionUncheckedCreateWithoutMoocInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MoocSessionCreateOrConnectWithoutMoocInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateOrConnectWithoutMoocInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MoocSessionUpsertWithWhereUniqueWithoutMoocInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpsertWithWhereUniqueWithoutMoocInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MoocSessionCreateManyMoocInputEnvelopeObjectSchema)
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
            () => MoocSessionUpdateWithWhereUniqueWithoutMoocInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateWithWhereUniqueWithoutMoocInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MoocSessionUpdateManyWithWhereWithoutMoocInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionUpdateManyWithWhereWithoutMoocInputObjectSchema,
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

export const MoocSessionUncheckedUpdateManyWithoutMoocNestedInputObjectSchema =
  Schema;
