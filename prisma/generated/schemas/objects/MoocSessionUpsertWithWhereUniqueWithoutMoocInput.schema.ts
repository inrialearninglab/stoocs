import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutMoocInputObjectSchema } from './MoocSessionUpdateWithoutMoocInput.schema';
import { MoocSessionUncheckedUpdateWithoutMoocInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutMoocInput.schema';
import { MoocSessionCreateWithoutMoocInputObjectSchema } from './MoocSessionCreateWithoutMoocInput.schema';
import { MoocSessionUncheckedCreateWithoutMoocInputObjectSchema } from './MoocSessionUncheckedCreateWithoutMoocInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpsertWithWhereUniqueWithoutMoocInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MoocSessionUpdateWithoutMoocInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedUpdateWithoutMoocInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutMoocInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedCreateWithoutMoocInputObjectSchema),
      ]),
    })
    .strict();

export const MoocSessionUpsertWithWhereUniqueWithoutMoocInputObjectSchema =
  Schema;
