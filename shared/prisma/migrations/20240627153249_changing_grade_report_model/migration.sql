/*
  Warnings:

  - You are about to drop the `GradeReportLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GradeReportProblem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GradeReportQuestion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `interest` to the `GradeReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `GradeReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalActive` to the `GradeReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalCurious` to the `GradeReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalEligible` to the `GradeReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GradeReportLine" DROP CONSTRAINT "GradeReportLine_gradeReportID_fkey";

-- DropForeignKey
ALTER TABLE "GradeReportProblem" DROP CONSTRAINT "GradeReportProblem_lineID_fkey";

-- DropForeignKey
ALTER TABLE "GradeReportQuestion" DROP CONSTRAINT "GradeReportQuestion_lineID_fkey";

-- AlterTable
ALTER TABLE "GradeReport" ADD COLUMN     "interest" JSONB NOT NULL,
ADD COLUMN     "score" JSONB NOT NULL,
ADD COLUMN     "totalActive" INTEGER NOT NULL,
ADD COLUMN     "totalCurious" INTEGER NOT NULL,
ADD COLUMN     "totalEligible" INTEGER NOT NULL;

-- DropTable
DROP TABLE "GradeReportLine";

-- DropTable
DROP TABLE "GradeReportProblem";

-- DropTable
DROP TABLE "GradeReportQuestion";
