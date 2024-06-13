import { z } from 'zod';
import { MoocSessionCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionCreateWithoutTeamMembersInput.schema';
import { MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTeamMembersInput.schema';
import { MoocSessionCreateOrConnectWithoutTeamMembersInputObjectSchema } from './MoocSessionCreateOrConnectWithoutTeamMembersInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateNestedManyWithoutTeamMembersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutTeamMembersInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateWithoutTeamMembersInputObjectSchema)
            .array(),
          z.lazy(
            () => MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MoocSessionCreateOrConnectWithoutTeamMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionCreateOrConnectWithoutTeamMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionCreateNestedManyWithoutTeamMembersInputObjectSchema =
  Schema;
