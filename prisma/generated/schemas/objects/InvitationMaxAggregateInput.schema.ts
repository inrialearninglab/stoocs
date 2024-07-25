import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvitationMaxAggregateInputType> = z
  .object({
    tokenHash: z.literal(true).optional(),
    email: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
  })
  .strict();

export const InvitationMaxAggregateInputObjectSchema = Schema;
