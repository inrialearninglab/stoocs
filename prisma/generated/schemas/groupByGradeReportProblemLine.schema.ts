import { z } from 'zod';
import { GradeReportProblemLineWhereInputObjectSchema } from './objects/GradeReportProblemLineWhereInput.schema';
import { GradeReportProblemLineOrderByWithAggregationInputObjectSchema } from './objects/GradeReportProblemLineOrderByWithAggregationInput.schema';
import { GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema } from './objects/GradeReportProblemLineScalarWhereWithAggregatesInput.schema';
import { GradeReportProblemLineScalarFieldEnumSchema } from './enums/GradeReportProblemLineScalarFieldEnum.schema';

export const GradeReportProblemLineGroupBySchema = z.object({
  where: GradeReportProblemLineWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GradeReportProblemLineOrderByWithAggregationInputObjectSchema,
      GradeReportProblemLineOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    GradeReportProblemLineScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GradeReportProblemLineScalarFieldEnumSchema),
});
