/*
  Warnings:

  - You are about to drop the `GradeReportProblemLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GradeReportQuestionLine` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[title]` on the table `Mooc` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "GradeReportProblemLine" DROP CONSTRAINT "GradeReportProblemLine_lineID_fkey";

-- DropForeignKey
ALTER TABLE "GradeReportQuestionLine" DROP CONSTRAINT "GradeReportQuestionLine_lineID_fkey";

-- DropTable
DROP TABLE "GradeReportProblemLine";

-- DropTable
DROP TABLE "GradeReportQuestionLine";

-- CreateTable
CREATE TABLE "GradeReportQuestion" (
    "userID" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "lineID" INTEGER NOT NULL,

    CONSTRAINT "GradeReportQuestion_pkey" PRIMARY KEY ("userID","label")
);

-- CreateTable
CREATE TABLE "GradeReportProblem" (
    "userID" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "score" INTEGER,
    "possible" INTEGER,
    "lineID" INTEGER NOT NULL,

    CONSTRAINT "GradeReportProblem_pkey" PRIMARY KEY ("userID","label")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mooc_title_key" ON "Mooc"("title");

-- AddForeignKey
ALTER TABLE "GradeReportQuestion" ADD CONSTRAINT "GradeReportQuestion_lineID_fkey" FOREIGN KEY ("lineID") REFERENCES "GradeReportLine"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeReportProblem" ADD CONSTRAINT "GradeReportProblem_lineID_fkey" FOREIGN KEY ("lineID") REFERENCES "GradeReportLine"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
