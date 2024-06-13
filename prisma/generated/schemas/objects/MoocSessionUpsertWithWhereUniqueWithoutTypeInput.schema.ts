import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutTypeInputObjectSchema } from './MoocSessionUpdateWithoutTypeInput.schema';
import { MoocSessionUncheckedUpdateWithoutTypeInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutTypeInput.schema';
import { MoocSessionCreateWithoutTypeInputObjectSchema } from './MoocSessionCreateWithoutTypeInput.schema';
import { MoocSessionUncheckedCreateWithoutTypeInputObjectSchema } from './MoocSessionUncheckedCreateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpsertWithWhereUniqueWithoutTypeInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MoocSessionUpdateWithoutTypeInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedUpdateWithoutTypeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutTypeInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedCreateWithoutTypeInputObjectSchema),
      ]),
    })
    .strict();

export const MoocSessionUpsertWithWhereUniqueWithoutTypeInputObjectSchema =
  Schema;
