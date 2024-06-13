import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutTypeInputObjectSchema } from './MoocSessionUpdateWithoutTypeInput.schema';
import { MoocSessionUncheckedUpdateWithoutTypeInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateWithWhereUniqueWithoutTypeInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MoocSessionUpdateWithoutTypeInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedUpdateWithoutTypeInputObjectSchema),
      ]),
    })
    .strict();

export const MoocSessionUpdateWithWhereUniqueWithoutTypeInputObjectSchema =
  Schema;
