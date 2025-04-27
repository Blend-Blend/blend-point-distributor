import fs from "fs";
import path from "path";
import pino from "pino";
import moment from "moment-timezone";
let logger: pino.Logger | null = null;

export const getLogger = () => {
  if (logger) {
    return logger;
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const logDir = path.join(__dirname, "../logs", `${year}-${month}-${day}`);

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  const level = process.env.LOG_LEVEL || "info";

  logger = pino({
    level: level,
    transport: {
      targets: [
        // Console output with colors
        {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
          level: level,
        },
        // File output without colors
        {
          target: "pino-pretty",
          options: {
            destination: path.join(logDir, "log.txt"),
            colorize: false,
          },
          level: level,
        },
      ],
    },
  });

  return logger;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const timeSeconds = (diff: number) => {
  return Math.floor(Date.now() / 1000) + diff;
};

export const dayUTC8Zero = (year: number, month: number, day: number) => {
  const now = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
  return Math.floor(now.getTime() / 1000) - 3600 * 8;
};

export const todayUTC8Zero = () => {
  const now = new Date();
  return dayUTC8Zero(now.getFullYear(), now.getMonth() + 1, now.getDate());
};

export const formatDate = (timestamp: number) => {
  return moment(timestamp * 1000)
    .tz("Asia/Shanghai")
    .format("YYYY-MM-DD");
};
