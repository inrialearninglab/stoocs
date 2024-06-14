import { z } from 'zod';
import { GradeReportQuestionUserIDLabelCompoundUniqueInputObjectSchema } from './GradeReportQuestionUserIDLabelCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionWhereUniqueInput> = z
  .object({
    userID_label: z
      .lazy(() => GradeReportQuestionUserIDLabelCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const GradeReportQuestionWhereUniqueInputObjectSchema = Schema;
