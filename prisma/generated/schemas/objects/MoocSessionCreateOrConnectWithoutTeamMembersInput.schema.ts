import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionCreateWithoutTeamMembersInput.schema';
import { MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTeamMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateOrConnectWithoutTeamMembersInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutTeamMembersInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionCreateOrConnectWithoutTeamMembersInputObjectSchema =
  Schema;
