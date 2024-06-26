import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineUserIDGradeReportIDCompoundUniqueInput> =
  z
    .object({
      userID: z.number(),
      gradeReportID: z.string(),
    })
    .strict();

export const GradeReportLineUserIDGradeReportIDCompoundUniqueInputObjectSchema =
  Schema;
