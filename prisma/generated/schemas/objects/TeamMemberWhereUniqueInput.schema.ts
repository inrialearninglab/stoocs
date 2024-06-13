import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const TeamMemberWhereUniqueInputObjectSchema = Schema;
