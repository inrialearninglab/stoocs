/*
  Warnings:

  - Added the required column `threshold` to the `GradeReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GradeReport" ADD COLUMN     "threshold" JSONB NOT NULL;
