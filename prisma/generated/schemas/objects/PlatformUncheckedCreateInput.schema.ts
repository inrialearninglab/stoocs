import { z } from 'zod';
import { MoocSessionUncheckedCreateNestedManyWithoutPlatformInputObjectSchema } from './MoocSessionUncheckedCreateNestedManyWithoutPlatformInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PlatformUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    MoocSession: z
      .lazy(
        () =>
          MoocSessionUncheckedCreateNestedManyWithoutPlatformInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PlatformUncheckedCreateInputObjectSchema = Schema;
