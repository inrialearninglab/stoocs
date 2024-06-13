/*
  Warnings:

  - You are about to drop the column `platformID` on the `MoocSession` table. All the data in the column will be lost.
  - You are about to drop the `Platform` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MoocSession" DROP CONSTRAINT "MoocSession_platformID_fkey";

-- AlterTable
ALTER TABLE "MoocSession" DROP COLUMN "platformID";

-- DropTable
DROP TABLE "Platform";
