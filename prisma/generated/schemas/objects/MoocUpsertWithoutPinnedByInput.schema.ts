import { z } from 'zod';
import { MoocUpdateWithoutPinnedByInputObjectSchema } from './MoocUpdateWithoutPinnedByInput.schema';
import { MoocUncheckedUpdateWithoutPinnedByInputObjectSchema } from './MoocUncheckedUpdateWithoutPinnedByInput.schema';
import { MoocCreateWithoutPinnedByInputObjectSchema } from './MoocCreateWithoutPinnedByInput.schema';
import { MoocUncheckedCreateWithoutPinnedByInputObjectSchema } from './MoocUncheckedCreateWithoutPinnedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocUpsertWithoutPinnedByInput> = z
  .object({
    update: z.union([
      z.lazy(() => MoocUpdateWithoutPinnedByInputObjectSchema),
      z.lazy(() => MoocUncheckedUpdateWithoutPinnedByInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MoocCreateWithoutPinnedByInputObjectSchema),
      z.lazy(() => MoocUncheckedCreateWithoutPinnedByInputObjectSchema),
    ]),
  })
  .strict();

export const MoocUpsertWithoutPinnedByInputObjectSchema = Schema;
