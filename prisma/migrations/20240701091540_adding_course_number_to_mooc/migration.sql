/*
  Warnings:

  - A unique constraint covering the columns `[courseNumber]` on the table `Mooc` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseNumber` to the `Mooc` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Mooc_title_key";

-- AlterTable
ALTER TABLE "Mooc" ADD COLUMN     "courseNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Mooc_courseNumber_key" ON "Mooc"("courseNumber");
