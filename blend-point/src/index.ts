import { getCache } from "./cache";
import { fetchUsers, getUserReserve, loadUsers } from "./graph";
import {
  dayUTC8Zero,
  getLogger,
  todayUTC8Zero,
  HistoryPrice,
  sleep,
  formatDate,
} from "./utils";
import dotenv from "dotenv";
import { Command } from "commander";
import { coinIDs, tokenDecimals } from "./config";
import { PrismaClient } from "@prisma/client";
import {
  calculatePoint,
  UserReserveUSD,
  fetchHistoryPriceCache,
  tokens,
  fetchOraclePriceCache,
} from "./point";

dotenv.config();
const program = new Command();
program.name("blend-point-cli").description("blend point cli").version("1.0.0");
const logger = getLogger();
const dbClient = new PrismaClient();

program
  .command("send-history")
  .description("send history point to users")
  .option("-m, --month <month>", "month")
  .option("-d, --day <day>", "day")
  .action(async ({ month, day }: { month: number; day: number }) => {
    const historyTimeStamp = dayUTC8Zero(2025, month, day);
    logger.info(`historyTimeStamp: ${historyTimeStamp}`);
    await fetchHistoryPriceCache(historyTimeStamp);
    const users = loadUsers();
    for (let user of users) {
      const userReserveUSD: UserReserveUSD = {
        id: user,
        stakeAmount: 0,
        debtAmount: 0,
      };
      for (let token of tokens) {
        const coinID = coinIDs[token as keyof typeof coinIDs];
        const price = getCache<HistoryPrice>(
          `price_history_${token}`
        ) as HistoryPrice;
        logger.info(`history price: ${price}`);
        const userReserves = await getUserReserve(
          user,
          token,
          historyTimeStamp
        );
        if (userReserves.length > 0) {
          const userReserve = userReserves[0];
          const btoken = userReserve.bTokenBalanceHistory;
          const vtoken = userReserve.vTokenBalanceHistory;
          // stake
          if (btoken.length > 0) {
            const tokenAmount =
              parseFloat(btoken[0].scaledBTokenBalance) /
              10 ** tokenDecimals[token as keyof typeof tokenDecimals];
            logger.info(`stakeAmount: ${tokenAmount} ${token} ${coinID}`);
            userReserveUSD.stakeAmount += tokenAmount * price.price;
          }
          // debt
          if (vtoken.length > 0) {
            const tokenAmount =
              parseFloat(vtoken[0].scaledVariableDebt) /
              10 ** tokenDecimals[token as keyof typeof tokenDecimals];
            logger.info(`debtAmount: ${tokenAmount} ${token} ${coinID}`);
            userReserveUSD.debtAmount += tokenAmount * price.price;
          }
        } else {
          logger.info(`no ${token} reserve`);
        }
      }

      logger.info(`========== let's send point to ${user} ==========`);
      logger.info(`stakeAmount: ${userReserveUSD.stakeAmount}`);
      logger.info(`debtAmount: ${userReserveUSD.debtAmount}`);

      const {
        totalPoint,
        yuzuTotalPoint,
        blendLend,
        blendBorrow,
        yuzuLend,
        yuzuBorrow,
      } = calculatePoint(userReserveUSD);

      try {
        await dbClient.dailyPoint.create({
          data: {
            user_id: user,
            blend_point: totalPoint,
            yuzu_point: yuzuTotalPoint,
            stake_usd: userReserveUSD.stakeAmount,
            debt_usd: userReserveUSD.debtAmount,
            send_date: formatDate(historyTimeStamp),
            blend_lend: blendLend,
            blend_borrow: blendBorrow,
            yuzu_lend: yuzuLend,
            yuzu_borrow: yuzuBorrow,
          },
        });
      } catch (error) {}

      logger.info(
        `>>>>>> ${user} stake: ${userReserveUSD.stakeAmount} debt: ${
          userReserveUSD.debtAmount
        } blend: ${totalPoint} yuzu: ${yuzuTotalPoint} ${formatDate(
          historyTimeStamp
        )}`
      );
    }
  });

