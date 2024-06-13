import { z } from 'zod';
import { MoocSessionCreateWithoutTypeInputObjectSchema } from './MoocSessionCreateWithoutTypeInput.schema';
import { MoocSessionUncheckedCreateWithoutTypeInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTypeInput.schema';
import { MoocSessionCreateOrConnectWithoutTypeInputObjectSchema } from './MoocSessionCreateOrConnectWithoutTypeInput.schema';
import { MoocSessionUpsertWithWhereUniqueWithoutTypeInputObjectSchema } from './MoocSessionUpsertWithWhereUniqueWithoutTypeInput.schema';
import { MoocSessionCreateManyTypeInputEnvelopeObjectSchema } from './MoocSessionCreateManyTypeInputEnvelope.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithWhereUniqueWithoutTypeInputObjectSchema } from './MoocSessionUpdateWithWhereUniqueWithoutTypeInput.schema';
import { MoocSessionUpdateManyWithWhereWithoutTypeInputObjectSchema } from './MoocSessionUpdateManyWithWhereWithoutTypeInput.schema';
import { MoocSessionScalarWhereInputObjectSchema } from './MoocSessionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUncheckedUpdateManyWithoutTypeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutTypeInputObjectSchema),
          z.lazy(() => MoocSessionCreateWithoutTypeInputObjectSchema).array(),
          z.lazy(() => MoocSessionUncheckedCreateWithoutTypeInputObjectSchema),
          z
            .lazy(() => MoocSessionUncheckedCreateWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MoocSessionCreateOrConnectWithoutTypeInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateOrConnectWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => MoocSessionUpsertWithWhereUniqueWithoutTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpsertWithWhereUniqueWithoutTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MoocSessionCreateManyTypeInputEnvelopeObjectSchema)
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
            () => MoocSessionUpdateWithWhereUniqueWithoutTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateWithWhereUniqueWithoutTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => MoocSessionUpdateManyWithWhereWithoutTypeInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionUpdateManyWithWhereWithoutTypeInputObjectSchema,
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

export const MoocSessionUncheckedUpdateManyWithoutTypeNestedInputObjectSchema =
  Schema;
