import { z } from 'zod';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './objects/GradeReportProblemLineWhereUniqueInput.schema';

export const GradeReportProblemLineDeleteOneSchema = z.object({
  where: GradeReportProblemLineWhereUniqueInputObjectSchema,
});
