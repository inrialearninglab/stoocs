/*
  Warnings:

  - You are about to drop the `_MoocSessionToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MoocSessionToUser" DROP CONSTRAINT "_MoocSessionToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_MoocSessionToUser" DROP CONSTRAINT "_MoocSessionToUser_B_fkey";

-- DropTable
DROP TABLE "_MoocSessionToUser";

-- CreateTable
CREATE TABLE "AuthorMoocSession" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AuthorMoocSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuthorMoocSession" ADD CONSTRAINT "AuthorMoocSession_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "MoocSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorMoocSession" ADD CONSTRAINT "AuthorMoocSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
