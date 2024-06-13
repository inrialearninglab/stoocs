import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionCreateWithoutMoocInputObjectSchema } from './MoocSessionCreateWithoutMoocInput.schema';
import { MoocSessionUncheckedCreateWithoutMoocInputObjectSchema } from './MoocSessionUncheckedCreateWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateOrConnectWithoutMoocInput> = z
  .object({
    where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MoocSessionCreateWithoutMoocInputObjectSchema),
      z.lazy(() => MoocSessionUncheckedCreateWithoutMoocInputObjectSchema),
    ]),
  })
  .strict();

export const MoocSessionCreateOrConnectWithoutMoocInputObjectSchema = Schema;
