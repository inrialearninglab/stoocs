import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateManyGradeReportInput> = z
  .object({
    id: z.string().optional(),
    userID: z.number(),
    grade: z.number(),
    certificateEligible: z.string(),
    certificateDelivered: z.string(),
  })
  .strict();

export const GradeReportLineCreateManyGradeReportInputObjectSchema = Schema;
