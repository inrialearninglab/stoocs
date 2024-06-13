import { z } from 'zod';
import { MoocWhereUniqueInputObjectSchema } from './MoocWhereUniqueInput.schema';
import { MoocCreateWithoutSessionsInputObjectSchema } from './MoocCreateWithoutSessionsInput.schema';
import { MoocUncheckedCreateWithoutSessionsInputObjectSchema } from './MoocUncheckedCreateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocCreateOrConnectWithoutSessionsInput> = z
  .object({
    where: z.lazy(() => MoocWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MoocCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => MoocUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict();

export const MoocCreateOrConnectWithoutSessionsInputObjectSchema = Schema;
