import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportLineScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GradeReportLineScalarWhereInputObjectSchema),
        z.lazy(() => GradeReportLineScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GradeReportLineScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GradeReportLineScalarWhereInputObjectSchema),
        z.lazy(() => GradeReportLineScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    userID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    grade: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    certificateEligible: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    certificateDelivered: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    gradeReportID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const GradeReportLineScalarWhereInputObjectSchema = Schema;
