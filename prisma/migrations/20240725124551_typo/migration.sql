/*
  Warnings:

  - You are about to drop the column `expires_at` on the `Registration` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registration" DROP COLUMN "expires_at",
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
