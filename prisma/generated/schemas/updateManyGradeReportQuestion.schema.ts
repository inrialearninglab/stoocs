import { z } from 'zod';
import { GradeReportQuestionUpdateManyMutationInputObjectSchema } from './objects/GradeReportQuestionUpdateManyMutationInput.schema';
import { GradeReportQuestionWhereInputObjectSchema } from './objects/GradeReportQuestionWhereInput.schema';

export const GradeReportQuestionUpdateManySchema = z.object({
  data: GradeReportQuestionUpdateManyMutationInputObjectSchema,
  where: GradeReportQuestionWhereInputObjectSchema.optional(),
});
