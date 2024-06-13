import { z } from 'zod';
import { GradeReportProblemLineUpdateManyMutationInputObjectSchema } from './objects/GradeReportProblemLineUpdateManyMutationInput.schema';
import { GradeReportProblemLineWhereInputObjectSchema } from './objects/GradeReportProblemLineWhereInput.schema';

export const GradeReportProblemLineUpdateManySchema = z.object({
  data: GradeReportProblemLineUpdateManyMutationInputObjectSchema,
  where: GradeReportProblemLineWhereInputObjectSchema.optional(),
});
