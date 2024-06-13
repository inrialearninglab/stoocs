import { z } from 'zod';
import { GradeReportQuestionLineOrderByWithRelationInputObjectSchema } from './objects/GradeReportQuestionLineOrderByWithRelationInput.schema';
import { GradeReportQuestionLineWhereInputObjectSchema } from './objects/GradeReportQuestionLineWhereInput.schema';
import { GradeReportQuestionLineWhereUniqueInputObjectSchema } from './objects/GradeReportQuestionLineWhereUniqueInput.schema';
import { GradeReportQuestionLineCountAggregateInputObjectSchema } from './objects/GradeReportQuestionLineCountAggregateInput.schema';
import { GradeReportQuestionLineMinAggregateInputObjectSchema } from './objects/GradeReportQuestionLineMinAggregateInput.schema';
import { GradeReportQuestionLineMaxAggregateInputObjectSchema } from './objects/GradeReportQuestionLineMaxAggregateInput.schema';
import { GradeReportQuestionLineAvgAggregateInputObjectSchema } from './objects/GradeReportQuestionLineAvgAggregateInput.schema';
import { GradeReportQuestionLineSumAggregateInputObjectSchema } from './objects/GradeReportQuestionLineSumAggregateInput.schema';

export const GradeReportQuestionLineAggregateSchema = z.object({
  orderBy: z
    .union([
      GradeReportQuestionLineOrderByWithRelationInputObjectSchema,
      GradeReportQuestionLineOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportQuestionLineWhereInputObjectSchema.optional(),
  cursor: GradeReportQuestionLineWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      GradeReportQuestionLineCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: GradeReportQuestionLineMinAggregateInputObjectSchema.optional(),
  _max: GradeReportQuestionLineMaxAggregateInputObjectSchema.optional(),
  _avg: GradeReportQuestionLineAvgAggregateInputObjectSchema.optional(),
  _sum: GradeReportQuestionLineSumAggregateInputObjectSchema.optional(),
});
