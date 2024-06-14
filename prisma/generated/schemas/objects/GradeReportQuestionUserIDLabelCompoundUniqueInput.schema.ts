import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionUserIDLabelCompoundUniqueInput> =
  z
    .object({
      userID: z.number(),
      label: z.string(),
    })
    .strict();

export const GradeReportQuestionUserIDLabelCompoundUniqueInputObjectSchema =
  Schema;
