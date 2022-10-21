/*
  Warnings:

  - The `plan` column on the `Organization` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `guidedBrands` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FREE', 'STARTER', 'PROFESSIONAL', 'BUSINESS');

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "plan",
ADD COLUMN     "plan" "Plan" NOT NULL DEFAULT 'FREE';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "guidedBrands";
