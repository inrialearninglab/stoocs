import { z } from 'zod';
import { MoocSessionUncheckedCreateNestedManyWithoutTypeInputObjectSchema } from './MoocSessionUncheckedCreateNestedManyWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    MoocSession: z
      .lazy(
        () => MoocSessionUncheckedCreateNestedManyWithoutTypeInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SessionTypeUncheckedCreateInputObjectSchema = Schema;
