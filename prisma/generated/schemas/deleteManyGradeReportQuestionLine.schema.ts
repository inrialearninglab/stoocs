import { z } from 'zod';
import { GradeReportQuestionLineWhereInputObjectSchema } from './objects/GradeReportQuestionLineWhereInput.schema';

export const GradeReportQuestionLineDeleteManySchema = z.object({
  where: GradeReportQuestionLineWhereInputObjectSchema.optional(),
});
