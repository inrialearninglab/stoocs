-- CreateIndex
CREATE INDEX "GradeReport_moocSessionId_idx" ON "GradeReport"("moocSessionId");

-- CreateIndex
CREATE INDEX "GradeReportLine_userID_gradeReportID_idx" ON "GradeReportLine"("userID", "gradeReportID");

-- CreateIndex
CREATE INDEX "GradeReportProblem_userID_lineID_idx" ON "GradeReportProblem"("userID", "lineID");

-- CreateIndex
CREATE INDEX "GradeReportQuestion_userID_lineID_idx" ON "GradeReportQuestion"("userID", "lineID");
