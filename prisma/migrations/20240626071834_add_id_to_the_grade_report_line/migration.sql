/*
  Warnings:

  - The primary key for the `GradeReportLine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GradeReportProblem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `GradeReportQuestion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userID,gradeReportID]` on the table `GradeReportLine` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `GradeReportLine` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "GradeReportProblem" DROP CONSTRAINT "GradeReportProblem_lineID_fkey";

-- DropForeignKey
ALTER TABLE "GradeReportQuestion" DROP CONSTRAINT "GradeReportQuestion_lineID_fkey";

-- AlterTable
ALTER TABLE "GradeReportLine" DROP CONSTRAINT "GradeReportLine_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "GradeReportLine_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "GradeReportProblem" DROP CONSTRAINT "GradeReportProblem_pkey",
ALTER COLUMN "lineID" SET DATA TYPE TEXT,
ADD CONSTRAINT "GradeReportProblem_pkey" PRIMARY KEY ("userID", "lineID");

-- AlterTable
ALTER TABLE "GradeReportQuestion" DROP CONSTRAINT "GradeReportQuestion_pkey",
ALTER COLUMN "lineID" SET DATA TYPE TEXT,
ADD CONSTRAINT "GradeReportQuestion_pkey" PRIMARY KEY ("userID", "lineID");

-- CreateIndex
CREATE UNIQUE INDEX "GradeReportLine_userID_gradeReportID_key" ON "GradeReportLine"("userID", "gradeReportID");

-- AddForeignKey
ALTER TABLE "GradeReportQuestion" ADD CONSTRAINT "GradeReportQuestion_lineID_fkey" FOREIGN KEY ("lineID") REFERENCES "GradeReportLine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeReportProblem" ADD CONSTRAINT "GradeReportProblem_lineID_fkey" FOREIGN KEY ("lineID") REFERENCES "GradeReportLine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
