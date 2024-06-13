import { z } from 'zod';
import { MoocSessionCreateWithoutPlatformInputObjectSchema } from './MoocSessionCreateWithoutPlatformInput.schema';
import { MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema } from './MoocSessionUncheckedCreateWithoutPlatformInput.schema';
import { MoocSessionCreateOrConnectWithoutPlatformInputObjectSchema } from './MoocSessionCreateOrConnectWithoutPlatformInput.schema';
import { MoocSessionCreateManyPlatformInputEnvelopeObjectSchema } from './MoocSessionCreateManyPlatformInputEnvelope.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUncheckedCreateNestedManyWithoutPlatformInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutPlatformInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateWithoutPlatformInputObjectSchema)
            .array(),
          z.lazy(
            () => MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionUncheckedCreateWithoutPlatformInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MoocSessionCreateOrConnectWithoutPlatformInputObjectSchema,
          ),
          z
            .lazy(
              () => MoocSessionCreateOrConnectWithoutPlatformInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MoocSessionCreateManyPlatformInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionUncheckedCreateNestedManyWithoutPlatformInputObjectSchema =
  Schema;
