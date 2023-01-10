-- CreateTable
CREATE TABLE "projects" (
    "project_id" UUID NOT NULL,
    "project_name" TEXT NOT NULL,
    "project_description" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("project_id")
);
