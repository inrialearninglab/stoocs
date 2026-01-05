/*
  Warnings:

  - The primary key for the `GradeReportProblem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `reportID` on the `GradeReportProblem` table. All the data in the column will be lost.
  - The primary key for the `GradeReportQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `reportID` on the `GradeReportQuestion` table. All the data in the column will be lost.
  - The required column `id` was added to the `GradeReportProblem` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `GradeReportQuestion` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "GradeReportProblem" DROP CONSTRAINT "GradeReportProblem_reportID_fkey";

-- DropForeignKey
ALTER TABLE "GradeReportQuestion" DROP CONSTRAINT "GradeReportQuestion_reportID_fkey";

-- AlterTable
ALTER TABLE "GradeReportProblem" DROP CONSTRAINT "GradeReportProblem_pkey",
DROP COLUMN "reportID",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "GradeReportProblem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GradeReportQuestion" DROP CONSTRAINT "GradeReportQuestion_pkey",
DROP COLUMN "reportID",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "GradeReportQuestion_pkey" PRIMARY KEY ("id");
