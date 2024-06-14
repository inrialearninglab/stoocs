import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemUserIDLabelCompoundUniqueInput> =
  z
    .object({
      userID: z.number(),
      label: z.string(),
    })
    .strict();

export const GradeReportProblemUserIDLabelCompoundUniqueInputObjectSchema =
  Schema;
