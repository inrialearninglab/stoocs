/*
  Warnings:

  - A unique constraint covering the columns `[instanceName,forumUrl]` on the table `Forum` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Forum" ADD COLUMN     "forumUrl" TEXT NOT NULL DEFAULT 'https://mooc-forums.inria.fr';

-- DropForeignKey
ALTER TABLE "MoocSession" DROP CONSTRAINT "MoocSession_forumInstanceName_fkey";

-- DropIndex
DROP INDEX "Forum_instanceName_key";

-- AlterTable
ALTER TABLE "MoocSession" ADD COLUMN     "forumUrl" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Forum_instanceName_forumUrl_key" ON "Forum"("instanceName", "forumUrl");

-- AddForeignKey
ALTER TABLE "MoocSession" ADD CONSTRAINT "MoocSession_forumInstanceName_forumUrl_fkey" FOREIGN KEY ("forumInstanceName", "forumUrl") REFERENCES "Forum"("instanceName", "forumUrl") ON DELETE SET NULL ON UPDATE CASCADE;
