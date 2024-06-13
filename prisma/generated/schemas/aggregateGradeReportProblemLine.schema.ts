import { z } from 'zod';
import { GradeReportProblemLineOrderByWithRelationInputObjectSchema } from './objects/GradeReportProblemLineOrderByWithRelationInput.schema';
import { GradeReportProblemLineWhereInputObjectSchema } from './objects/GradeReportProblemLineWhereInput.schema';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './objects/GradeReportProblemLineWhereUniqueInput.schema';
import { GradeReportProblemLineCountAggregateInputObjectSchema } from './objects/GradeReportProblemLineCountAggregateInput.schema';
import { GradeReportProblemLineMinAggregateInputObjectSchema } from './objects/GradeReportProblemLineMinAggregateInput.schema';
import { GradeReportProblemLineMaxAggregateInputObjectSchema } from './objects/GradeReportProblemLineMaxAggregateInput.schema';
import { GradeReportProblemLineAvgAggregateInputObjectSchema } from './objects/GradeReportProblemLineAvgAggregateInput.schema';
import { GradeReportProblemLineSumAggregateInputObjectSchema } from './objects/GradeReportProblemLineSumAggregateInput.schema';

export const GradeReportProblemLineAggregateSchema = z.object({
  orderBy: z
    .union([
      GradeReportProblemLineOrderByWithRelationInputObjectSchema,
      GradeReportProblemLineOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportProblemLineWhereInputObjectSchema.optional(),
  cursor: GradeReportProblemLineWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      GradeReportProblemLineCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: GradeReportProblemLineMinAggregateInputObjectSchema.optional(),
  _max: GradeReportProblemLineMaxAggregateInputObjectSchema.optional(),
  _avg: GradeReportProblemLineAvgAggregateInputObjectSchema.optional(),
  _sum: GradeReportProblemLineSumAggregateInputObjectSchema.optional(),
});
