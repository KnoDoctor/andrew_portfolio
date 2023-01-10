/*
  Warnings:

  - The primary key for the `persons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `person_id` on the `persons` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "persons" DROP CONSTRAINT "persons_pkey",
DROP COLUMN "person_id",
ADD COLUMN     "person_id" UUID NOT NULL,
ADD CONSTRAINT "persons_pkey" PRIMARY KEY ("person_id");
