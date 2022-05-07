-- CreateTable
CREATE TABLE "Diem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "users" INTEGER[],

    CONSTRAINT "Diem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "diems" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
