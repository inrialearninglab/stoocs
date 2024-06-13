import { z } from 'zod';
import { GradeReportWhereInputObjectSchema } from './objects/GradeReportWhereInput.schema';
import { GradeReportOrderByWithAggregationInputObjectSchema } from './objects/GradeReportOrderByWithAggregationInput.schema';
import { GradeReportScalarWhereWithAggregatesInputObjectSchema } from './objects/GradeReportScalarWhereWithAggregatesInput.schema';
import { GradeReportScalarFieldEnumSchema } from './enums/GradeReportScalarFieldEnum.schema';

export const GradeReportGroupBySchema = z.object({
  where: GradeReportWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GradeReportOrderByWithAggregationInputObjectSchema,
      GradeReportOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: GradeReportScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GradeReportScalarFieldEnumSchema),
});
