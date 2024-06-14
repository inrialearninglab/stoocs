import { z } from 'zod';
import { GradeReportProblemWhereInputObjectSchema } from './objects/GradeReportProblemWhereInput.schema';

export const GradeReportProblemDeleteManySchema = z.object({
  where: GradeReportProblemWhereInputObjectSchema.optional(),
});
