import { z } from 'zod';
import { GradeReportCreateInputObjectSchema } from './objects/GradeReportCreateInput.schema';
import { GradeReportUncheckedCreateInputObjectSchema } from './objects/GradeReportUncheckedCreateInput.schema';

export const GradeReportCreateOneSchema = z.object({
  data: z.union([
    GradeReportCreateInputObjectSchema,
    GradeReportUncheckedCreateInputObjectSchema,
  ]),
});
