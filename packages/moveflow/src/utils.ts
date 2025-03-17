import fs from "fs";
import path from "path";
import pino from "pino";
import axios from "axios";
import { coinIDUSD, coingecko_token } from "./confit";

interface PriceResponse {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

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
      targets: [
        // Console output with colors
        {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
          level: "info",
        },
        // File output without colors
        {
          target: "pino-pretty",
          options: {
            destination: path.join(logDir, "log.txt"),
            colorize: false,
          },
          level: "info",
        },
      ],
    },
  });
};

const logger = getLogger();

export interface HistoryPrice {
  coinId: string;
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
      coinId: coinId,
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
      coinId: coinId,
      timestamp: prices[prices.length - 1][0],
      price: prices[prices.length - 1][1],
    };
  }
  return {
    coinId: coinId,
    timestamp: 0,
    price: 0,
  };
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
