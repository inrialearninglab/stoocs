/*
  Warnings:

  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SessionType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MoocSessionToTeamMember` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MoocSession" DROP CONSTRAINT "MoocSession_typeID_fkey";

-- DropForeignKey
ALTER TABLE "_MoocSessionToTeamMember" DROP CONSTRAINT "_MoocSessionToTeamMember_A_fkey";

-- DropForeignKey
ALTER TABLE "_MoocSessionToTeamMember" DROP CONSTRAINT "_MoocSessionToTeamMember_B_fkey";

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "SessionType";

-- DropTable
DROP TABLE "TeamMember";

-- DropTable
DROP TABLE "_MoocSessionToTeamMember";
