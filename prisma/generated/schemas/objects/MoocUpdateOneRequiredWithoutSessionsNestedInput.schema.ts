import { z } from 'zod';
import { MoocCreateWithoutSessionsInputObjectSchema } from './MoocCreateWithoutSessionsInput.schema';
import { MoocUncheckedCreateWithoutSessionsInputObjectSchema } from './MoocUncheckedCreateWithoutSessionsInput.schema';
import { MoocCreateOrConnectWithoutSessionsInputObjectSchema } from './MoocCreateOrConnectWithoutSessionsInput.schema';
import { MoocUpsertWithoutSessionsInputObjectSchema } from './MoocUpsertWithoutSessionsInput.schema';
import { MoocWhereUniqueInputObjectSchema } from './MoocWhereUniqueInput.schema';
import { MoocUpdateWithoutSessionsInputObjectSchema } from './MoocUpdateWithoutSessionsInput.schema';
import { MoocUncheckedUpdateWithoutSessionsInputObjectSchema } from './MoocUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocUpdateOneRequiredWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocCreateWithoutSessionsInputObjectSchema),
          z.lazy(() => MoocUncheckedCreateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MoocCreateOrConnectWithoutSessionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => MoocUpsertWithoutSessionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MoocWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MoocUpdateWithoutSessionsInputObjectSchema),
          z.lazy(() => MoocUncheckedUpdateWithoutSessionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MoocUpdateOneRequiredWithoutSessionsNestedInputObjectSchema =
  Schema;
