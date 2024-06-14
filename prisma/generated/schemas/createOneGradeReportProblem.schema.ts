import { z } from 'zod';
import { GradeReportProblemCreateInputObjectSchema } from './objects/GradeReportProblemCreateInput.schema';
import { GradeReportProblemUncheckedCreateInputObjectSchema } from './objects/GradeReportProblemUncheckedCreateInput.schema';

export const GradeReportProblemCreateOneSchema = z.object({
  data: z.union([
    GradeReportProblemCreateInputObjectSchema,
    GradeReportProblemUncheckedCreateInputObjectSchema,
  ]),
});
