import { z } from 'zod';
import { GradeReportQuestionLineUserIDLabelCompoundUniqueInputObjectSchema } from './GradeReportQuestionLineUserIDLabelCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineWhereUniqueInput> = z
  .object({
    userID_label: z
      .lazy(
        () => GradeReportQuestionLineUserIDLabelCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportQuestionLineWhereUniqueInputObjectSchema = Schema;
