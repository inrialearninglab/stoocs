import { z } from 'zod';
import { GradeReportQuestionScalarWhereInputObjectSchema } from './GradeReportQuestionScalarWhereInput.schema';
import { GradeReportQuestionUpdateManyMutationInputObjectSchema } from './GradeReportQuestionUpdateManyMutationInput.schema';
import { GradeReportQuestionUncheckedUpdateManyWithoutGradeReportQuestionsInputObjectSchema } from './GradeReportQuestionUncheckedUpdateManyWithoutGradeReportQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUpdateManyWithWhereWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportQuestionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => GradeReportQuestionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            GradeReportQuestionUncheckedUpdateManyWithoutGradeReportQuestionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportQuestionUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema =
  Schema;
