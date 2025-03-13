-- CreateTable
CREATE TABLE "DailyPoint" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "stake_usd" DOUBLE PRECISION NOT NULL,
    "debt_usd" DOUBLE PRECISION NOT NULL,
    "blend_lend" DOUBLE PRECISION NOT NULL,
    "blend_borrow" DOUBLE PRECISION NOT NULL,
    "yuzu_lend" DOUBLE PRECISION NOT NULL,
    "yuzu_borrow" DOUBLE PRECISION NOT NULL,
    "blend_point" DOUBLE PRECISION NOT NULL,
    "yuzu_point" DOUBLE PRECISION NOT NULL,
    "send_date" TEXT NOT NULL,
    "last_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSummary" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "blend_lend" DOUBLE PRECISION NOT NULL,
    "blend_borrow" DOUBLE PRECISION NOT NULL,
    "yuzu_lend" DOUBLE PRECISION NOT NULL,
    "yuzu_borrow" DOUBLE PRECISION NOT NULL,
    "blend_point" DOUBLE PRECISION NOT NULL,
    "yuzu_point" DOUBLE PRECISION NOT NULL,
    "last_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DailyPoint_user_id_idx" ON "DailyPoint"("user_id");

-- CreateIndex
CREATE INDEX "DailyPoint_last_time_idx" ON "DailyPoint"("last_time");

-- CreateIndex
CREATE UNIQUE INDEX "DailyPoint_user_id_send_date_key" ON "DailyPoint"("user_id", "send_date");

-- CreateIndex
CREATE UNIQUE INDEX "UserSummary_user_id_key" ON "UserSummary"("user_id");

-- CreateIndex
CREATE INDEX "UserSummary_user_id_idx" ON "UserSummary"("user_id");

-- CreateIndex
CREATE INDEX "UserSummary_last_time_idx" ON "UserSummary"("last_time");

-- CreateIndex
CREATE INDEX "UserSummary_blend_point_idx" ON "UserSummary"("blend_point");

-- CreateIndex
CREATE INDEX "UserSummary_yuzu_point_idx" ON "UserSummary"("yuzu_point");
