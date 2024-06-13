import { z } from 'zod';
import { MoocSessionCreateNestedManyWithoutMoocInputObjectSchema } from './MoocSessionCreateNestedManyWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocCreateInput> = z
  .object({
    id: z.string().optional(),
    organization: z.string(),
    title: z.string(),
    description: z.string().optional().nullable(),
    theme: z.string().optional().nullable(),
    target: z.string().optional().nullable(),
    sessions: z
      .lazy(() => MoocSessionCreateNestedManyWithoutMoocInputObjectSchema)
      .optional(),
  })
  .strict();

export const MoocCreateInputObjectSchema = Schema;
