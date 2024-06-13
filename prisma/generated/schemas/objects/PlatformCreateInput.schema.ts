import { z } from 'zod';
import { MoocSessionCreateNestedManyWithoutPlatformInputObjectSchema } from './MoocSessionCreateNestedManyWithoutPlatformInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    MoocSession: z
      .lazy(() => MoocSessionCreateNestedManyWithoutPlatformInputObjectSchema)
      .optional(),
  })
  .strict();

export const PlatformCreateInputObjectSchema = Schema;
