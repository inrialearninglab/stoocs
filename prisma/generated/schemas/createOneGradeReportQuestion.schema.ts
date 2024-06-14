import { z } from 'zod';
import { GradeReportQuestionCreateInputObjectSchema } from './objects/GradeReportQuestionCreateInput.schema';
import { GradeReportQuestionUncheckedCreateInputObjectSchema } from './objects/GradeReportQuestionUncheckedCreateInput.schema';

export const GradeReportQuestionCreateOneSchema = z.object({
  data: z.union([
    GradeReportQuestionCreateInputObjectSchema,
    GradeReportQuestionUncheckedCreateInputObjectSchema,
  ]),
});
