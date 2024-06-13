import { z } from 'zod';
import { GradeReportUpdateManyMutationInputObjectSchema } from './objects/GradeReportUpdateManyMutationInput.schema';
import { GradeReportWhereInputObjectSchema } from './objects/GradeReportWhereInput.schema';

export const GradeReportUpdateManySchema = z.object({
  data: GradeReportUpdateManyMutationInputObjectSchema,
  where: GradeReportWhereInputObjectSchema.optional(),
});