program
  .command("send-today")
  .description("send today point to users")
  .action(async () => {
    await fetchUsers();
    const historyTimeStamp = todayUTC8Zero();
    await fetchOraclePriceCache();
    const users = loadUsers();

    for (let i = 0; i < users.length; i += 1) {
      const user = users[i];
      let userReserveUSD: UserReserveUSD = {
        id: user,
        stakeAmount: 0,
        debtAmount: 0,
      };
      logger.info(` deal with  user: ${user} `);

      for (let token of tokens) {
        const coinID = coinIDs[token as keyof typeof coinIDs];
        const price = getCache<number>(`price_oracle_${token}`) as number;
        const userReserves = await getUserReserve(
          user,
          token,
          historyTimeStamp
        );
        if (userReserves.length > 0) {
          const userReserve = userReserves[0];
          const btoken = userReserve.bTokenBalanceHistory;
          const vtoken = userReserve.vTokenBalanceHistory;
          // stake
          if (btoken.length > 0) {
            const tokenAmount =
              parseFloat(btoken[0].scaledBTokenBalance) /
              10 ** tokenDecimals[token as keyof typeof tokenDecimals];
            logger.info(`stakeAmount: ${tokenAmount} ${token} ${coinID}`);
            userReserveUSD.stakeAmount += tokenAmount * price;
          }
          // debt
          if (vtoken.length > 0) {
            const tokenAmount =
              parseFloat(vtoken[0].scaledVariableDebt) /
              10 ** tokenDecimals[token as keyof typeof tokenDecimals];
            logger.info(`debtAmount: ${tokenAmount} ${token} ${coinID}`);
            userReserveUSD.debtAmount += tokenAmount * price;
          }
        } else {
          logger.info(`no ${token} reserve`);
        }
      }

      logger.info(`========== let's send point to ${user} ==========`);
      logger.info(`stakeAmount: ${userReserveUSD.stakeAmount}`);
      logger.info(`debtAmount: ${userReserveUSD.debtAmount}`);

      const {
        totalPoint,
        yuzuTotalPoint,
        blendLend,
        blendBorrow,
        yuzuLend,
        yuzuBorrow,
      } = calculatePoint(userReserveUSD);

      try {
        await dbClient.dailyPoint.create({
          data: {
            user_id: user,
            blend_point: totalPoint,
            yuzu_point: yuzuTotalPoint,
            stake_usd: userReserveUSD.stakeAmount,
            debt_usd: userReserveUSD.debtAmount,
            send_date: formatDate(historyTimeStamp),
            blend_lend: blendLend,
            blend_borrow: blendBorrow,
            yuzu_lend: yuzuLend,
            yuzu_borrow: yuzuBorrow,
          },
        });
      } catch (error) {}

      logger.info(
        `>>>>>> ${user} stake: ${userReserveUSD.stakeAmount} debt: ${
          userReserveUSD.debtAmount
        } blend: ${totalPoint} yuzu: ${yuzuTotalPoint} ${formatDate(
          historyTimeStamp
        )}`
      );

      await sleep(100);
    }

    const summary = await dbClient.dailyPoint.groupBy({
      by: ["user_id"],
      _sum: {
        blend_point: true,
        yuzu_point: true,
        blend_lend: true,
        blend_borrow: true,
        yuzu_lend: true,
        yuzu_borrow: true,
      },
    });

    for (let item of summary) {
      await dbClient.userSummary.upsert({
        where: { user_id: item.user_id },
        create: {
          user_id: item.user_id,
          blend_point: item._sum.blend_point ?? 0,
          yuzu_point: item._sum.yuzu_point ?? 0,
          blend_lend: item._sum.blend_lend ?? 0,
          blend_borrow: item._sum.blend_borrow ?? 0,
          yuzu_lend: item._sum.yuzu_lend ?? 0,
          yuzu_borrow: item._sum.yuzu_borrow ?? 0,
        },
        update: {
          blend_point: item._sum.blend_point ?? 0,
          yuzu_point: item._sum.yuzu_point ?? 0,
          blend_lend: item._sum.blend_lend ?? 0,
          blend_borrow: item._sum.blend_borrow ?? 0,
          yuzu_lend: item._sum.yuzu_lend ?? 0,
          yuzu_borrow: item._sum.yuzu_borrow ?? 0,
        },
      });
    }
  });

const main = async () => {
  program.parse(process.argv);
};

main();
