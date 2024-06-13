import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionCreateWithoutTypeInputObjectSchema } from './MoocSessionCreateWithoutTypeInput.schema';
import { MoocSessionUncheckedCreateWithoutTypeInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionCreateOrConnectWithoutTypeInput> = z
  .object({
    where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MoocSessionCreateWithoutTypeInputObjectSchema),
      z.lazy(() => MoocSessionUncheckedCreateWithoutTypeInputObjectSchema),
    ]),
  })
  .strict();

export const MoocSessionCreateOrConnectWithoutTypeInputObjectSchema = Schema;
