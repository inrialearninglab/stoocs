-- AlterTable
ALTER TABLE "Mooc" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "theme" DROP NOT NULL,
ALTER COLUMN "target" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MoocSession" ALTER COLUMN "enrollmentsDetails" DROP NOT NULL,
ALTER COLUMN "totalEnrollments" SET DEFAULT 0;
