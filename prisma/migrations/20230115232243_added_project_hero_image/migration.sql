/*
  Warnings:

  - Added the required column `project_hero_image` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "project_hero_image" TEXT NOT NULL;
