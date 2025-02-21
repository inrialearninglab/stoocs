/*
  Warnings:

  - A unique constraint covering the columns `[courseNumber,title]` on the table `Mooc` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Mooc_courseNumber_key";

-- CreateIndex
CREATE UNIQUE INDEX "Mooc_courseNumber_title_key" ON "Mooc"("courseNumber", "title");
