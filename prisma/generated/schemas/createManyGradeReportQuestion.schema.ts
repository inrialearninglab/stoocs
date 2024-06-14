import { z } from 'zod';
import { GradeReportQuestionCreateManyInputObjectSchema } from './objects/GradeReportQuestionCreateManyInput.schema';

export const GradeReportQuestionCreateManySchema = z.object({
  data: z.union([
    GradeReportQuestionCreateManyInputObjectSchema,
    z.array(GradeReportQuestionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
