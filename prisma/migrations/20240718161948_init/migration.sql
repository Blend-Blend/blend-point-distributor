/*
  Warnings:

  - You are about to drop the column `supply_id` on the `Point` table. All the data in the column will be lost.
  - Added the required column `link_id` to the `Point` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Point" DROP COLUMN "supply_id",
ADD COLUMN     "link_id" TEXT NOT NULL;
