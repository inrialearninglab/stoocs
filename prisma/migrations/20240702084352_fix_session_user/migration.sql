-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userID_fkey";

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
