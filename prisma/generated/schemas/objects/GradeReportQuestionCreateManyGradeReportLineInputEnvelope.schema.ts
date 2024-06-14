import { z } from 'zod';
import { GradeReportQuestionCreateManyGradeReportLineInputObjectSchema } from './GradeReportQuestionCreateManyGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportQuestionCreateManyGradeReportLineInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => GradeReportQuestionCreateManyGradeReportLineInputObjectSchema,
        ),
        z
          .lazy(
            () => GradeReportQuestionCreateManyGradeReportLineInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GradeReportQuestionCreateManyGradeReportLineInputEnvelopeObjectSchema =
  Schema;
