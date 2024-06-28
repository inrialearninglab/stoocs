import { z } from 'zod';
import { GradeReportOrderByWithRelationInputObjectSchema } from './objects/GradeReportOrderByWithRelationInput.schema';
import { GradeReportWhereInputObjectSchema } from './objects/GradeReportWhereInput.schema';
import { GradeReportWhereUniqueInputObjectSchema } from './objects/GradeReportWhereUniqueInput.schema';
import { GradeReportCountAggregateInputObjectSchema } from './objects/GradeReportCountAggregateInput.schema';
import { GradeReportMinAggregateInputObjectSchema } from './objects/GradeReportMinAggregateInput.schema';
import { GradeReportMaxAggregateInputObjectSchema } from './objects/GradeReportMaxAggregateInput.schema';
import { GradeReportAvgAggregateInputObjectSchema } from './objects/GradeReportAvgAggregateInput.schema';
import { GradeReportSumAggregateInputObjectSchema } from './objects/GradeReportSumAggregateInput.schema';

export const GradeReportAggregateSchema = z.object({
  orderBy: z
    .union([
      GradeReportOrderByWithRelationInputObjectSchema,
      GradeReportOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportWhereInputObjectSchema.optional(),
  cursor: GradeReportWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), GradeReportCountAggregateInputObjectSchema])
    .optional(),
  _min: GradeReportMinAggregateInputObjectSchema.optional(),
  _max: GradeReportMaxAggregateInputObjectSchema.optional(),
  _avg: GradeReportAvgAggregateInputObjectSchema.optional(),
  _sum: GradeReportSumAggregateInputObjectSchema.optional(),
});
