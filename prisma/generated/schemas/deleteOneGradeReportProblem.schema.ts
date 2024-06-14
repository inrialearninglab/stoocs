import { z } from 'zod';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './objects/GradeReportProblemWhereUniqueInput.schema';

export const GradeReportProblemDeleteOneSchema = z.object({
  where: GradeReportProblemWhereUniqueInputObjectSchema,
});
