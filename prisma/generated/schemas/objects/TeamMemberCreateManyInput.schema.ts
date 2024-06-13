import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberCreateManyInput> = z
  .object({
    id: z.string().optional(),
    firstname: z.string(),
    lastname: z.string(),
  })
  .strict();

export const TeamMemberCreateManyInputObjectSchema = Schema;
