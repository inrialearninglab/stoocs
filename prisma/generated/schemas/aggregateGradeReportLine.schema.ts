import { z } from 'zod';
import { GradeReportLineOrderByWithRelationInputObjectSchema } from './objects/GradeReportLineOrderByWithRelationInput.schema';
import { GradeReportLineWhereInputObjectSchema } from './objects/GradeReportLineWhereInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './objects/GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineCountAggregateInputObjectSchema } from './objects/GradeReportLineCountAggregateInput.schema';
import { GradeReportLineMinAggregateInputObjectSchema } from './objects/GradeReportLineMinAggregateInput.schema';
import { GradeReportLineMaxAggregateInputObjectSchema } from './objects/GradeReportLineMaxAggregateInput.schema';
import { GradeReportLineAvgAggregateInputObjectSchema } from './objects/GradeReportLineAvgAggregateInput.schema';
import { GradeReportLineSumAggregateInputObjectSchema } from './objects/GradeReportLineSumAggregateInput.schema';

export const GradeReportLineAggregateSchema = z.object({
  orderBy: z
    .union([
      GradeReportLineOrderByWithRelationInputObjectSchema,
      GradeReportLineOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportLineWhereInputObjectSchema.optional(),
  cursor: GradeReportLineWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), GradeReportLineCountAggregateInputObjectSchema])
    .optional(),
  _min: GradeReportLineMinAggregateInputObjectSchema.optional(),
  _max: GradeReportLineMaxAggregateInputObjectSchema.optional(),
  _avg: GradeReportLineAvgAggregateInputObjectSchema.optional(),
  _sum: GradeReportLineSumAggregateInputObjectSchema.optional(),
});
