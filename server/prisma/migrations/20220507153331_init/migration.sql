/*
  Warnings:

  - You are about to drop the column `events` on the `Diem` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Diem` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "Diem" DROP COLUMN "events",
ADD COLUMN     "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" VARCHAR(25) NOT NULL DEFAULT E'password',
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "metaDiemId" INTEGER NOT NULL,
    "address" TEXT,
    "photo" TEXT,
    "title" TEXT NOT NULL,
    "time" TIME(2),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_metaDiemId_fkey" FOREIGN KEY ("metaDiemId") REFERENCES "Diem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
