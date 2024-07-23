import { z } from 'zod';
import { MoocCreateWithoutPinnedByInputObjectSchema } from './MoocCreateWithoutPinnedByInput.schema';
import { MoocUncheckedCreateWithoutPinnedByInputObjectSchema } from './MoocUncheckedCreateWithoutPinnedByInput.schema';
import { MoocCreateOrConnectWithoutPinnedByInputObjectSchema } from './MoocCreateOrConnectWithoutPinnedByInput.schema';
import { MoocUpsertWithoutPinnedByInputObjectSchema } from './MoocUpsertWithoutPinnedByInput.schema';
import { MoocWhereUniqueInputObjectSchema } from './MoocWhereUniqueInput.schema';
import { MoocUpdateWithoutPinnedByInputObjectSchema } from './MoocUpdateWithoutPinnedByInput.schema';
import { MoocUncheckedUpdateWithoutPinnedByInputObjectSchema } from './MoocUncheckedUpdateWithoutPinnedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocUpdateOneRequiredWithoutPinnedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocCreateWithoutPinnedByInputObjectSchema),
          z.lazy(() => MoocUncheckedCreateWithoutPinnedByInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MoocCreateOrConnectWithoutPinnedByInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MoocUpsertWithoutPinnedByInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MoocWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MoocUpdateWithoutPinnedByInputObjectSchema),
          z.lazy(() => MoocUncheckedUpdateWithoutPinnedByInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MoocUpdateOneRequiredWithoutPinnedByNestedInputObjectSchema =
  Schema;
