import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutTeamMembersInputObjectSchema } from './MoocSessionUpdateWithoutTeamMembersInput.schema';
import { MoocSessionUncheckedUpdateWithoutTeamMembersInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutTeamMembersInput.schema';
import { MoocSessionCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionCreateWithoutTeamMembersInput.schema';
import { MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTeamMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpsertWithWhereUniqueWithoutTeamMembersInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MoocSessionUpdateWithoutTeamMembersInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedUpdateWithoutTeamMembersInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutTeamMembersInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionUpsertWithWhereUniqueWithoutTeamMembersInputObjectSchema =
  Schema;
