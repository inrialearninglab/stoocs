import { z } from 'zod';
import { GradeReportProblemLineCreateInputObjectSchema } from './objects/GradeReportProblemLineCreateInput.schema';
import { GradeReportProblemLineUncheckedCreateInputObjectSchema } from './objects/GradeReportProblemLineUncheckedCreateInput.schema';

export const GradeReportProblemLineCreateOneSchema = z.object({
  data: z.union([
    GradeReportProblemLineCreateInputObjectSchema,
    GradeReportProblemLineUncheckedCreateInputObjectSchema,
  ]),
});
