import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionTypeCreateWithoutMoocSessionInput> = z
  .object({
    id: z.string().optional(),
    type: z.string(),
  })
  .strict();

export const SessionTypeCreateWithoutMoocSessionInputObjectSchema = Schema;
