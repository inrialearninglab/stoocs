-- AlterTable
ALTER TABLE "MoocSession" ADD COLUMN     "forumInstanceName" TEXT;

-- CreateTable
CREATE TABLE "Forum" (
    "instanceName" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Forum_instanceName_key" ON "Forum"("instanceName");

-- AddForeignKey
ALTER TABLE "MoocSession" ADD CONSTRAINT "MoocSession_forumInstanceName_fkey" FOREIGN KEY ("forumInstanceName") REFERENCES "Forum"("instanceName") ON DELETE SET NULL ON UPDATE CASCADE;
