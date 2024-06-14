import { z } from 'zod';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionWhereUniqueInput.schema';

export const GradeReportQuestionFindUniqueSchema = z.object({
  where: GradeReportQuestionWhereUniqueInputObjectSchema,
});
