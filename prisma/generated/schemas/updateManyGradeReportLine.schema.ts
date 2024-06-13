import { z } from 'zod';
import { GradeReportLineUpdateManyMutationInputObjectSchema } from './objects/GradeReportLineUpdateManyMutationInput.schema';
import { GradeReportLineWhereInputObjectSchema } from './objects/GradeReportLineWhereInput.schema';

export const GradeReportLineUpdateManySchema = z.object({
  data: GradeReportLineUpdateManyMutationInputObjectSchema,
  where: GradeReportLineWhereInputObjectSchema.optional(),
});
