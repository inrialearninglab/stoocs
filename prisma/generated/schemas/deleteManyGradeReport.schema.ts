import { z } from 'zod';
import { GradeReportWhereInputObjectSchema } from './objects/GradeReportWhereInput.schema';

export const GradeReportDeleteManySchema = z.object({
  where: GradeReportWhereInputObjectSchema.optional(),
});
