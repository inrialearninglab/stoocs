import { z } from 'zod';
import { GradeReportQuestionLineScalarWhereInputObjectSchema } from './GradeReportQuestionLineScalarWhereInput.schema';
import { GradeReportQuestionLineUpdateManyMutationInputObjectSchema } from './GradeReportQuestionLineUpdateManyMutationInput.schema';
import { GradeReportQuestionLineUncheckedUpdateManyWithoutGradeReportQuestionLinesInputObjectSchema } from './GradeReportQuestionLineUncheckedUpdateManyWithoutGradeReportQuestionLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineUpdateManyWithWhereWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionLineScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(
          () => GradeReportQuestionLineUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            GradeReportQuestionLineUncheckedUpdateManyWithoutGradeReportQuestionLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportQuestionLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema =
  Schema;
