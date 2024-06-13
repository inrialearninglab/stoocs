import { z } from 'zod';
import { GradeReportQuestionLineCreateManyGradeReportLineInputObjectSchema } from './GradeReportQuestionLineCreateManyGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionLineCreateManyGradeReportLineInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            GradeReportQuestionLineCreateManyGradeReportLineInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              GradeReportQuestionLineCreateManyGradeReportLineInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GradeReportQuestionLineCreateManyGradeReportLineInputEnvelopeObjectSchema =
  Schema;
