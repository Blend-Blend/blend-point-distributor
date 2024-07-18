import { getLogger } from "./utils/config";
import dotenv from "dotenv";
import { sendLarkMessage } from "./utils/lark";
import { Command } from "commander";
import { getCalculateMapping } from "./config";

dotenv.config();

const logger = getLogger();

// 获取积分倍率
const getRate = () => {
  const now = new Date();
  if (now >= new Date("2024-07-25") && now <= new Date("2024-08-25")) {
    return 3;
  }
  return 1;
};

const main = async () => {
  const program = new Command();
  program.option("-t,--type <type>", "type of data to collect");
  program.parse(process.argv);
  const ops = program.opts();

  sendLarkMessage(`start calculate ${ops.type} data`);
  const calculateMapping = getCalculateMapping();
  console.log(calculateMapping);
};

main().catch((err) => {
  logger.error(err);
});
