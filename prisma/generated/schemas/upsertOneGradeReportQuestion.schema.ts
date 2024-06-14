import { z } from 'zod';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionWhereUniqueInput.schema';
import { GradeReportQuestionCreateInputObjectSchema } from './objects/GradeReportQuestionCreateInput.schema';
import { GradeReportQuestionUncheckedCreateInputObjectSchema } from './objects/GradeReportQuestionUncheckedCreateInput.schema';
import { GradeReportQuestionUpdateInputObjectSchema } from './objects/GradeReportQuestionUpdateInput.schema';
import { GradeReportQuestionUncheckedUpdateInputObjectSchema } from './objects/GradeReportQuestionUncheckedUpdateInput.schema';

export const GradeReportQuestionUpsertSchema = z.object({
  where: GradeReportQuestionWhereUniqueInputObjectSchema,
  create: z.union([
    GradeReportQuestionCreateInputObjectSchema,
    GradeReportQuestionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GradeReportQuestionUpdateInputObjectSchema,
    GradeReportQuestionUncheckedUpdateInputObjectSchema,
  ]),
});
