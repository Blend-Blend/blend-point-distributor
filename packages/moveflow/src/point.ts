import {
  WEDU_ADDRESS,
  USDC_ADDRESS,
  WETH_ADDRESS,
  USDT_ADDRESS,
  WBTC_ADDRESS,
  coinIDs,
  BLEND_TOKEN_ADDRESS,
} from "./config";
import { fetchCoingeckoPrice, fetchOraclePrice } from "./tokenHelper";
import { getLogger, dayUTC8Zero, todayUTC8Zero } from "./utils";
import { setCache } from "./cache";
export interface UserReserveUSD {
  id: string;
  stakeAmount: number;
  debtAmount: number;
}

const logger = getLogger();

export interface PointResult {
  totalPoint: number;
  yuzuTotalPoint: number;
  blendLend: number;
  blendBorrow: number;
  yuzuLend: number;
  yuzuBorrow: number;
}

export const calculatePoint = (userReserveUSD: UserReserveUSD): PointResult => {
  // 积分计算精度
  const pointsCount = 1000;

  // blend point
  const stakePoint =
    Math.round((userReserveUSD.stakeAmount / 90) * pointsCount) / pointsCount;

  const debtPoint =
    Math.round(((userReserveUSD.debtAmount * 1.5) / 90) * pointsCount) /
    pointsCount;

  const totalPoint = stakePoint + debtPoint;

  // Yuzu point
  const yuzuStakePoint =
    Math.round((userReserveUSD.stakeAmount / 90) * pointsCount) / pointsCount;

  const yuzuDebtPoint =
    Math.round(((userReserveUSD.debtAmount * 1.5) / 90) * pointsCount) /
    pointsCount;

  const yuzuTotalPoint = yuzuStakePoint + yuzuDebtPoint;

  return {
    blendLend: stakePoint,
    blendBorrow: debtPoint,
    yuzuLend: yuzuStakePoint,
    yuzuBorrow: yuzuDebtPoint,
    totalPoint,
    yuzuTotalPoint,
  };
};

export const tokens = [
  WBTC_ADDRESS,
  USDT_ADDRESS,
  USDC_ADDRESS,
  WETH_ADDRESS,
  WEDU_ADDRESS,
  BLEND_TOKEN_ADDRESS,
];

export const fetchOraclePriceCache = async () => {
  for (let token of tokens) {
    const coinID = coinIDs[token as keyof typeof coinIDs];
    const price = await fetchOraclePrice(token);
    // logger.info(`price: ${price} ${token} ${coinID}`);
    logger.info(`cache key : ${`price_oracle_${token}`} ${price}`);
    setCache(`price_oracle_${coinID}`, {
      timestamp: todayUTC8Zero(),
      price,
    });
  }
};

export const fetchHistoryPriceCache = async (historyTimeStamp: number) => {
  for (let token of tokens) {
    const coinId = coinIDs[token as keyof typeof coinIDs];
    const historyPrice = await fetchCoingeckoPrice(
      coinId,
      historyTimeStamp - 3600 * 5,
      historyTimeStamp
    );
    logger.info(`historyPrice: ${JSON.stringify(historyPrice)}`);
    logger.info(`cache key : ${`price_history_${token}`}`);
    setCache(`price_history_${token}`, historyPrice);
  }
};
