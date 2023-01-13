/*
  Warnings:

  - You are about to drop the column `project_description` on the `projects` table. All the data in the column will be lost.
  - Added the required column `project_data` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "project_description",
ADD COLUMN     "project_data" TEXT NOT NULL;
