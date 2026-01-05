/*
  Warnings:

  - The primary key for the `GradeReportProblem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GradeReportQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "GradeReportProblem" DROP CONSTRAINT "GradeReportProblem_pkey",
ADD CONSTRAINT "GradeReportProblem_pkey" PRIMARY KEY ("userID", "label");

-- AlterTable
ALTER TABLE "GradeReportQuestion" DROP CONSTRAINT "GradeReportQuestion_pkey",
ADD CONSTRAINT "GradeReportQuestion_pkey" PRIMARY KEY ("userID", "label");
