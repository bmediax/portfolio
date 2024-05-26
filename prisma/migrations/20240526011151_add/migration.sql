/*
  Warnings:

  - You are about to drop the `Ref` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Ref";

-- CreateTable
CREATE TABLE "refs" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "refs_pkey" PRIMARY KEY ("id")
);
