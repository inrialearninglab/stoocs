import { z } from 'zod';
import { PinnedMoocCreateNestedManyWithoutMoocInputObjectSchema } from './PinnedMoocCreateNestedManyWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    organization: z.string(),
    title: z.string(),
    courseNumber: z.string(),
    description: z.string().optional().nullable(),
    theme: z.string().optional().nullable(),
    target: z.string().optional().nullable(),
    pinnedBy: z
      .lazy(() => PinnedMoocCreateNestedManyWithoutMoocInputObjectSchema)
      .optional(),
  })
  .strict();

export const MoocCreateWithoutSessionsInputObjectSchema = Schema;
