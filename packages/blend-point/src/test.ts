import dotenv from "dotenv";
import {
  dayUTC8Zero,
  fetchPrice,
  getLogger,
  timeSeconds,
  todayUTC8Zero,
} from "./utils";
import { coinIDBitcoin, WBTC_ADDRESS } from "./config";
import { fetchOraclePrice } from "./tokenHelper";

dotenv.config();
const logger = getLogger();

const main = async () => {
  const now = timeSeconds(0);
  const price = await fetchPrice(coinIDBitcoin, now - 600, now);
  logger.info(`coingecko price : ${price}`);

  const pricex = await fetchOraclePrice(WBTC_ADDRESS);
  logger.info(`oracle price : ${pricex}`);

  const history_x = dayUTC8Zero(2025, 2, 28);
  logger.info(`history_x : ${history_x}`);

  const history_y = todayUTC8Zero();
  logger.info(`today 00:00 : ${history_y}`);
};

main();
