import { z } from 'zod';
import { MoocCreateWithoutSessionsInputObjectSchema } from './MoocCreateWithoutSessionsInput.schema';
import { MoocUncheckedCreateWithoutSessionsInputObjectSchema } from './MoocUncheckedCreateWithoutSessionsInput.schema';
import { MoocCreateOrConnectWithoutSessionsInputObjectSchema } from './MoocCreateOrConnectWithoutSessionsInput.schema';
import { MoocWhereUniqueInputObjectSchema } from './MoocWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocCreateNestedOneWithoutSessionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MoocCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => MoocUncheckedCreateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MoocCreateOrConnectWithoutSessionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MoocWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MoocCreateNestedOneWithoutSessionsInputObjectSchema = Schema;
