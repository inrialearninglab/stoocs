import { z } from 'zod';
import { TeamMemberScalarWhereInputObjectSchema } from './TeamMemberScalarWhereInput.schema';
import { TeamMemberUpdateManyMutationInputObjectSchema } from './TeamMemberUpdateManyMutationInput.schema';
import { TeamMemberUncheckedUpdateManyWithoutTeamMembersInputObjectSchema } from './TeamMemberUncheckedUpdateManyWithoutTeamMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberUpdateManyWithWhereWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => TeamMemberScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TeamMemberUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            TeamMemberUncheckedUpdateManyWithoutTeamMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TeamMemberUpdateManyWithWhereWithoutSessionsInputObjectSchema =
  Schema;
