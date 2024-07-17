import { getLogger } from "./utils/config";
import dotenv from "dotenv";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";
import { sendLarkMessage } from "./utils/lark";
import fs from "fs";
import { Command } from "commander";
import {
  sleep,
  writeProcesssedIndex,
  initConfig,
  readProcesssedIndex,
} from "./utils/markProcess";
import { queryGraph, redeemQuery, supplieQuery } from "./utils/graphClient";
import path from "path";

dotenv.config();

const logger = getLogger();
const sleepInterval = 5;
const page_len = 3;

const collectByType = (type: string, resp: any) => {
  if (type == "supplie") {
    resp.data.supplies.forEach((item: any) => {
      logger.info(`load item: ${item.timestamp}`);
    });
    return {
      item_count: resp.data.supplies.length,
      last_item: resp.data.supplies[resp.data.supplies.length - 1],
    };
  } else if (type == "redeem") {
    resp.data.redeemUnderlyings.forEach((item: any) => {
      logger.info(`load item: ${item.timestamp}`);
    });
    return {
      item_count: resp.data.redeemUnderlyings.length,
      last_item:
        resp.data.redeemUnderlyings[resp.data.redeemUnderlyings.length - 1],
    };
  } else {
    logger.fatal("type is not supported");
    return { item_count: 0, last_item: null };
  }
};

const main = async () => {
  const program = new Command();
  program.option("-t,--type <type>", "type of data to collect");
  program.parse(process.argv);
  const ops = program.opts();

  sendLarkMessage(`start collect ${ops.type} data`);

  let query: any;
  if (ops.type == "supplie") {
    initConfig(path.resolve(__dirname, "../runtime/supplie.json"));
    query = supplieQuery;
  } else if (ops.type == "redeem") {
    initConfig(path.resolve(__dirname, "../runtime/redeem.json"));
    query = redeemQuery;
  } else {
    logger.fatal("type is not supported");
  }

  while (true) {
    const last_time_stamp = readProcesssedIndex() || 0;
    logger.info(`query with timestamp_gt: ${last_time_stamp}`);
    const resp = await queryGraph(query, {
      first: page_len,
      timestamp_gt: last_time_stamp,
    });
    let { item_count, last_item } = collectByType(ops.type, resp);
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
