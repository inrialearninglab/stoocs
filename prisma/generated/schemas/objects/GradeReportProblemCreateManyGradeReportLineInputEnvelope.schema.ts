import { z } from 'zod';
import { GradeReportProblemCreateManyGradeReportLineInputObjectSchema } from './GradeReportProblemCreateManyGradeReportLineInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemCreateManyGradeReportLineInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => GradeReportProblemCreateManyGradeReportLineInputObjectSchema,
        ),
        z
          .lazy(
            () => GradeReportProblemCreateManyGradeReportLineInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GradeReportProblemCreateManyGradeReportLineInputEnvelopeObjectSchema =
  Schema;
