import { getLogger } from "./utils/config";
import dotenv from "dotenv";
import { sendLarkMessage } from "./utils/lark";
import { Command } from "commander";
import { getCalculateMapping } from "./config";
import { PrismaClient } from "@prisma/client";
import Decimal from "decimal.js";

dotenv.config();
const logger = getLogger();
const db_client = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

// 获取积分倍率
const getRate = () => {
  const now = new Date();
  if (now >= new Date("2024-07-25") && now <= new Date("2024-08-25")) {
    return 3;
  }
  return 1;
};

const redeemAmount = async () => {
  const un_effected_redeem = await db_client.redeem.findMany({
    where: {
      effected: false,
    },
  });

  for (let redeem of un_effected_redeem) {
    logger.info("deal redeem : %s ", redeem.id);
    let redeem_amount = BigInt(redeem.amount);
    let txs: any[] = [];
    while (true) {
      const item = await db_client.supply.findFirst({
        where: {
          address: redeem.address,
          underlyingAsset: redeem.underlyingAsset,
          left_amount: {
            not: "0",
          },
        },
        orderBy: {
          timestamp: "asc",
        },
      });

      if (item) {
        let left_amount = BigInt(item.left_amount);
        if (redeem_amount < left_amount) {
          txs.push(
            db_client.supply.update({
              where: {
                id: item.id,
              },
              data: {
                left_amount: (left_amount - redeem_amount).toString(),
                changed: item.changed + 1,
              },
            })
          );
          redeem_amount = BigInt(0);
        } else {
          redeem_amount -= left_amount;
          txs.push(
            db_client.supply.update({
              where: {
                id: item.id,
              },
              data: {
                left_amount: "0",
                changed: item.changed + 1,
              },
            })
          );
        }
        if (redeem_amount === BigInt(0)) {
          break;
        }
      }
    }
    txs.push(
      db_client.redeem.update({
        where: {
          id: redeem.id,
        },
        data: {
          effected: true,
        },
      })
    );
    await db_client.$transaction(txs);
  }
};

const sendPoints = async () => {
  const calculateMapping = getCalculateMapping();
  const supplies = await db_client.supply.findMany({
    where: {
      left_amount: {
        not: "0",
      },
      timestamp: {
        lt: Math.floor(new Date().getTime() / 1000) - 86400,
      },
    },
  });

  for (let supply of supplies) {
    let assetAddress = supply.underlyingAsset.toLowerCase();
    let config = calculateMapping[assetAddress];
    if (config) {
      logger.info(
        "prepare send point with address: %s : asset :%s ",
        supply.address,
        supply.symbol
      );

      logger.info("current left_amount : %s", supply.left_amount);
      let realAmount = new Decimal(supply.left_amount).dividedBy(
        new Decimal(10 ** supply.decimals)
      );

      logger.info(
        "current left_amount : %f || %s  , %d ",
        realAmount,
        supply.left_amount,
        supply.decimals
      );

      if (Number(realAmount) < config.min_amount) {
        logger.warn("too less to give point : skip");
      } else {
        let point = realAmount
          .dividedBy(config.per_amount)
          .mul(config.point_daily * getRate());
        logger.info("send point : %s to -> %s", point, supply.address);

        await db_client.point.create({
          data: {
            address: supply.address,
            point_type: "supply",
            link_id: supply.id,
            point: Number(point),
            last_timestamp: Math.floor(new Date().getTime() / 1000),
          },
        });
      }
    } else {
      logger.info("no points config for asset skip %s ", assetAddress);
    }
  }
};

const calculateSummary = async () => {
  const summaryData = await db_client.point.groupBy({
    by: ["address", "point_type"],
    _sum: {
      point: true,
    },
  });

  const addressMap = new Map();

  summaryData.forEach((data: any) => {
    if (!addressMap.has(data.address)) {
      addressMap.set(data.address, {
        address: data.address,
        supply_points: 0,
        points: 0, // 总点数
      });
    }

    const addressData = addressMap.get(data.address);
    addressData.points += data._sum.point;

    if (data.point_type === "supply") {
      addressData.supply_points += data._sum.point;
    }
  });

  console.log(addressMap);

  let txs: any[] = [];
  for (const [address, data] of addressMap) {
    console.log(address, data.points, data.supply_points);
    txs.push(
      db_client.pointSummary.upsert({
        where: {
          address: address,
        },
        create: {
          address: address,
          rank: 0,
          supply_points: data.supply_points,
          points: data.points,
          last_timestamp: Math.floor(new Date().getTime() / 1000),
        },
        update: {
          rank: 0,
          points: data.points,
          supply_points: data.supply_points,
          last_timestamp: Math.floor(new Date().getTime() / 1000),
        },
      })
    );
  }
  await db_client.$transaction(txs);
};

const updateSummaryRank = async () => {
  const summaryData = await db_client.pointSummary.findMany({
    orderBy: {
      points: "desc",
    },
  });

  let txs: any[] = [];
  for (let i = 0; i < summaryData.length; i++) {
    txs.push(
      db_client.pointSummary.update({
        where: {
          address: summaryData[i].address,
        },
        data: {
          rank: i + 1,
        },
      })
    );
  }
  await db_client.$transaction(txs);
};

const main = async () => {
  const program = new Command();
  program.option("-t,--type <type>", "type of data to collect");
  program.parse(process.argv);
  const ops = program.opts();

  sendLarkMessage(`start calculate ${ops.type} data`);

  await redeemAmount();
  await sendPoints();
  await calculateSummary();
  await updateSummaryRank();
};

main().catch((err) => {
  logger.error(err);
});
