import { z } from 'zod';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './objects/GradeReportProblemWhereUniqueInput.schema';
import { GradeReportProblemCreateInputObjectSchema } from './objects/GradeReportProblemCreateInput.schema';
import { GradeReportProblemUncheckedCreateInputObjectSchema } from './objects/GradeReportProblemUncheckedCreateInput.schema';
import { GradeReportProblemUpdateInputObjectSchema } from './objects/GradeReportProblemUpdateInput.schema';
import { GradeReportProblemUncheckedUpdateInputObjectSchema } from './objects/GradeReportProblemUncheckedUpdateInput.schema';

export const GradeReportProblemUpsertSchema = z.object({
  where: GradeReportProblemWhereUniqueInputObjectSchema,
  create: z.union([
    GradeReportProblemCreateInputObjectSchema,
    GradeReportProblemUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GradeReportProblemUpdateInputObjectSchema,
    GradeReportProblemUncheckedUpdateInputObjectSchema,
  ]),
});
