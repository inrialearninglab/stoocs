import { z } from 'zod';
import { GradeReportLineWhereInputObjectSchema } from './objects/GradeReportLineWhereInput.schema';

export const GradeReportLineDeleteManySchema = z.object({
  where: GradeReportLineWhereInputObjectSchema.optional(),
});
