import { z } from 'zod';
import { PinnedMoocUncheckedCreateNestedManyWithoutMoocInputObjectSchema } from './PinnedMoocUncheckedCreateNestedManyWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocUncheckedCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    organization: z.string(),
    title: z.string(),
    courseNumber: z.string(),
    description: z.string().optional().nullable(),
    theme: z.string().optional().nullable(),
    target: z.string().optional().nullable(),
    pinnedBy: z
      .lazy(
        () => PinnedMoocUncheckedCreateNestedManyWithoutMoocInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MoocUncheckedCreateWithoutSessionsInputObjectSchema = Schema;
