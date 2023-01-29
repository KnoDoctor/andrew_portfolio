-- CreateTable
CREATE TABLE "articles" (
    "article_id" UUID NOT NULL,
    "article_name" TEXT NOT NULL,
    "article_description" TEXT,
    "article_data" TEXT,
    "article_prompt" TEXT,
    "article_ai_response" TEXT,
    "article_hero_image" TEXT,
    "is_published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("article_id")
);
