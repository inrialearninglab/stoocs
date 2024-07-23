import { z } from 'zod';
import { UserCreateNestedOneWithoutPinnedMoocsInputObjectSchema } from './UserCreateNestedOneWithoutPinnedMoocsInput.schema';
import { MoocCreateNestedOneWithoutPinnedByInputObjectSchema } from './MoocCreateNestedOneWithoutPinnedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutPinnedMoocsInputObjectSchema),
    mooc: z.lazy(() => MoocCreateNestedOneWithoutPinnedByInputObjectSchema),
  })
  .strict();

export const PinnedMoocCreateInputObjectSchema = Schema;
