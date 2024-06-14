import { z } from 'zod';
import { GradeReportProblemOrderByWithRelationInputObjectSchema } from './objects/GradeReportProblemOrderByWithRelationInput.schema';
import { GradeReportProblemWhereInputObjectSchema } from './objects/GradeReportProblemWhereInput.schema';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './objects/GradeReportProblemWhereUniqueInput.schema';
import { GradeReportProblemCountAggregateInputObjectSchema } from './objects/GradeReportProblemCountAggregateInput.schema';
import { GradeReportProblemMinAggregateInputObjectSchema } from './objects/GradeReportProblemMinAggregateInput.schema';
import { GradeReportProblemMaxAggregateInputObjectSchema } from './objects/GradeReportProblemMaxAggregateInput.schema';
import { GradeReportProblemAvgAggregateInputObjectSchema } from './objects/GradeReportProblemAvgAggregateInput.schema';
import { GradeReportProblemSumAggregateInputObjectSchema } from './objects/GradeReportProblemSumAggregateInput.schema';

export const GradeReportProblemAggregateSchema = z.object({
  orderBy: z
    .union([
      GradeReportProblemOrderByWithRelationInputObjectSchema,
      GradeReportProblemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportProblemWhereInputObjectSchema.optional(),
  cursor: GradeReportProblemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), GradeReportProblemCountAggregateInputObjectSchema])
    .optional(),
  _min: GradeReportProblemMinAggregateInputObjectSchema.optional(),
  _max: GradeReportProblemMaxAggregateInputObjectSchema.optional(),
  _avg: GradeReportProblemAvgAggregateInputObjectSchema.optional(),
  _sum: GradeReportProblemSumAggregateInputObjectSchema.optional(),
});
