import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineWhereUniqueInput> = z
  .object({
    userID: z.number().optional(),
  })
  .strict();

export const GradeReportLineWhereUniqueInputObjectSchema = Schema;
