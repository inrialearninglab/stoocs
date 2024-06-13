/*
  Warnings:

  - Added the required column `sessionName` to the `MoocSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MoocSession" DROP CONSTRAINT "MoocSession_typeID_fkey";

-- AlterTable
ALTER TABLE "MoocSession" ADD COLUMN     "sessionName" TEXT NOT NULL,
ALTER COLUMN "typeID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "MoocSession" ADD CONSTRAINT "MoocSession_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "SessionType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
