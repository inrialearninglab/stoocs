import { z } from 'zod';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionLineWhereUniqueInput.schema';

export const GradeReportQuestionLineFindUniqueSchema = z.object({
  where: GradeReportQuestionLineWhereUniqueInputObjectSchema,
});
