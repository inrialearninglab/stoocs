import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionCreateManyInput> = z
  .object({
    id: z.string(),
    userId: z.string(),
    expiresAt: z.coerce.date(),
  })
  .strict();

export const SessionCreateManyInputObjectSchema = Schema;
