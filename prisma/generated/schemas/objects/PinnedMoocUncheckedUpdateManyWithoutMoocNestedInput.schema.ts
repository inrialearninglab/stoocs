import { z } from 'zod';
import { PinnedMoocCreateWithoutMoocInputObjectSchema } from './PinnedMoocCreateWithoutMoocInput.schema';
import { PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutMoocInput.schema';
import { PinnedMoocCreateOrConnectWithoutMoocInputObjectSchema } from './PinnedMoocCreateOrConnectWithoutMoocInput.schema';
import { PinnedMoocUpsertWithWhereUniqueWithoutMoocInputObjectSchema } from './PinnedMoocUpsertWithWhereUniqueWithoutMoocInput.schema';
import { PinnedMoocCreateManyMoocInputEnvelopeObjectSchema } from './PinnedMoocCreateManyMoocInputEnvelope.schema';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocUpdateWithWhereUniqueWithoutMoocInputObjectSchema } from './PinnedMoocUpdateWithWhereUniqueWithoutMoocInput.schema';
import { PinnedMoocUpdateManyWithWhereWithoutMoocInputObjectSchema } from './PinnedMoocUpdateManyWithWhereWithoutMoocInput.schema';
import { PinnedMoocScalarWhereInputObjectSchema } from './PinnedMoocScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUncheckedUpdateManyWithoutMoocNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PinnedMoocCreateWithoutMoocInputObjectSchema),
          z.lazy(() => PinnedMoocCreateWithoutMoocInputObjectSchema).array(),
          z.lazy(() => PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema),
          z
            .lazy(() => PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PinnedMoocCreateOrConnectWithoutMoocInputObjectSchema),
          z
            .lazy(() => PinnedMoocCreateOrConnectWithoutMoocInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PinnedMoocUpsertWithWhereUniqueWithoutMoocInputObjectSchema,
          ),
          z
            .lazy(
              () => PinnedMoocUpsertWithWhereUniqueWithoutMoocInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PinnedMoocCreateManyMoocInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PinnedMoocUpdateWithWhereUniqueWithoutMoocInputObjectSchema,
          ),
          z
            .lazy(
              () => PinnedMoocUpdateWithWhereUniqueWithoutMoocInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PinnedMoocUpdateManyWithWhereWithoutMoocInputObjectSchema,
          ),
          z
            .lazy(
              () => PinnedMoocUpdateManyWithWhereWithoutMoocInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PinnedMoocScalarWhereInputObjectSchema),
          z.lazy(() => PinnedMoocScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PinnedMoocUncheckedUpdateManyWithoutMoocNestedInputObjectSchema =
  Schema;
