-- CreateTable
CREATE TABLE "App" (
    "id" SERIAL NOT NULL,
    "initialized" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "App_pkey" PRIMARY KEY ("id")
);
