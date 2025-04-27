import dotenv from "dotenv";
dotenv.config();
import { Command } from "commander";
import { loadSendingStreams, processStreamAmountByTime } from "./graph";
import { getLogger, todayUTC8Zero } from "./utils";
import { fetchHistoryPriceCache, fetchOraclePriceCache, tokens } from "./point";
import { getCache } from "./cache";
import { ethers } from "ethers";
import { HistoryPrice } from "./tokenHelper";
import { coinIDs, point_per_day_usd } from "./config";
const program = new Command();
const logger = getLogger();

program.command("send-history").action(async () => {});

program
  .command("send-today")
  .option("-p, --price <price>", "price type", "oracle")
  .action(async (options: { price: string }) => {
    logger.info(`fetch price by  ${options.price}`);
    if (options.price == "oracle") {
      await fetchOraclePriceCache();
    } else {
      await fetchHistoryPriceCache(todayUTC8Zero());
    }

    logger.info(`rpc url : ${process.env.RPC_URL}`);

    const streams = await loadSendingStreams();
    logger.info(`streams: ${streams.length} found !`);
    for (let i = 0; i < streams.length; i++) {
      const stream = streams[i];

      // only stream that is streaming or scheduled will be processed
      if (stream.status !== "Streaming" && stream.status !== "Scheduled") {
        logger.info(`stream ${stream.id} is not streaming ${stream.status}`);

        logger.info(`stream: ${JSON.stringify(stream.depositAmount)}`);

        continue;
      }

      logger.info("\n");

      logger.info(
        `===== stream: ${stream.id} ${i + 1}/${streams.length} =====`
      );

      logger.info(
        `stream from: ${stream.startTime.toISOString()} to ${stream.stopTime.toISOString()} status ${
          stream.status
        }  `
      );

      logger.debug(`stream: ${JSON.stringify(stream)}`);
      const tokenAddress = ethers.getAddress(stream.token.id);
      logger.info(`token: ${tokenAddress}`);

      let thatPrice: HistoryPrice | null = null;

      if (options.price == "oracle") {
        const coinID = coinIDs[tokenAddress as keyof typeof coinIDs];
        const price = getCache<HistoryPrice>(`price_oracle_${coinID}`);
        logger.info(`price: ${JSON.stringify(price)}`);
        thatPrice = price ?? null;
      } else {
        const price = getCache<HistoryPrice>(`price_history_${tokenAddress}`);
        thatPrice = price ?? null;
        logger.info(`price: ${JSON.stringify(price)}`);
        if (!price) {
          logger.error(`price not found for ${tokenAddress}`);
          continue;
        } else {
          logger.info(
            `${
              coinIDs[tokenAddress as keyof typeof coinIDs]
            } price: ${JSON.stringify(price)}`
          );
        }
      }

      if (!thatPrice) {
        logger.error(`price not found for ${tokenAddress}`);
        continue;
      }

      const streamdAmount = processStreamAmountByTime(
        todayUTC8Zero().toString(),
        stream.streamData,
        stream.status,
        "Incoming"
      );

      if (Number(streamdAmount) < 0.0001) {
        logger.info(
          ` streamdAmount ${streamdAmount} is less than 0.0001 , skip`
        );
        continue;
      }

      logger.info(
        `Streamed: ${stream.id} ${stream.token.name} ${streamdAmount}/${stream.depositAmount}  `
      );

      const streamUSD = thatPrice.price * Number(streamdAmount);

      logger.info(`streamUSD: ${streamUSD}`);

      const onePoint = streamUSD * point_per_day_usd;
      logger.info(`let's send ${onePoint} points to ${stream.sender}`);

      const fixedPoint = Math.floor(onePoint * 1000) / 1000;
      logger.info(`fixedPoint: ${fixedPoint}`);
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
