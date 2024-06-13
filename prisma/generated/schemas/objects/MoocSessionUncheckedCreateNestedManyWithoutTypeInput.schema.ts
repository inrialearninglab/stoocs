import { z } from 'zod';
import { MoocSessionCreateWithoutTypeInputObjectSchema } from './MoocSessionCreateWithoutTypeInput.schema';
import { MoocSessionUncheckedCreateWithoutTypeInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTypeInput.schema';
import { MoocSessionCreateOrConnectWithoutTypeInputObjectSchema } from './MoocSessionCreateOrConnectWithoutTypeInput.schema';
import { MoocSessionCreateManyTypeInputEnvelopeObjectSchema } from './MoocSessionCreateManyTypeInputEnvelope.schema';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUncheckedCreateNestedManyWithoutTypeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MoocSessionCreateWithoutTypeInputObjectSchema),
          z.lazy(() => MoocSessionCreateWithoutTypeInputObjectSchema).array(),
          z.lazy(() => MoocSessionUncheckedCreateWithoutTypeInputObjectSchema),
          z
            .lazy(() => MoocSessionUncheckedCreateWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MoocSessionCreateOrConnectWithoutTypeInputObjectSchema),
          z
            .lazy(() => MoocSessionCreateOrConnectWithoutTypeInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MoocSessionCreateManyTypeInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
          z.lazy(() => MoocSessionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MoocSessionUncheckedCreateNestedManyWithoutTypeInputObjectSchema =
  Schema;
