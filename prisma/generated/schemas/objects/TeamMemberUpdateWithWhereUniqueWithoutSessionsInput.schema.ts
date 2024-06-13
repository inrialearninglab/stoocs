import { z } from 'zod';
import { TeamMemberWhereUniqueInputObjectSchema } from './TeamMemberWhereUniqueInput.schema';
import { TeamMemberUpdateWithoutSessionsInputObjectSchema } from './TeamMemberUpdateWithoutSessionsInput.schema';
import { TeamMemberUncheckedUpdateWithoutSessionsInputObjectSchema } from './TeamMemberUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberUpdateWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TeamMemberUpdateWithoutSessionsInputObjectSchema),
        z.lazy(() => TeamMemberUncheckedUpdateWithoutSessionsInputObjectSchema),
      ]),
    })
    .strict();

export const TeamMemberUpdateWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
