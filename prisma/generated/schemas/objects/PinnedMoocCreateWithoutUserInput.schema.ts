import { z } from 'zod';
import { MoocCreateNestedOneWithoutPinnedByInputObjectSchema } from './MoocCreateNestedOneWithoutPinnedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    mooc: z.lazy(() => MoocCreateNestedOneWithoutPinnedByInputObjectSchema),
  })
  .strict();

export const PinnedMoocCreateWithoutUserInputObjectSchema = Schema;
