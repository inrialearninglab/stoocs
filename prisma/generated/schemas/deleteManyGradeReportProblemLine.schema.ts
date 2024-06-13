import { z } from 'zod';
import { GradeReportProblemLineWhereInputObjectSchema } from './objects/GradeReportProblemLineWhereInput.schema';

export const GradeReportProblemLineDeleteManySchema = z.object({
  where: GradeReportProblemLineWhereInputObjectSchema.optional(),
});
