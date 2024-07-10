/*
  Warnings:

  - Added the required column `totalUsers` to the `GradeReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GradeReport" ADD COLUMN     "totalUsers" INTEGER NOT NULL;
