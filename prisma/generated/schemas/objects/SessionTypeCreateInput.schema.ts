import { z } from 'zod';
import { MoocSessionCreateNestedManyWithoutTypeInputObjectSchema } from './MoocSessionCreateNestedManyWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
    moocSession: z
      .lazy(() => MoocSessionCreateNestedManyWithoutTypeInputObjectSchema)
      .optional(),
  })
  .strict();

export const SessionTypeCreateInputObjectSchema = Schema;
