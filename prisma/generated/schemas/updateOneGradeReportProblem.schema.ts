import { z } from 'zod';
import { GradeReportProblemUpdateInputObjectSchema } from './objects/GradeReportProblemUpdateInput.schema';
import { GradeReportProblemUncheckedUpdateInputObjectSchema } from './objects/GradeReportProblemUncheckedUpdateInput.schema';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './objects/GradeReportProblemWhereUniqueInput.schema';

export const GradeReportProblemUpdateOneSchema = z.object({
  data: z.union([
    GradeReportProblemUpdateInputObjectSchema,
    GradeReportProblemUncheckedUpdateInputObjectSchema,
  ]),
  where: GradeReportProblemWhereUniqueInputObjectSchema,
});
