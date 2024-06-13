import { z } from 'zod';
import { GradeReportWhereUniqueInputObjectSchema } from './objects/GradeReportWhereUniqueInput.schema';
import { GradeReportCreateInputObjectSchema } from './objects/GradeReportCreateInput.schema';
import { GradeReportUncheckedCreateInputObjectSchema } from './objects/GradeReportUncheckedCreateInput.schema';
import { GradeReportUpdateInputObjectSchema } from './objects/GradeReportUpdateInput.schema';
import { GradeReportUncheckedUpdateInputObjectSchema } from './objects/GradeReportUncheckedUpdateInput.schema';

export const GradeReportUpsertSchema = z.object({
  where: GradeReportWhereUniqueInputObjectSchema,
  create: z.union([
    GradeReportCreateInputObjectSchema,
    GradeReportUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GradeReportUpdateInputObjectSchema,
    GradeReportUncheckedUpdateInputObjectSchema,
  ]),
});
