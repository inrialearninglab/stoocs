import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './objects/GradeReportLineWhereUniqueInput.schema';
import { GradeReportLineCreateInputObjectSchema } from './objects/GradeReportLineCreateInput.schema';
import { GradeReportLineUncheckedCreateInputObjectSchema } from './objects/GradeReportLineUncheckedCreateInput.schema';
import { GradeReportLineUpdateInputObjectSchema } from './objects/GradeReportLineUpdateInput.schema';
import { GradeReportLineUncheckedUpdateInputObjectSchema } from './objects/GradeReportLineUncheckedUpdateInput.schema';

export const GradeReportLineUpsertSchema = z.object({
  where: GradeReportLineWhereUniqueInputObjectSchema,
  create: z.union([
    GradeReportLineCreateInputObjectSchema,
    GradeReportLineUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GradeReportLineUpdateInputObjectSchema,
    GradeReportLineUncheckedUpdateInputObjectSchema,
  ]),
});
