import { z } from 'zod';
import { GradeReportUpdateInputObjectSchema } from './objects/GradeReportUpdateInput.schema';
import { GradeReportUncheckedUpdateInputObjectSchema } from './objects/GradeReportUncheckedUpdateInput.schema';
import { GradeReportWhereUniqueInputObjectSchema } from './objects/GradeReportWhereUniqueInput.schema';

export const GradeReportUpdateOneSchema = z.object({
  data: z.union([
    GradeReportUpdateInputObjectSchema,
    GradeReportUncheckedUpdateInputObjectSchema,
  ]),
  where: GradeReportWhereUniqueInputObjectSchema,
});
