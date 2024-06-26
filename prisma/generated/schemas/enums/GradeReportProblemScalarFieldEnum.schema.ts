import { z } from 'zod';

export const GradeReportProblemScalarFieldEnumSchema = z.enum([
  'id',
  'userID',
  'label',
  'score',
  'possible',
  'lineID',
]);
