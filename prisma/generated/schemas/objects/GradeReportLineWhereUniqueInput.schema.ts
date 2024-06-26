import { z } from 'zod';
import { GradeReportLineUserIDGradeReportIDCompoundUniqueInputObjectSchema } from './GradeReportLineUserIDGradeReportIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userID_gradeReportID: z
      .lazy(
        () => GradeReportLineUserIDGradeReportIDCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportLineWhereUniqueInputObjectSchema = Schema;
