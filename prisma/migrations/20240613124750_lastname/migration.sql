/*
  Warnings:

  - You are about to drop the column `lastName` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `TeamMember` table. All the data in the column will be lost.
  - Added the required column `lastname` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `TeamMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "lastName",
ADD COLUMN     "lastname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TeamMember" DROP COLUMN "lastName",
ADD COLUMN     "lastname" TEXT NOT NULL;
