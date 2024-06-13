import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineUserIDLabelCompoundUniqueInput> =
  z
    .object({
      userID: z.number(),
      label: z.string(),
    })
    .strict();

export const GradeReportQuestionLineUserIDLabelCompoundUniqueInputObjectSchema =
  Schema;
