import { z } from 'zod';
import { GradeReportProblemLineUserIDLabelCompoundUniqueInputObjectSchema } from './GradeReportProblemLineUserIDLabelCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GradeReportProblemLineWhereUniqueInput> = z
  .object({
    userID_label: z
      .lazy(
        () => GradeReportProblemLineUserIDLabelCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GradeReportProblemLineWhereUniqueInputObjectSchema = Schema;
