import { z } from 'zod';
import { GradeReportCreateManyInputObjectSchema } from './objects/GradeReportCreateManyInput.schema';

export const GradeReportCreateManySchema = z.object({
  data: z.union([
    GradeReportCreateManyInputObjectSchema,
    z.array(GradeReportCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
