/*
  Warnings:

  - You are about to drop the `Refs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Refs";

-- CreateTable
CREATE TABLE "Ref" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ref_pkey" PRIMARY KEY ("id")
);
