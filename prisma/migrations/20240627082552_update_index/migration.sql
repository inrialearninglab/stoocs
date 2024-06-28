-- DropIndex
DROP INDEX "GradeReport_moocSessionId_idx";

-- DropIndex
DROP INDEX "GradeReportLine_userID_gradeReportID_idx";

-- DropIndex
DROP INDEX "GradeReportProblem_userID_lineID_idx";

-- DropIndex
DROP INDEX "GradeReportQuestion_userID_lineID_idx";

-- CreateIndex
CREATE INDEX "GradeReportLine_gradeReportID_idx" ON "GradeReportLine"("gradeReportID");

-- CreateIndex
CREATE INDEX "GradeReportProblem_lineID_idx" ON "GradeReportProblem"("lineID");

-- CreateIndex
CREATE INDEX "GradeReportQuestion_lineID_idx" ON "GradeReportQuestion"("lineID");
