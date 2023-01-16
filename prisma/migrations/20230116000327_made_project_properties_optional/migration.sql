-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "project_data" DROP NOT NULL,
ALTER COLUMN "project_hero_image" DROP NOT NULL,
ALTER COLUMN "is_published" SET DEFAULT false;
