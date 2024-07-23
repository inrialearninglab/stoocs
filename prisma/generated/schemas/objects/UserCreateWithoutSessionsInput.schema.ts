import { z } from 'zod';
import { PinnedMoocCreateNestedManyWithoutUserInputObjectSchema } from './PinnedMoocCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z
  .object({
    id: z.string(),
    email: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string(),
    pinnedMoocs: z
      .lazy(() => PinnedMoocCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutSessionsInputObjectSchema = Schema;
