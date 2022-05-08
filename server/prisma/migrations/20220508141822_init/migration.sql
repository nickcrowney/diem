/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(25)`.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_userId_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "name" VARCHAR(50) NOT NULL,
ALTER COLUMN "password" SET DEFAULT E'password',
ALTER COLUMN "password" SET DATA TYPE VARCHAR(25);

-- DropTable
DROP TABLE "Car";

-- CreateTable
CREATE TABLE "Diem" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Diem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "status" VARCHAR(255),
    "userId" INTEGER NOT NULL,
    "userPhoto" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "metaDiemId" INTEGER NOT NULL,
    "address" TEXT,
    "photo" TEXT,
    "title" TEXT NOT NULL,
    "time" TEXT,
    "location" TEXT,
    "mapLink" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");
