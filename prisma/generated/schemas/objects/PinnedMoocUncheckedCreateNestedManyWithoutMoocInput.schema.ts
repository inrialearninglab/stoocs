import { z } from 'zod';
import { PinnedMoocCreateWithoutMoocInputObjectSchema } from './PinnedMoocCreateWithoutMoocInput.schema';
import { PinnedMoocUncheckedCreateWithoutMoocInputObjectSchema } from './PinnedMoocUncheckedCreateWithoutMoocInput.schema';
import { PinnedMoocCreateOrConnectWithoutMoocInputObjectSchema } from './PinnedMoocCreateOrConnectWithoutMoocInput.schema';
import { PinnedMoocCreateManyMoocInputEnvelopeObjectSchema } from './PinnedMoocCreateManyMoocInputEnvelope.schema';
import { PinnedMoocWhereUniqueInputObjectSchema } from './PinnedMoocWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocUncheckedCreateNestedManyWithoutMoocInput> =
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
      createMany: z
        .lazy(() => PinnedMoocCreateManyMoocInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema),
          z.lazy(() => PinnedMoocWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PinnedMoocUncheckedCreateNestedManyWithoutMoocInputObjectSchema =
  Schema;
