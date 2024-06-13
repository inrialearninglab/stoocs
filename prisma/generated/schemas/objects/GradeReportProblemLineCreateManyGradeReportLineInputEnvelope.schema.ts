import { z } from 'zod';
import { GradeReportProblemLineCreateManyGradeReportLineInputObjectSchema } from './GradeReportProblemLineCreateManyGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineCreateManyGradeReportLineInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            GradeReportProblemLineCreateManyGradeReportLineInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              GradeReportProblemLineCreateManyGradeReportLineInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GradeReportProblemLineCreateManyGradeReportLineInputEnvelopeObjectSchema =
  Schema;
