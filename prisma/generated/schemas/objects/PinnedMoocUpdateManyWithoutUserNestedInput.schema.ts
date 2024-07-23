import { z } from 'zod';
import { PinnedMoocCreateWithoutUserInputObjectSchema } from './PinnedMoocCreateWithoutUserInput.schema';
import { PinnedMoocUncheckedCreateWithoutUserInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutUserInput.schema';
import { PinnedMoocCreateOrConnectWithoutUserInputObjectSchema } from './PinnedMoocCreateOrConnectWithoutUserInput.schema';
import { PinnedMoocUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PinnedMoocUpsertWithWhereUniqueWithoutUserInput.schema';
import { PinnedMoocCreateManyUserInputEnvelopeObjectSchema } from './PinnedMoocCreateManyUserInputEnvelope.schema';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';
import { PinnedMoocUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PinnedMoocUpdateWithWhereUniqueWithoutUserInput.schema';
import { PinnedMoocUpdateManyWithWhereWithoutUserInputObjectSchema } from './PinnedMoocUpdateManyWithWhereWithoutUserInput.schema';
import { PinnedMoocScalarWhereInputObjectSchema } from './PinnedMoocScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PinnedMoocCreateWithoutUserInputObjectSchema),
        z.lazy(() => PinnedMoocCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => PinnedMoocUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => PinnedMoocUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PinnedMoocCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => PinnedMoocCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => PinnedMoocUpsertWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => PinnedMoocUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PinnedMoocCreateManyUserInputEnvelopeObjectSchema)
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
          () => PinnedMoocUpdateWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => PinnedMoocUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PinnedMoocUpdateManyWithWhereWithoutUserInputObjectSchema),
        z
          .lazy(() => PinnedMoocUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const PinnedMoocUpdateManyWithoutUserNestedInputObjectSchema = Schema;
