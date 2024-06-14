import { z } from 'zod';
import { GradeReportQuestionWhereInputObjectSchema } from './objects/GradeReportQuestionWhereInput.schema';

export const GradeReportQuestionDeleteManySchema = z.object({
  where: GradeReportQuestionWhereInputObjectSchema.optional(),
});
