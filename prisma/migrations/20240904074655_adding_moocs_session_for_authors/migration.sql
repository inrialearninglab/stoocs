/*
  Warnings:

  - You are about to drop the `_AuthorToMoocSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AuthorToMoocSession" DROP CONSTRAINT "_AuthorToMoocSession_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToMoocSession" DROP CONSTRAINT "_AuthorToMoocSession_B_fkey";

-- DropTable
DROP TABLE "_AuthorToMoocSession";

-- CreateTable
CREATE TABLE "_MoocSessionToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MoocSessionToUser_AB_unique" ON "_MoocSessionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MoocSessionToUser_B_index" ON "_MoocSessionToUser"("B");

-- AddForeignKey
ALTER TABLE "_MoocSessionToUser" ADD CONSTRAINT "_MoocSessionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "MoocSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MoocSessionToUser" ADD CONSTRAINT "_MoocSessionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
