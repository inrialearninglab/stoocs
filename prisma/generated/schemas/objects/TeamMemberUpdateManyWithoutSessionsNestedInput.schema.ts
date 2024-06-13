import { z } from 'zod';
import { TeamMemberCreateWithoutSessionsInputObjectSchema } from './TeamMemberCreateWithoutSessionsInput.schema';
import { TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema } from './TeamMemberUncheckedCreateWithoutSessionsInput.schema';
import { TeamMemberCreateOrConnectWithoutSessionsInputObjectSchema } from './TeamMemberCreateOrConnectWithoutSessionsInput.schema';
import { TeamMemberUpsertWithWhereUniqueWithoutSessionsInputObjectSchema } from './TeamMemberUpsertWithWhereUniqueWithoutSessionsInput.schema';
import { TeamMemberWhereUniqueInputObjectSchema } from './TeamMemberWhereUniqueInput.schema';
import { TeamMemberUpdateWithWhereUniqueWithoutSessionsInputObjectSchema } from './TeamMemberUpdateWithWhereUniqueWithoutSessionsInput.schema';
import { TeamMemberUpdateManyWithWhereWithoutSessionsInputObjectSchema } from './TeamMemberUpdateManyWithWhereWithoutSessionsInput.schema';
import { TeamMemberScalarWhereInputObjectSchema } from './TeamMemberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberUpdateManyWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TeamMemberCreateWithoutSessionsInputObjectSchema),
          z
            .lazy(() => TeamMemberCreateWithoutSessionsInputObjectSchema)
            .array(),
          z.lazy(
            () => TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () => TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => TeamMemberCreateOrConnectWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () => TeamMemberCreateOrConnectWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              TeamMemberUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TeamMemberUpsertWithWhereUniqueWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              TeamMemberUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TeamMemberUpdateWithWhereUniqueWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => TeamMemberUpdateManyWithWhereWithoutSessionsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                TeamMemberUpdateManyWithWhereWithoutSessionsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TeamMemberScalarWhereInputObjectSchema),
          z.lazy(() => TeamMemberScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TeamMemberUpdateManyWithoutSessionsNestedInputObjectSchema =
  Schema;
