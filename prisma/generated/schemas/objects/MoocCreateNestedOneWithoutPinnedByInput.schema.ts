import { z } from 'zod';
import { MoocCreateWithoutPinnedByInputObjectSchema } from './MoocCreateWithoutPinnedByInput.schema';
import { MoocUncheckedCreateWithoutPinnedByInputObjectSchema } from './MoocUncheckedCreateWithoutPinnedByInput.schema';
import { MoocCreateOrConnectWithoutPinnedByInputObjectSchema } from './MoocCreateOrConnectWithoutPinnedByInput.schema';
import { MoocWhereUniqueInputObjectSchema } from './MoocWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocCreateNestedOneWithoutPinnedByInput> = z
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
    connect: z.lazy(() => MoocWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MoocCreateNestedOneWithoutPinnedByInputObjectSchema = Schema;
