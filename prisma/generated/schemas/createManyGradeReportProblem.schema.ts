import { z } from 'zod';
import { GradeReportProblemCreateManyInputObjectSchema } from './objects/GradeReportProblemCreateManyInput.schema';

export const GradeReportProblemCreateManySchema = z.object({
  data: z.union([
    GradeReportProblemCreateManyInputObjectSchema,
    z.array(GradeReportProblemCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
