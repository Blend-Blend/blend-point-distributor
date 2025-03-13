import pino from "pino";
import { coingecko_token, coinIDUSD } from "./config";
import axios from "axios";
import moment from "moment-timezone";

interface PriceResponse {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

import fs from "fs";
import path from "path";

export const getLogger = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const logDir = path.join(__dirname, "../logs", `${year}-${month}-${day}`);

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  return pino({
    level: "info",
    transport: {
      target: "pino-pretty",
      options: {
        destination: path.join(logDir, "log.txt"),
        colorize: false,
      },
    },
  });
};

const logger = getLogger();

export interface HistoryPrice {
  timestamp: number;
  price: number;
}

export const fetchPrice = async (
  coinId: string,
  from: number,
  to: number
): Promise<HistoryPrice> => {
  if (coinId == coinIDUSD) {
    return {
      timestamp: to,
      price: 1,
    };
  }

  // https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1741237901&to=1741238501
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`;
  logger.info(`visit : ${url}`);
  const response = await axios.get(url, {
    headers: {
      "x-cg-demo-api-key": coingecko_token,
      accept: "application/json",
    },
  });
  const data = response.data as PriceResponse;
  if (data.prices.length != 0) {
    let prices = data.prices.sort((a, b) => a[0] - b[0]);
    return {
      timestamp: prices[prices.length - 1][0],
      price: prices[prices.length - 1][1],
    };
  }
  return {
    timestamp: 0,
    price: 0,
  };
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

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatDate = (timestamp: number) => {
  return moment(timestamp * 1000)
    .tz("Asia/Shanghai")
    .format("YYYY-MM-DD");
};
