/*
  Warnings:

  - You are about to drop the `persons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "persons";

-- CreateTable
CREATE TABLE "people" (
    "person_id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,

    CONSTRAINT "people_pkey" PRIMARY KEY ("person_id")
);
