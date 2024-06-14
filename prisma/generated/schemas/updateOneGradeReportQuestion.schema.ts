import { z } from 'zod';
import { GradeReportQuestionUpdateInputObjectSchema } from './objects/GradeReportQuestionUpdateInput.schema';
import { GradeReportQuestionUncheckedUpdateInputObjectSchema } from './objects/GradeReportQuestionUncheckedUpdateInput.schema';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionWhereUniqueInput.schema';

export const GradeReportQuestionUpdateOneSchema = z.object({
  data: z.union([
    GradeReportQuestionUpdateInputObjectSchema,
    GradeReportQuestionUncheckedUpdateInputObjectSchema,
  ]),
  where: GradeReportQuestionWhereUniqueInputObjectSchema,
});
