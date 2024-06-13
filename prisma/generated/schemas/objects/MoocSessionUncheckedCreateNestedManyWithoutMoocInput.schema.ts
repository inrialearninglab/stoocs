import { z } from 'zod';
import { MoocSessionCreateWithoutMoocInputObjectSchema } from './MoocSessionCreateWithoutMoocInput.schema';
import { MoocSessionUncheckedCreateWithoutMoocInputObjectSchema } from './MoocSessionUncheckedCreateWithoutMoocInput.schema';
import { MoocSessionCreateOrConnectWithoutMoocInputObjectSchema } from './MoocSessionCreateOrConnectWithoutMoocInput.schema';
import { MoocSessionCreateManyMoocInputEnvelopeObjectSchema } from './MoocSessionCreateManyMoocInputEnvelope.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUncheckedCreateNestedManyWithoutMoocInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutMoocInputObjectSchema),
          z.lazy(() => MoocSessionCreateWithoutMoocInputObjectSchema).array(),
          z.lazy(() => MoocSessionUncheckedCreateWithoutMoocInputObjectSchema),
          z
            .lazy(() => MoocSessionUncheckedCreateWithoutMoocInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MoocSessionCreateOrConnectWithoutMoocInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateOrConnectWithoutMoocInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MoocSessionCreateManyMoocInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionUncheckedCreateNestedManyWithoutMoocInputObjectSchema =
  Schema;
