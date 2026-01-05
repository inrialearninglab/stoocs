/*
  Warnings:

  - You are about to drop the column `userID` on the `Session` table. All the data in the column will be lost.
  - Added the required column `useriD` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userID_fkey";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userID",
ADD COLUMN     "useriD" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_useriD_fkey" FOREIGN KEY ("useriD") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
