/*
  Warnings:

  - You are about to drop the column `token_hash` on the `Registration` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tokenHash]` on the table `Registration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tokenHash` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Registration_token_hash_key";

-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "token_hash",
ADD COLUMN     "tokenHash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Registration_tokenHash_key" ON "Registration"("tokenHash");
