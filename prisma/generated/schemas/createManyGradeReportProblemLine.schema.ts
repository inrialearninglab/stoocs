import { z } from 'zod';
import { GradeReportProblemLineCreateManyInputObjectSchema } from './objects/GradeReportProblemLineCreateManyInput.schema';

export const GradeReportProblemLineCreateManySchema = z.object({
  data: z.union([
    GradeReportProblemLineCreateManyInputObjectSchema,
    z.array(GradeReportProblemLineCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
