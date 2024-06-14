import { z } from 'zod';
import { GradeReportProblemOrderByWithRelationInputObjectSchema } from './objects/GradeReportProblemOrderByWithRelationInput.schema';
import { GradeReportProblemWhereInputObjectSchema } from './objects/GradeReportProblemWhereInput.schema';
import { GradeReportProblemWhereUniqueInputObjectSchema } from './objects/GradeReportProblemWhereUniqueInput.schema';
import { GradeReportProblemScalarFieldEnumSchema } from './enums/GradeReportProblemScalarFieldEnum.schema';

export const GradeReportProblemFindManySchema = z.object({
  orderBy: z
    .union([
      GradeReportProblemOrderByWithRelationInputObjectSchema,
      GradeReportProblemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportProblemWhereInputObjectSchema.optional(),
  cursor: GradeReportProblemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GradeReportProblemScalarFieldEnumSchema).optional(),
});
