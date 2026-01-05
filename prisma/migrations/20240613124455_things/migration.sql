/*
  Warnings:

  - Added the required column `organization` to the `Mooc` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mooc" ADD COLUMN     "organization" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MoocSession" ADD COLUMN     "ended" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "startDate" TIMESTAMP(3);
