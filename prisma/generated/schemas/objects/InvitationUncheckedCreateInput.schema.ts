import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvitationUncheckedCreateInput> = z
  .object({
    tokenHash: z.string(),
    email: z.string(),
    expiresAt: z.coerce.date(),
  })
  .strict();

export const InvitationUncheckedCreateInputObjectSchema = Schema;
