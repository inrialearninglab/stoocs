import { z } from 'zod';
import { GradeReportProblemLineOrderByWithRelationInputObjectSchema } from './objects/GradeReportProblemLineOrderByWithRelationInput.schema';
import { GradeReportProblemLineWhereInputObjectSchema } from './objects/GradeReportProblemLineWhereInput.schema';
import { GradeReportProblemLineWhereUniqueInputObjectSchema } from './objects/GradeReportProblemLineWhereUniqueInput.schema';
import { GradeReportProblemLineScalarFieldEnumSchema } from './enums/GradeReportProblemLineScalarFieldEnum.schema';

export const GradeReportProblemLineFindManySchema = z.object({
  orderBy: z
    .union([
      GradeReportProblemLineOrderByWithRelationInputObjectSchema,
      GradeReportProblemLineOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportProblemLineWhereInputObjectSchema.optional(),
  cursor: GradeReportProblemLineWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GradeReportProblemLineScalarFieldEnumSchema).optional(),
});
