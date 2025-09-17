/*
  Warnings:

  - You are about to drop the `_RoleToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "rolename" TEXT;

-- DropTable
DROP TABLE "_RoleToUser";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rolename_fkey" FOREIGN KEY ("rolename") REFERENCES "Role"("name") ON DELETE SET NULL ON UPDATE CASCADE;
