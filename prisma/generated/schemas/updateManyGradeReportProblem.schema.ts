import { z } from 'zod';
import { GradeReportProblemUpdateManyMutationInputObjectSchema } from './objects/GradeReportProblemUpdateManyMutationInput.schema';
import { GradeReportProblemWhereInputObjectSchema } from './objects/GradeReportProblemWhereInput.schema';

export const GradeReportProblemUpdateManySchema = z.object({
  data: GradeReportProblemUpdateManyMutationInputObjectSchema,
  where: GradeReportProblemWhereInputObjectSchema.optional(),
});
