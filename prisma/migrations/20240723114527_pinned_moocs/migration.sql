/*
  Warnings:

  - You are about to drop the column `pinnedMooc` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "pinnedMooc";

-- CreateTable
CREATE TABLE "PinnedMooc" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moocId" TEXT NOT NULL,

    CONSTRAINT "PinnedMooc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PinnedMooc_userId_moocId_key" ON "PinnedMooc"("userId", "moocId");

-- AddForeignKey
ALTER TABLE "PinnedMooc" ADD CONSTRAINT "PinnedMooc_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PinnedMooc" ADD CONSTRAINT "PinnedMooc_moocId_fkey" FOREIGN KEY ("moocId") REFERENCES "Mooc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
