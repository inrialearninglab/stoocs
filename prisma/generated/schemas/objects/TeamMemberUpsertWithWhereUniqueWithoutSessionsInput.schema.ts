import { z } from 'zod';
import { TeamMemberWhereUniqueInputObjectSchema } from './TeamMemberWhereUniqueInput.schema';
import { TeamMemberUpdateWithoutSessionsInputObjectSchema } from './TeamMemberUpdateWithoutSessionsInput.schema';
import { TeamMemberUncheckedUpdateWithoutSessionsInputObjectSchema } from './TeamMemberUncheckedUpdateWithoutSessionsInput.schema';
import { TeamMemberCreateWithoutSessionsInputObjectSchema } from './TeamMemberCreateWithoutSessionsInput.schema';
import { TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema } from './TeamMemberUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberUpsertWithWhereUniqueWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TeamMemberUpdateWithoutSessionsInputObjectSchema),
        z.lazy(() => TeamMemberUncheckedUpdateWithoutSessionsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TeamMemberCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema),
      ]),
    })
    .strict();

export const TeamMemberUpsertWithWhereUniqueWithoutSessionsInputObjectSchema =
  Schema;
