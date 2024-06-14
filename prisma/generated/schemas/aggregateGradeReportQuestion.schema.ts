import { z } from 'zod';
import { GradeReportQuestionOrderByWithRelationInputObjectSchema } from './objects/GradeReportQuestionOrderByWithRelationInput.schema';
import { GradeReportQuestionWhereInputObjectSchema } from './objects/GradeReportQuestionWhereInput.schema';
import { GradeReportQuestionWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionWhereUniqueInput.schema';
import { GradeReportQuestionCountAggregateInputObjectSchema } from './objects/GradeReportQuestionCountAggregateInput.schema';
import { GradeReportQuestionMinAggregateInputObjectSchema } from './objects/GradeReportQuestionMinAggregateInput.schema';
import { GradeReportQuestionMaxAggregateInputObjectSchema } from './objects/GradeReportQuestionMaxAggregateInput.schema';
import { GradeReportQuestionAvgAggregateInputObjectSchema } from './objects/GradeReportQuestionAvgAggregateInput.schema';
import { GradeReportQuestionSumAggregateInputObjectSchema } from './objects/GradeReportQuestionSumAggregateInput.schema';

export const GradeReportQuestionAggregateSchema = z.object({
  orderBy: z
    .union([
      GradeReportQuestionOrderByWithRelationInputObjectSchema,
      GradeReportQuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportQuestionWhereInputObjectSchema.optional(),
  cursor: GradeReportQuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      GradeReportQuestionCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: GradeReportQuestionMinAggregateInputObjectSchema.optional(),
  _max: GradeReportQuestionMaxAggregateInputObjectSchema.optional(),
  _avg: GradeReportQuestionAvgAggregateInputObjectSchema.optional(),
  _sum: GradeReportQuestionSumAggregateInputObjectSchema.optional(),
});
