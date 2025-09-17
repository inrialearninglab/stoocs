-- CreateTable
CREATE TABLE "Mooc" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "target" TEXT NOT NULL,

    CONSTRAINT "Mooc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MoocSession" (
    "id" TEXT NOT NULL,
    "enrollmentsDetails" JSONB NOT NULL,
    "totalEnrollments" INTEGER NOT NULL,
    "platformID" TEXT NOT NULL,
    "typeID" TEXT NOT NULL,
    "moocID" TEXT NOT NULL,

    CONSTRAINT "MoocSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessionType" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "SessionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GradeReport" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "moocSessionId" TEXT NOT NULL,

    CONSTRAINT "GradeReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GradeReportLine" (
    "userID" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "certificateEligible" TEXT NOT NULL,
    "certificateDelivered" TEXT NOT NULL,
    "gradeReportID" TEXT NOT NULL,

    CONSTRAINT "GradeReportLine_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "GradeReportQuestionLine" (
    "userID" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "lineID" INTEGER NOT NULL,

    CONSTRAINT "GradeReportQuestionLine_pkey" PRIMARY KEY ("userID","label")
);

-- CreateTable
CREATE TABLE "GradeReportProblemLine" (
    "userID" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "score" INTEGER,
    "possible" INTEGER,
    "lineID" INTEGER NOT NULL,

    CONSTRAINT "GradeReportProblemLine_pkey" PRIMARY KEY ("userID","label")
);

-- CreateTable
CREATE TABLE "_AuthorToMoocSession" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MoocSessionToTeamMember" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToMoocSession_AB_unique" ON "_AuthorToMoocSession"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToMoocSession_B_index" ON "_AuthorToMoocSession"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MoocSessionToTeamMember_AB_unique" ON "_MoocSessionToTeamMember"("A", "B");

-- CreateIndex
CREATE INDEX "_MoocSessionToTeamMember_B_index" ON "_MoocSessionToTeamMember"("B");

-- AddForeignKey
ALTER TABLE "MoocSession" ADD CONSTRAINT "MoocSession_platformID_fkey" FOREIGN KEY ("platformID") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoocSession" ADD CONSTRAINT "MoocSession_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "SessionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoocSession" ADD CONSTRAINT "MoocSession_moocID_fkey" FOREIGN KEY ("moocID") REFERENCES "Mooc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeReport" ADD CONSTRAINT "GradeReport_moocSessionId_fkey" FOREIGN KEY ("moocSessionId") REFERENCES "MoocSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeReportLine" ADD CONSTRAINT "GradeReportLine_gradeReportID_fkey" FOREIGN KEY ("gradeReportID") REFERENCES "GradeReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeReportQuestionLine" ADD CONSTRAINT "GradeReportQuestionLine_lineID_fkey" FOREIGN KEY ("lineID") REFERENCES "GradeReportLine"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GradeReportProblemLine" ADD CONSTRAINT "GradeReportProblemLine_lineID_fkey" FOREIGN KEY ("lineID") REFERENCES "GradeReportLine"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToMoocSession" ADD CONSTRAINT "_AuthorToMoocSession_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToMoocSession" ADD CONSTRAINT "_AuthorToMoocSession_B_fkey" FOREIGN KEY ("B") REFERENCES "MoocSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoocSessionToTeamMember" ADD CONSTRAINT "_MoocSessionToTeamMember_A_fkey" FOREIGN KEY ("A") REFERENCES "MoocSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoocSessionToTeamMember" ADD CONSTRAINT "_MoocSessionToTeamMember_B_fkey" FOREIGN KEY ("B") REFERENCES "TeamMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;
