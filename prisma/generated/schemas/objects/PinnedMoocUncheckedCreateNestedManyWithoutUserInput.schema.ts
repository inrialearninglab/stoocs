import { z } from 'zod';
import { PinnedMoocCreateWithoutUserInputObjectSchema } from './PinnedMoocCreateWithoutUserInput.schema';
import { PinnedMoocUncheckedCreateWithoutUserInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutUserInput.schema';
import { PinnedMoocCreateOrConnectWithoutUserInputObjectSchema } from './PinnedMoocCreateOrConnectWithoutUserInput.schema';
import { PinnedMoocCreateManyUserInputEnvelopeObjectSchema } from './PinnedMoocCreateManyUserInputEnvelope.schema';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUncheckedCreateNestedManyWithoutUserInput> =
  z
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
      createMany: z
        .lazy(() => PinnedMoocCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PinnedMoocUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
