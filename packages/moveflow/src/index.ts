import { Command } from "commander";
import { coinIDs } from "./config";
import { loadSendingStreams } from "./graph";
import { dayUTC8Zero, fetchPrice, getLogger, todayUTC8Zero } from "./utils";
import { fetchHistoryPriceCache, fetchOraclePriceCache } from "./point";
const program = new Command();
const logger = getLogger();

program.command("send-today").action(async () => {
  logger.info("send today moveflow potins...");
});

program.command("send-history").action(async () => {});

program
  .command("load-price")
  .option("-o, --oracle", "load oracle price")
  .action(async (options: { oracle: boolean }) => {
    logger.info("load oracle price...");
    if (options.oracle) {
      await fetchOraclePriceCache();
    } else {
      await fetchHistoryPriceCache(todayUTC8Zero());
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
