import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './objects/GradeReportLineWhereUniqueInput.schema';

export const GradeReportLineFindUniqueSchema = z.object({
  where: GradeReportLineWhereUniqueInputObjectSchema,
});
