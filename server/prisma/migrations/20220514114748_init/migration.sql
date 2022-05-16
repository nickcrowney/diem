-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "author" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "diemId" INTEGER,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
