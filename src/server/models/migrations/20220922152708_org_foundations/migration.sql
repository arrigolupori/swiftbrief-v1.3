/*
  Warnings:

  - A unique constraint covering the columns `[customerId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "brandAllowance" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "briefAllowance" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "customerId" TEXT,
ADD COLUMN     "monthlyBriefsUsed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "monthlyTopicsUsed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "periodEnd" TIMESTAMP(3),
ADD COLUMN     "plan" TEXT NOT NULL DEFAULT 'Free',
ADD COLUMN     "topicAllowance" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "Organization_customerId_key" ON "Organization"("customerId");
