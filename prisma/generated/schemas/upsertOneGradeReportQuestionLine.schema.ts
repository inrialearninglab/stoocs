import { z } from 'zod';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionLineWhereUniqueInput.schema';
import { GradeReportQuestionLineCreateInputObjectSchema } from './objects/GradeReportQuestionLineCreateInput.schema';
import { GradeReportQuestionLineUncheckedCreateInputObjectSchema } from './objects/GradeReportQuestionLineUncheckedCreateInput.schema';
import { GradeReportQuestionLineUpdateInputObjectSchema } from './objects/GradeReportQuestionLineUpdateInput.schema';
import { GradeReportQuestionLineUncheckedUpdateInputObjectSchema } from './objects/GradeReportQuestionLineUncheckedUpdateInput.schema';

export const GradeReportQuestionLineUpsertSchema = z.object({
  where: GradeReportQuestionLineWhereUniqueInputObjectSchema,
  create: z.union([
    GradeReportQuestionLineCreateInputObjectSchema,
    GradeReportQuestionLineUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GradeReportQuestionLineUpdateInputObjectSchema,
    GradeReportQuestionLineUncheckedUpdateInputObjectSchema,
  ]),
});
