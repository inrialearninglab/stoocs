import { z } from 'zod';
import { GradeReportQuestionLineUpdateInputObjectSchema } from './objects/GradeReportQuestionLineUpdateInput.schema';
import { GradeReportQuestionLineUncheckedUpdateInputObjectSchema } from './objects/GradeReportQuestionLineUncheckedUpdateInput.schema';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionLineWhereUniqueInput.schema';

export const GradeReportQuestionLineUpdateOneSchema = z.object({
  data: z.union([
    GradeReportQuestionLineUpdateInputObjectSchema,
    GradeReportQuestionLineUncheckedUpdateInputObjectSchema,
  ]),
  where: GradeReportQuestionLineWhereUniqueInputObjectSchema,
});
