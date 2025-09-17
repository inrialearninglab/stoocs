-- CreateTable
CREATE TABLE "Registration" (
    "token_hash" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Registration_token_hash_key" ON "Registration"("token_hash");
