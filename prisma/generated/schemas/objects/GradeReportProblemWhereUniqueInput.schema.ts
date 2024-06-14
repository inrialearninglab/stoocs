import { z } from 'zod';
import { GradeReportProblemUserIDLabelCompoundUniqueInputObjectSchema } from './GradeReportProblemUserIDLabelCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemWhereUniqueInput> = z
  .object({
    userID_label: z
      .lazy(() => GradeReportProblemUserIDLabelCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportProblemWhereUniqueInputObjectSchema = Schema;
