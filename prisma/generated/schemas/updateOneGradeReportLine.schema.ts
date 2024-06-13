import { z } from 'zod';
import { GradeReportLineUpdateInputObjectSchema } from './objects/GradeReportLineUpdateInput.schema';
import { GradeReportLineUncheckedUpdateInputObjectSchema } from './objects/GradeReportLineUncheckedUpdateInput.schema';
import { GradeReportLineWhereUniqueInputObjectSchema } from './objects/GradeReportLineWhereUniqueInput.schema';

export const GradeReportLineUpdateOneSchema = z.object({
  data: z.union([
    GradeReportLineUpdateInputObjectSchema,
    GradeReportLineUncheckedUpdateInputObjectSchema,
  ]),
  where: GradeReportLineWhereUniqueInputObjectSchema,
});
