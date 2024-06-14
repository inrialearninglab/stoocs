import { z } from 'zod';

export const GradeReportProblemScalarFieldEnumSchema = z.enum([
  'userID',
  'label',
  'score',
  'possible',
  'lineID',
]);
