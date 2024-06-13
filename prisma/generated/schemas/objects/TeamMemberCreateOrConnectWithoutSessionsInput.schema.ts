import { z } from 'zod';
import { TeamMemberWhereUniqueInputObjectSchema } from './TeamMemberWhereUniqueInput.schema';
import { TeamMemberCreateWithoutSessionsInputObjectSchema } from './TeamMemberCreateWithoutSessionsInput.schema';
import { TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema } from './TeamMemberUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberCreateOrConnectWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TeamMemberCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema),
      ]),
    })
    .strict();

export const TeamMemberCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
