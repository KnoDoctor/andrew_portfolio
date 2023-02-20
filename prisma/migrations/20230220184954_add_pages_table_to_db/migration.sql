-- CreateTable
CREATE TABLE "pages" (
    "page_id" UUID NOT NULL,
    "page_name" VARCHAR(150) NOT NULL,
    "page_cms_data" JSONB NOT NULL DEFAULT '[]',
    "page_lookup_string" VARCHAR(500) NOT NULL,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("page_id")
);
