/*
  Warnings:

  - A unique constraint covering the columns `[createdAt]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Event_createdAt_key" ON "Event"("createdAt");
