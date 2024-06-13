import { z } from 'zod';
import { MoocSessionCreateNestedManyWithoutTeamMembersInputObjectSchema } from './MoocSessionCreateNestedManyWithoutTeamMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberCreateInput> = z
  .object({
    id: z.string().optional(),
    firstname: z.string(),
    lastname: z.string(),
    sessions: z
      .lazy(
        () => MoocSessionCreateNestedManyWithoutTeamMembersInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TeamMemberCreateInputObjectSchema = Schema;
