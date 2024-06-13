import { z } from 'zod';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './objects/GradeReportProblemLineWhereUniqueInput.schema';

export const GradeReportProblemLineFindUniqueSchema = z.object({
  where: GradeReportProblemLineWhereUniqueInputObjectSchema,
});
