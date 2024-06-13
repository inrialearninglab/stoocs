import { z } from 'zod';
import { GradeReportProblemLineScalarWhereInputObjectSchema } from './GradeReportProblemLineScalarWhereInput.schema';
import { GradeReportProblemLineUpdateManyMutationInputObjectSchema } from './GradeReportProblemLineUpdateManyMutationInput.schema';
import { GradeReportProblemLineUncheckedUpdateManyWithoutGradeReportProblemLinesInputObjectSchema } from './GradeReportProblemLineUncheckedUpdateManyWithoutGradeReportProblemLinesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineUpdateManyWithWhereWithoutGradeReportLineInput> =
  z
    .object({
      where: z.lazy(() => GradeReportProblemLineScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => GradeReportProblemLineUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            GradeReportProblemLineUncheckedUpdateManyWithoutGradeReportProblemLinesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const GradeReportProblemLineUpdateManyWithWhereWithoutGradeReportLineInputObjectSchema =
  Schema;
