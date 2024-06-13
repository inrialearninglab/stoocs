import { z } from 'zod';
import { GradeReportWhereUniqueInputObjectSchema } from './objects/GradeReportWhereUniqueInput.schema';

export const GradeReportDeleteOneSchema = z.object({
  where: GradeReportWhereUniqueInputObjectSchema,
});
