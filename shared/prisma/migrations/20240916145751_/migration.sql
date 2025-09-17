/*
  Warnings:

  - A unique constraint covering the columns `[moocID,sessionName]` on the table `MoocSession` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MoocSession_moocID_sessionName_key" ON "MoocSession"("moocID", "sessionName");
