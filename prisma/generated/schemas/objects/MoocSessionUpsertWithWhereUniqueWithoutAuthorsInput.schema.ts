import { z } from 'zod';
import { MoocSessionWhereUniqueInputObjectSchema } from './MoocSessionWhereUniqueInput.schema';
import { MoocSessionUpdateWithoutAuthorsInputObjectSchema } from './MoocSessionUpdateWithoutAuthorsInput.schema';
import { MoocSessionUncheckedUpdateWithoutAuthorsInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutAuthorsInput.schema';
import { MoocSessionCreateWithoutAuthorsInputObjectSchema } from './MoocSessionCreateWithoutAuthorsInput.schema';
import { MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutAuthorsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpsertWithWhereUniqueWithoutAuthorsInput> =
  z
    .object({
      where: z.lazy(() => MoocSessionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MoocSessionUpdateWithoutAuthorsInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedUpdateWithoutAuthorsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => MoocSessionCreateWithoutAuthorsInputObjectSchema),
        z.lazy(() => MoocSessionUncheckedCreateWithoutAuthorsInputObjectSchema),
      ]),
    })
    .strict();

export const MoocSessionUpsertWithWhereUniqueWithoutAuthorsInputObjectSchema =
  Schema;
