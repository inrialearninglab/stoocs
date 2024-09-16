/*
  Warnings:

  - Made the column `rolename` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_rolename_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "rolename" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_rolename_fkey" FOREIGN KEY ("rolename") REFERENCES "Role"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
