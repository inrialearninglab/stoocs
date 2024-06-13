import { z } from 'zod';
import { GradeReportQuestionLineCreateManyInputObjectSchema } from './objects/GradeReportQuestionLineCreateManyInput.schema';

export const GradeReportQuestionLineCreateManySchema = z.object({
  data: z.union([
    GradeReportQuestionLineCreateManyInputObjectSchema,
    z.array(GradeReportQuestionLineCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
