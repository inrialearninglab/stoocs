import { z } from 'zod';
import { GradeReportProblemScalarWhereInputObjectSchema } from './GradeReportProblemScalarWhereInput.schema';
import { GradeReportProblemUpdateManyMutationInputObjectSchema } from './GradeReportProblemUpdateManyMutationInput.schema';
import { GradeReportProblemUncheckedUpdateManyWithoutGradeReportProblemsInputObjectSchema } from './GradeReportProblemUncheckedUpdateManyWithoutGradeReportProblemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemUpdateManyWithWhereWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => GradeReportProblemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            GradeReportProblemUncheckedUpdateManyWithoutGradeReportProblemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportProblemUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema =
  Schema;
