import { z } from 'zod';
import { TeamMemberCreateWithoutSessionsInputObjectSchema } from './TeamMemberCreateWithoutSessionsInput.schema';
import { TeamMemberUncheckedCreateWithoutSessionsInputObjectSchema } from './TeamMemberUncheckedCreateWithoutSessionsInput.schema';
import { TeamMemberCreateOrConnectWithoutSessionsInputObjectSchema } from './TeamMemberCreateOrConnectWithoutSessionsInput.schema';
import { TeamMemberWhereUniqueInputObjectSchema } from './TeamMemberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TeamMemberCreateNestedManyWithoutSessionsInput> =
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
      connect: z
        .union([
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema),
          z.lazy(() => TeamMemberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TeamMemberCreateNestedManyWithoutSessionsInputObjectSchema =
  Schema;
