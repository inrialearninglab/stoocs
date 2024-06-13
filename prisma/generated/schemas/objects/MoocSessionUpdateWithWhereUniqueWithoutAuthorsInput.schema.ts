import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutAuthorsInputObjectSchema } from './MoocSessionUpdateWithoutAuthorsInput.schema';
import { MoocSessionUncheckedUpdateWithoutAuthorsInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutAuthorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpdateWithWhereUniqueWithoutAuthorsInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MoocSessionUpdateWithoutAuthorsInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedUpdateWithoutAuthorsInputObjectSchema),
      ]),
    })
    .strict();

export const MoocSessionUpdateWithWhereUniqueWithoutAuthorsInputObjectSchema =
  Schema;
