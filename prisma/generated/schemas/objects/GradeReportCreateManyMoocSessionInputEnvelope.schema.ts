import { z } from 'zod';
import { GradeReportCreateManyMoocSessionInputObjectSchema } from './GradeReportCreateManyMoocSessionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportCreateManyMoocSessionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => GradeReportCreateManyMoocSessionInputObjectSchema),
        z.lazy(() => GradeReportCreateManyMoocSessionInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GradeReportCreateManyMoocSessionInputEnvelopeObjectSchema = Schema;
