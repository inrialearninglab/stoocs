import { z } from 'zod';
import { GradeReportLineCreateManyInputObjectSchema } from './objects/GradeReportLineCreateManyInput.schema';

export const GradeReportLineCreateManySchema = z.object({
  data: z.union([
    GradeReportLineCreateManyInputObjectSchema,
    z.array(GradeReportLineCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
