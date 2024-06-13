import { z } from 'zod';
import { GradeReportLineCreateManyGradeReportInputObjectSchema } from './GradeReportLineCreateManyGradeReportInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineCreateManyGradeReportInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => GradeReportLineCreateManyGradeReportInputObjectSchema),
        z
          .lazy(() => GradeReportLineCreateManyGradeReportInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GradeReportLineCreateManyGradeReportInputEnvelopeObjectSchema =
  Schema;
