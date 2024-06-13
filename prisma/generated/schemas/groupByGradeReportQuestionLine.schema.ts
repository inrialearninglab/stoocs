import { z } from 'zod';
import { GradeReportQuestionLineWhereInputObjectSchema } from './objects/GradeReportQuestionLineWhereInput.schema';
import { GradeReportQuestionLineOrderByWithAggregationInputObjectSchema } from './objects/GradeReportQuestionLineOrderByWithAggregationInput.schema';
import { GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema } from './objects/GradeReportQuestionLineScalarWhereWithAggregatesInput.schema';
import { GradeReportQuestionLineScalarFieldEnumSchema } from './enums/GradeReportQuestionLineScalarFieldEnum.schema';

export const GradeReportQuestionLineGroupBySchema = z.object({
  where: GradeReportQuestionLineWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GradeReportQuestionLineOrderByWithAggregationInputObjectSchema,
      GradeReportQuestionLineOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    GradeReportQuestionLineScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GradeReportQuestionLineScalarFieldEnumSchema),
});
