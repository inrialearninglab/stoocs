import { z } from 'zod';
import { MoocWhereUniqueInputObjectSchema } from './MoocWhereUniqueInput.schema';
import { MoocCreateWithoutPinnedByInputObjectSchema } from './MoocCreateWithoutPinnedByInput.schema';
import { MoocUncheckedCreateWithoutPinnedByInputObjectSchema } from './MoocUncheckedCreateWithoutPinnedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocCreateOrConnectWithoutPinnedByInput> = z
  .object({
    where: z.lazy(() => MoocWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MoocCreateWithoutPinnedByInputObjectSchema),
      z.lazy(() => MoocUncheckedCreateWithoutPinnedByInputObjectSchema),
    ]),
  })
  .strict();

export const MoocCreateOrConnectWithoutPinnedByInputObjectSchema = Schema;
