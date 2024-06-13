import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutTeamMembersInputObjectSchema } from './MoocSessionUpdateWithoutTeamMembersInput.schema';
import { MoocSessionUncheckedUpdateWithoutTeamMembersInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutTeamMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateWithWhereUniqueWithoutTeamMembersInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MoocSessionUpdateWithoutTeamMembersInputObjectSchema),
        z.lazy(
          () => MoocSessionUncheckedUpdateWithoutTeamMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MoocSessionUpdateWithWhereUniqueWithoutTeamMembersInputObjectSchema =
  Schema;
