import { z } from 'zod';
import { MoocSessionCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionCreateWithoutTeamMembersInput.schema';
import { MoocSessionUncheckedCreateWithoutTeamMembersInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTeamMembersInput.schema';
import { MoocSessionCreateOrConnectWithoutTeamMembersInputObjectSchema } from './MoocSessionCreateOrConnectWithoutTeamMembersInput.schema';
import { MoocSessionUpsertWithWhereUniqueWithoutTeamMembersInputObjectSchema } from './MoocSessionUpsertWithWhereUniqueWithoutTeamMembersInput.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithWhereUniqueWithoutTeamMembersInputObjectSchema } from './MoocSessionUpdateWithWhereUniqueWithoutTeamMembersInput.schema';
import { MoocSessionUpdateManyWithWhereWithoutTeamMembersInputObjectSchema } from './MoocSessionUpdateManyWithWhereWithoutTeamMembersInput.schema';
import { MoocSessionScalarWhereInputObjectSchema } from './MoocSessionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUncheckedUpdateManyWithoutTeamMembersNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MoocSessionUpsertWithWhereUniqueWithoutTeamMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpsertWithWhereUniqueWithoutTeamMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MoocSessionUpdateWithWhereUniqueWithoutTeamMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateWithWhereUniqueWithoutTeamMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MoocSessionUpdateManyWithWhereWithoutTeamMembersInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MoocSessionUpdateManyWithWhereWithoutTeamMembersInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MoocSessionScalarWhereInputObjectSchema),
          z.lazy(() => MoocSessionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionUncheckedUpdateManyWithoutTeamMembersNestedInputObjectSchema =
  Schema;
