import { z } from 'zod';
import { GradeReportLineWhereInputObjectSchema } from './objects/GradeReportLineWhereInput.schema';
import { GradeReportLineOrderByWithAggregationInputObjectSchema } from './objects/GradeReportLineOrderByWithAggregationInput.schema';
import { GradeReportLineScalarWhereWithAggregatesInputObjectSchema } from './objects/GradeReportLineScalarWhereWithAggregatesInput.schema';
import { GradeReportLineScalarFieldEnumSchema } from './enums/GradeReportLineScalarFieldEnum.schema';

export const GradeReportLineGroupBySchema = z.object({
  where: GradeReportLineWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GradeReportLineOrderByWithAggregationInputObjectSchema,
      GradeReportLineOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: GradeReportLineScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GradeReportLineScalarFieldEnumSchema),
});
