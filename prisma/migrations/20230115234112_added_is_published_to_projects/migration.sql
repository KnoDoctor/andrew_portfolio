/*
  Warnings:

  - Added the required column `is_published` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "is_published" BOOLEAN NOT NULL;
