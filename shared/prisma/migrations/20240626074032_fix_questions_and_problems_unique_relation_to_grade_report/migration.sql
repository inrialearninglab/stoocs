/*
  Warnings:

  - Added the required column `reportID` to the `GradeReportProblem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportID` to the `GradeReportQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GradeReportProblem" ADD COLUMN     "reportID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GradeReportQuestion" ADD COLUMN     "reportID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "GradeReportQuestion" ADD CONSTRAINT "GradeReportQuestion_reportID_fkey" FOREIGN KEY ("reportID") REFERENCES "GradeReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeReportProblem" ADD CONSTRAINT "GradeReportProblem_reportID_fkey" FOREIGN KEY ("reportID") REFERENCES "GradeReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
