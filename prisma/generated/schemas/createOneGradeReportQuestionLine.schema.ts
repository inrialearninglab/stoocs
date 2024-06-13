import { z } from 'zod';
import { GradeReportQuestionLineCreateInputObjectSchema } from './objects/GradeReportQuestionLineCreateInput.schema';
import { GradeReportQuestionLineUncheckedCreateInputObjectSchema } from './objects/GradeReportQuestionLineUncheckedCreateInput.schema';

export const GradeReportQuestionLineCreateOneSchema = z.object({
  data: z.union([
    GradeReportQuestionLineCreateInputObjectSchema,
    GradeReportQuestionLineUncheckedCreateInputObjectSchema,
  ]),
});
