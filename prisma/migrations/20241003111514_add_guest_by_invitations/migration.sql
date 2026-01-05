/*
  Warnings:

  - The required column `id` was added to the `Invitation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Invitation" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "_InvitationToSession" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InvitationToSession_AB_unique" ON "_InvitationToSession"("A", "B");

-- CreateIndex
CREATE INDEX "_InvitationToSession_B_index" ON "_InvitationToSession"("B");

-- AddForeignKey
ALTER TABLE "_InvitationToSession" ADD CONSTRAINT "_InvitationToSession_A_fkey" FOREIGN KEY ("A") REFERENCES "Invitation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InvitationToSession" ADD CONSTRAINT "_InvitationToSession_B_fkey" FOREIGN KEY ("B") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
