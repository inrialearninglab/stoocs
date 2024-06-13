import { z } from 'zod';
import { GradeReportLineCreateInputObjectSchema } from './objects/GradeReportLineCreateInput.schema';
import { GradeReportLineUncheckedCreateInputObjectSchema } from './objects/GradeReportLineUncheckedCreateInput.schema';

export const GradeReportLineCreateOneSchema = z.object({
  data: z.union([
    GradeReportLineCreateInputObjectSchema,
    GradeReportLineUncheckedCreateInputObjectSchema,
  ]),
});
