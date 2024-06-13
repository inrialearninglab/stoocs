import { z } from 'zod';
import { GradeReportWhereUniqueInputObjectSchema } from './objects/GradeReportWhereUniqueInput.schema';

export const GradeReportFindUniqueSchema = z.object({
  where: GradeReportWhereUniqueInputObjectSchema,
});
