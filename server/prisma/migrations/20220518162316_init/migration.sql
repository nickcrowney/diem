/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Event` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Event_createdAt_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "createdAt";
