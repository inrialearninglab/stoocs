import { z } from 'zod';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './objects/GradeReportProblemLineWhereUniqueInput.schema';
import { GradeReportProblemLineCreateInputObjectSchema } from './objects/GradeReportProblemLineCreateInput.schema';
import { GradeReportProblemLineUncheckedCreateInputObjectSchema } from './objects/GradeReportProblemLineUncheckedCreateInput.schema';
import { GradeReportProblemLineUpdateInputObjectSchema } from './objects/GradeReportProblemLineUpdateInput.schema';
import { GradeReportProblemLineUncheckedUpdateInputObjectSchema } from './objects/GradeReportProblemLineUncheckedUpdateInput.schema';

export const GradeReportProblemLineUpsertSchema = z.object({
  where: GradeReportProblemLineWhereUniqueInputObjectSchema,
  create: z.union([
    GradeReportProblemLineCreateInputObjectSchema,
    GradeReportProblemLineUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GradeReportProblemLineUpdateInputObjectSchema,
    GradeReportProblemLineUncheckedUpdateInputObjectSchema,
  ]),
});
