-- CreateTable
CREATE TABLE "Supply" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "underlyingAsset" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "decimals" INTEGER NOT NULL,
    "amount" BIGINT NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "left_amount" BIGINT NOT NULL,

    CONSTRAINT "Supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Redeem" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "underlyingAsset" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "decimals" INTEGER NOT NULL,
    "amount" BIGINT NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "effected" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Redeem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Point" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "point_type" TEXT NOT NULL,
    "supply_id" TEXT NOT NULL,
    "point" DOUBLE PRECISION NOT NULL,
    "last_timestamp" BIGINT NOT NULL,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PointSummary" (
    "address" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "supply_points" DOUBLE PRECISION NOT NULL,
    "points" DOUBLE PRECISION NOT NULL,
    "last_timestamp" BIGINT NOT NULL,

    CONSTRAINT "PointSummary_pkey" PRIMARY KEY ("address")
);

-- CreateIndex
CREATE INDEX "Supply_address_idx" ON "Supply"("address");

-- CreateIndex
CREATE INDEX "Redeem_address_idx" ON "Redeem"("address");

-- CreateIndex
CREATE INDEX "Redeem_effected_idx" ON "Redeem"("effected");

-- CreateIndex
CREATE INDEX "Point_address_idx" ON "Point"("address");

-- CreateIndex
CREATE INDEX "Point_point_type_idx" ON "Point"("point_type");

-- CreateIndex
CREATE INDEX "PointSummary_address_idx" ON "PointSummary"("address");
