/*
  Warnings:

  - You are about to drop the `_MoocSessionToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MoocSessionToUser" DROP CONSTRAINT "_MoocSessionToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_MoocSessionToUser" DROP CONSTRAINT "_MoocSessionToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "moocSessions" TEXT[];

-- DropTable
DROP TABLE "_MoocSessionToUser";
