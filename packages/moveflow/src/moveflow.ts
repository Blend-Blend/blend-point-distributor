import { ethers } from "ethers";
import fs from "fs";
import { coinIDs } from "./config";
import { loadStreams } from "./graph";
import { getLogger, sleep } from "./utils";
import { fetchCoingeckoPrice } from "./tokenHelper";

const logger = getLogger();

const csvFile = "moveflow.csv";

const main = async () => {
  const tokenListed: string[] = [];
  logger.info("start load streams ....");
  const streams = await loadStreams();
  logger.info(`load ${streams.length} streams`);

  for (const stream of streams) {
    const startTime = Number(stream.startTime);
    const token = stream.token;
    // if (tokenListed.includes(token.id)) {
    //   return;
    // }

    tokenListed.push(token.id);
    const formatTokenID = ethers.getAddress(token.id);
    logger.info(`${formatTokenID} ${token.name} ${token.symbol} ${startTime}`);
    const coinID = coinIDs[formatTokenID as keyof typeof coinIDs];

    logger.info(`coinID: ${coinID} `);

    // logger.info(`${token.id} ${token.name} ${token.symbol} ${startTime}`);
    const thatPrice = await fetchCoingeckoPrice(
      coinID,
      startTime - 3000,
      startTime
    );
    console.log(thatPrice);
    // logger.info(`${token.id} ${token.name} ${token.symbol} ${currentPrice}`);

    const streamUSD = thatPrice.price * Number(stream.depositAmount);
    logger.info(`${streamUSD} ${streamUSD}`);

    const streamSeconds = (Number(stream.stopTime) - startTime) / 1000;

    const csvItem = `${stream.id},${stream.sender},${streamUSD},${streamSeconds}`;
    fs.appendFileSync(csvFile, csvItem + "\n");
    console.log(csvItem);

    await sleep(1000);
  }
};

main();
