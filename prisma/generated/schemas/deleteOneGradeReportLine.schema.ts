import { z } from 'zod';
import { GradeReportLineWhereUniqueInputObjectSchema } from './objects/GradeReportLineWhereUniqueInput.schema';

export const GradeReportLineDeleteOneSchema = z.object({
  where: GradeReportLineWhereUniqueInputObjectSchema,
});
