import { z } from 'zod';
import { MoocSessionUncheckedCreateNestedManyWithoutTeamMembersInputObjectSchema } from './MoocSessionUncheckedCreateNestedManyWithoutTeamMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    firstname: z.string(),
    lastname: z.string(),
    sessions: z
      .lazy(
        () =>
          MoocSessionUncheckedCreateNestedManyWithoutTeamMembersInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const TeamMemberUncheckedCreateInputObjectSchema = Schema;
