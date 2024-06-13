import { z } from 'zod';
import { GradeReportOrderByWithRelationInputObjectSchema } from './objects/GradeReportOrderByWithRelationInput.schema';
import { GradeReportWhereInputObjectSchema } from './objects/GradeReportWhereInput.schema';
import { GradeReportWhereUniqueInputObjectSchema } from './objects/GradeReportWhereUniqueInput.schema';
import { GradeReportScalarFieldEnumSchema } from './enums/GradeReportScalarFieldEnum.schema';

export const GradeReportFindManySchema = z.object({
  orderBy: z
    .union([
      GradeReportOrderByWithRelationInputObjectSchema,
      GradeReportOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GradeReportWhereInputObjectSchema.optional(),
  cursor: GradeReportWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(GradeReportScalarFieldEnumSchema).optional(),
});
