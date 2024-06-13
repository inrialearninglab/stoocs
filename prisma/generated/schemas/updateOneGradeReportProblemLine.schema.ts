import { z } from 'zod';
import { GradeReportProblemLineUpdateInputObjectSchema } from './objects/GradeReportProblemLineUpdateInput.schema';
import { GradeReportProblemLineUncheckedUpdateInputObjectSchema } from './objects/GradeReportProblemLineUncheckedUpdateInput.schema';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './objects/GradeReportProblemLineWhereUniqueInput.schema';

export const GradeReportProblemLineUpdateOneSchema = z.object({
  data: z.union([
    GradeReportProblemLineUpdateInputObjectSchema,
    GradeReportProblemLineUncheckedUpdateInputObjectSchema,
  ]),
  where: GradeReportProblemLineWhereUniqueInputObjectSchema,
});
