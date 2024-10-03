/*
  Warnings:

  - You are about to drop the `_InvitationToSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InvitationToSession" DROP CONSTRAINT "_InvitationToSession_A_fkey";

-- DropForeignKey
ALTER TABLE "_InvitationToSession" DROP CONSTRAINT "_InvitationToSession_B_fkey";

-- AlterTable
ALTER TABLE "Invitation" ADD COLUMN     "moocSessions" TEXT[];

-- DropTable
DROP TABLE "_InvitationToSession";
