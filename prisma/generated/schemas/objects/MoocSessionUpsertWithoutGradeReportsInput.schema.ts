import { z } from 'zod';
import { MoocSessionUpdateWithoutGradeReportsInputObjectSchema } from './MoocSessionUpdateWithoutGradeReportsInput.schema';
import { MoocSessionUncheckedUpdateWithoutGradeReportsInputObjectSchema } from './MoocSessionUncheckedUpdateWithoutGradeReportsInput.schema';
import { MoocSessionCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionCreateWithoutGradeReportsInput.schema';
import { MoocSessionUncheckedCreateWithoutGradeReportsInputObjectSchema } from './MoocSessionUncheckedCreateWithoutGradeReportsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MoocSessionUpsertWithoutGradeReportsInput> = z
  .object({
    update: z.union([
      z.lazy(() => MoocSessionUpdateWithoutGradeReportsInputObjectSchema),
      z.lazy(
        () => MoocSessionUncheckedUpdateWithoutGradeReportsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => MoocSessionCreateWithoutGradeReportsInputObjectSchema),
      z.lazy(
        () => MoocSessionUncheckedCreateWithoutGradeReportsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MoocSessionUpsertWithoutGradeReportsInputObjectSchema = Schema;
