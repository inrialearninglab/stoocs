import { z } from 'zod';
import { UserCreateNestedOneWithoutPinnedMoocsInputObjectSchema } from './UserCreateNestedOneWithoutPinnedMoocsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PinnedMoocCreateWithoutMoocInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutPinnedMoocsInputObjectSchema),
  })
  .strict();

export const PinnedMoocCreateWithoutMoocInputObjectSchema = Schema;
