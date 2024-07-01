import { z } from 'zod';
import { MoocSessionUncheckedCreateNestedManyWithoutMoocInputObjectSchema } from './MoocSessionUncheckedCreateNestedManyWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    organization: z.string(),
    title: z.string(),
    courseNumber: z.string(),
    description: z.string().optional().nullable(),
    theme: z.string().optional().nullable(),
    target: z.string().optional().nullable(),
    sessions: z
      .lazy(
        () => MoocSessionUncheckedCreateNestedManyWithoutMoocInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MoocUncheckedCreateInputObjectSchema = Schema;
