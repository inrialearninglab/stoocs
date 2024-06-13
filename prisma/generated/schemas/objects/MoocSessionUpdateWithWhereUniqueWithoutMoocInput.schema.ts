import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutMoocInputObjectSchema } from './MoocSessionUpdateWithoutMoocInput.schema';
import { MoocSessionUncheckedUpdateWithoutMoocInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateWithWhereUniqueWithoutMoocInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MoocSessionUpdateWithoutMoocInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedUpdateWithoutMoocInputObjectSchema),
      ]),
    })
    .strict();

export const MoocSessionUpdateWithWhereUniqueWithoutMoocInputObjectSchema =
  Schema;
