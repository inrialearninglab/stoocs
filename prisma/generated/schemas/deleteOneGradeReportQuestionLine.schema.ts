import { z } from 'zod';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionLineWhereUniqueInput.schema';

export const GradeReportQuestionLineDeleteOneSchema = z.object({
  where: GradeReportQuestionLineWhereUniqueInputObjectSchema,
});
