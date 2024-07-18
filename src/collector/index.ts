import { PrismaClient } from "@prisma/client";
import { getLogger } from "../utils/config";
import dotenv from "dotenv";
import { exit } from "process";
import { sleep } from "../utils/markProcess";

dotenv.config();
const logger = getLogger();

const db_client = new PrismaClient();

const executeTxs = async (input: any, tag: String = "writeStreamRetry:") => {
  let count = 0;
  const maxTries = 3000;
  while (true) {
    try {
      await db_client.$transaction(input);
      break;
    } catch (e) {
      // handle exception
      logger.error(`%s: retry for the ${count} times. \n err： %s `, tag, e);
      await sleep(count);
      if (++count == maxTries) throw e;
    }
  }
};

const saveSupply = async (resp: any) => {
  let txs: any[] = [];
  resp.data.supplies.forEach((item: any) => {
    logger.info(`load item: ${item.timestamp}`);
    logger.info(item);
    let tx = db_client.supply.upsert({
      where: {
        id: item.id,
      },
      create: {
        id: item.id,
        address: item.user.id,
        underlyingAsset: item.reserve.underlyingAsset,
        symbol: item.reserve.symbol,
        decimals: item.reserve.decimals,
        amount: item.amount,
        left_amount: item.amount,
        timestamp: item.timestamp,
      },
      update: {
        address: item.user.id,
        underlyingAsset: item.reserve.underlyingAsset,
        symbol: item.reserve.symbol,
        decimals: item.reserve.decimals,
        timestamp: item.timestamp,
      },
    });
    txs.push(tx);
  });

  await executeTxs(txs, "save:supply");

  return {
    item_count: resp.data.supplies.length,
    last_item: resp.data.supplies[resp.data.supplies.length - 1],
  };
};

const saveRedeem = async (resp: any) => {
  let txs: any[] = [];
  resp.data.redeemUnderlyings.forEach((item: any) => {
    logger.info(`load item: ${item.timestamp}`);
    let tx = db_client.redeem.upsert({
      where: {
        id: item.id,
      },
      create: {
        id: item.id,
        address: item.user.id,
        underlyingAsset: item.reserve.underlyingAsset,
        symbol: item.reserve.symbol,
        decimals: item.reserve.decimals,
        amount: item.amount,
        timestamp: item.timestamp,
      },
      update: {
        address: item.user.id,
        underlyingAsset: item.reserve.underlyingAsset,
        symbol: item.reserve.symbol,
        decimals: item.reserve.decimals,
        timestamp: item.timestamp,
      },
    });
    txs.push(tx);
  });
  await executeTxs(txs, "save:supply");
  return {
    item_count: resp.data.redeemUnderlyings.length,
    last_item:
      resp.data.redeemUnderlyings[resp.data.redeemUnderlyings.length - 1],
  };
};

export const collectByType = async (type: string, resp: any) => {
  if (type == "supply") {
    return saveSupply(resp);
  } else if (type == "redeem") {
    return await saveRedeem(resp);
  } else {
    logger.fatal("type is not supported");
    exit(1);
  }
};
