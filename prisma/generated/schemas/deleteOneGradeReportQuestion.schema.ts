import { z } from 'zod';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionWhereUniqueInput.schema';

export const GradeReportQuestionDeleteOneSchema = z.object({
  where: GradeReportQuestionWhereUniqueInputObjectSchema,
});
