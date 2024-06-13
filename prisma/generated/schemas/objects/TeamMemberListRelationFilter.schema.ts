import { z } from 'zod';
import { TeamMemberWhereInputObjectSchema } from './TeamMemberWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberListRelationFilter> = z
  .object({
    every: z.lazy(() => TeamMemberWhereInputObjectSchema).optional(),
    some: z.lazy(() => TeamMemberWhereInputObjectSchema).optional(),
    none: z.lazy(() => TeamMemberWhereInputObjectSchema).optional(),
  })
  .strict();

export const TeamMemberListRelationFilterObjectSchema = Schema;
