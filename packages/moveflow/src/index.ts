import dotenv from "dotenv";
dotenv.config();
import { Command } from "commander";
import { loadSendingStreams } from "./graph";
import { getLogger, todayUTC8Zero } from "./utils";
import { fetchHistoryPriceCache, fetchOraclePriceCache, tokens } from "./point";
import { getCache } from "./cache";
import { ethers } from "ethers";
import { HistoryPrice } from "./tokenHelper";
import { coinIDs } from "./config";

const program = new Command();
const logger = getLogger();

program.command("send-history").action(async () => {});

program
  .command("send-today")
  .option("-p, --price <price>", "price type", "oracle")
  .action(async (options: { price: string }) => {
    if (options.price == "oracle") {
      await fetchOraclePriceCache();
    } else {
      await fetchHistoryPriceCache(todayUTC8Zero());
    }

    logger.info(`rpc url : ${process.env.RPC_URL}`);

    const priceKey = (tokenAddress: string): string => {
      let cacheKey = "";
      if (options.price == "oracle") {
        cacheKey = `price_oracle_${tokenAddress}`;
      } else {
        cacheKey = `price_history_${tokenAddress}`;
      }
      // logger.info(`get cacheKey: ${cacheKey}`);
      return cacheKey;
    };

    const streams = await loadSendingStreams();
    logger.info(`streams: ${streams.length} found !`);
    for (let i = 0; i < streams.length; i++) {
      const stream = streams[i];
      logger.info("\n");

      logger.info(
        `===== stream: ${stream.id} ${i + 1}/${streams.length} =====`
      );
      const token = stream.assetType;
      const formatTokenID = ethers.getAddress(stream.token.id);
      // logger.info(`formatTokenID: ${formatTokenID}`);
      const cacheKeyToGet = priceKey(formatTokenID);

      const thatPrice = getCache<HistoryPrice>(cacheKeyToGet);
      if (!thatPrice) {
        logger.error(`price not found for ${token}`);
        continue;
      }

      // const streamAmount = processStreamAmountByTime(
      //   stream.streamData,
      //   stream.status,
      //   "Outgoing",
      //   todayUTC8Zero()
      // );

      // logger.info(`streamAmount: ${streamAmount}`);

      logger.info(
        `Streamed: ${stream.id} ${stream.token.name} ${stream.streamedAmount}/${stream.depositAmount}  `
      );
      // const streamUSD = thatPrice.price * Number(stream.streamedAmount);
    }
  });

program
  .command("load-price")
  .option("-o, --oracle", "load oracle price")
  .action(async (options: { oracle: boolean }) => {
    logger.info("load oracle price...");
    if (options.oracle) {
      await fetchOraclePriceCache();
      for (let token of tokens) {
        const coinID = coinIDs[token as keyof typeof coinIDs];
        const price = getCache<HistoryPrice>(`price_oracle_${coinID}`);
        if (!price) {
          logger.error(`price not found for ${coinID}`);
          continue;
        } else {
          logger.info(`${coinID} price: ${JSON.stringify(price)}`);
        }
      }
    } else {
      await fetchHistoryPriceCache(todayUTC8Zero());
      for (let token of tokens) {
        const price = getCache<HistoryPrice>(`price_history_${token}`);
        if (!price) {
          logger.error(`price not found for ${token}`);
          continue;
        } else {
          const tokenAddress = ethers.getAddress(token);
          logger.info(
            `${
              coinIDs[tokenAddress as keyof typeof coinIDs]
            } price: ${JSON.stringify(price)}`
          );
        }
      }
    }
  });

program.action(async () => {
  logger.info("You can running send-today or send-history");
});

program.parse(process.argv);

// const sendStreamPoints = async (year: number, month: number, day: number) => {
//   const timestamp = dayUTC8Zero(year, month, day);
//   const streams = await loadSendingStreams(timestamp.toString());
//   const total = streams.length;
//   for (let i = 0; i < streams.length; i++) {
//     const stream = streams[i];
//     console.log(`deal with stream : ${stream.id} ${i + 1}/${total}`);
//     const token = stream.token.id;
//     const coinId = coinIDs[token as keyof typeof coinIDs];
//     const price = await fetchPrice(coinId, timestamp - 3600 * 5, timestamp);
//     console.log(`price: ${price}`);

//     const tokenSend = stream.deposit;
//   }
// };

// const main = async () => {
//   await sendStreamPoints(2025, 3, 1);
// };

// main().catch(console.error);
