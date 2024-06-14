import { z } from 'zod';
import { GradeReportQuestionWhereInputObjectSchema } from './objects/GradeReportQuestionWhereInput.schema';
import { GradeReportQuestionOrderByWithAggregationInputObjectSchema } from './objects/GradeReportQuestionOrderByWithAggregationInput.schema';
import { GradeReportQuestionScalarWhereWithAggregatesInputObjectSchema } from './objects/GradeReportQuestionScalarWhereWithAggregatesInput.schema';
import { GradeReportQuestionScalarFieldEnumSchema } from './enums/GradeReportQuestionScalarFieldEnum.schema';

export const GradeReportQuestionGroupBySchema = z.object({
  where: GradeReportQuestionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GradeReportQuestionOrderByWithAggregationInputObjectSchema,
      GradeReportQuestionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    GradeReportQuestionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GradeReportQuestionScalarFieldEnumSchema),
});
