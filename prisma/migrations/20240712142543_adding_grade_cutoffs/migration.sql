/*
  Warnings:

  - Added the required column `cutoffs` to the `MoocSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MoocSession" ADD COLUMN     "cutoffs" DOUBLE PRECISION NOT NULL;
