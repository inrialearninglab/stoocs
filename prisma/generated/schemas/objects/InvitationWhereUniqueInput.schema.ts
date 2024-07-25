import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InvitationWhereUniqueInput> = z
  .object({
    tokenHash: z.string().optional(),
  })
  .strict();

export const InvitationWhereUniqueInputObjectSchema = Schema;
