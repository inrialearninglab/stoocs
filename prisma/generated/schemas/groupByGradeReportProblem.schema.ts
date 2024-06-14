import { z } from 'zod';
import { GradeReportProblemWhereInputObjectSchema } from './objects/GradeReportProblemWhereInput.schema';
import { GradeReportProblemOrderByWithAggregationInputObjectSchema } from './objects/GradeReportProblemOrderByWithAggregationInput.schema';
import { GradeReportProblemScalarWhereWithAggregatesInputObjectSchema } from './objects/GradeReportProblemScalarWhereWithAggregatesInput.schema';
import { GradeReportProblemScalarFieldEnumSchema } from './enums/GradeReportProblemScalarFieldEnum.schema';

export const GradeReportProblemGroupBySchema = z.object({
  where: GradeReportProblemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GradeReportProblemOrderByWithAggregationInputObjectSchema,
      GradeReportProblemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    GradeReportProblemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GradeReportProblemScalarFieldEnumSchema),
});
