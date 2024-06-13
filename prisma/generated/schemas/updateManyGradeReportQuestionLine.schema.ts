import { z } from 'zod';
import { GradeReportQuestionLineUpdateManyMutationInputObjectSchema } from './objects/GradeReportQuestionLineUpdateManyMutationInput.schema';
import { GradeReportQuestionLineWhereInputObjectSchema } from './objects/GradeReportQuestionLineWhereInput.schema';

export const GradeReportQuestionLineUpdateManySchema = z.object({
  data: GradeReportQuestionLineUpdateManyMutationInputObjectSchema,
  where: GradeReportQuestionLineWhereInputObjectSchema.optional(),
});
