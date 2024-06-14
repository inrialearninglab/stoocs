import { z } from 'zod';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './objects/GradeReportProblemWhereUniqueInput.schema';

export const GradeReportProblemFindUniqueSchema = z.object({
  where: GradeReportProblemWhereUniqueInputObjectSchema,
});
