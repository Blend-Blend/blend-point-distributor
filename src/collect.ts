import { getLogger } from "./utils/config";
import dotenv from "dotenv";
import { sendLarkMessage } from "./utils/lark";
import { Command } from "commander";
import {
  sleep,
  writeProcesssedIndex,
  initConfig,
  readProcesssedIndex,
} from "./utils/markProcess";
import { queryGraph, redeemQuery, supplieQuery } from "./utils/graphClient";
import path from "path";
import { collectByType } from "./collector";
import { exit } from "process";

dotenv.config();

const logger = getLogger();
const sleepInterval = 10;
const page_len = 10;

const main = async () => {
  const program = new Command();
  program.option("-t,--type <type>", "type of data to collect");
  program.parse(process.argv);
  const ops = program.opts();

  sendLarkMessage(`start collect ${ops.type} data`);

  let query: any;
  if (ops.type == "supply") {
    initConfig(path.resolve(__dirname, "../runtime/supply.json"));
    query = supplieQuery;
  } else if (ops.type == "redeem") {
    initConfig(path.resolve(__dirname, "../runtime/redeem.json"));
    query = redeemQuery;
  } else {
    logger.fatal("type is not supported");
    exit(1);
  }

  while (true) {
    const last_time_stamp = readProcesssedIndex() || 0;
    logger.info(`query with timestamp_gt: ${last_time_stamp}`);
    const resp = await queryGraph(query, {
      first: page_len,
      timestamp_gt: last_time_stamp,
    });
    let { item_count, last_item } = (await collectByType(
      ops.type,
      resp
    )) as any;
    logger.info(`get ${item_count} items`);
    if (item_count == page_len) {
      logger.info(`write last item timestamp `);
      console.log(last_item);
      writeProcesssedIndex(last_item.timestamp);
    }
    logger.info(`sleep  ${sleepInterval}s `);
    await sleep(sleepInterval);
  }
};

main().catch((err) => {
  logger.error(err);
});
