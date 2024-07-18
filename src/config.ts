import dotenv from "dotenv";

dotenv.config();

interface Asset {
  symbol: string;
  min_amount: number;
  per_amount: number;
  point_daily: number;
}

interface AssetMapping {
  [key: string]: Asset;
}

const calculateMappingTest: AssetMapping = {
  "0x7683b5ce24d4e8c73d58cfdb6dfaa9544bee7085": {
    symbol: "zUSDT",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0x16844215913179e413d312ea7d03bbeff4150c02": {
    symbol: "zUSDC",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0x3": {
    symbol: "SAT",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0xe56c67c952c42026bc331bc9d9725b16ddb21be2": {
    symbol: "zETH",
    min_amount: 0.001,
    per_amount: 1,
    point_daily: 3000,
  },
  "0x0d823ccfe7f70ac1ff0da1b943e9e043abcfbefd": {
    symbol: "BTC",
    min_amount: 0.0001,
    per_amount: 1,
    point_daily: 60000,
  },
};

const calculateMapping: AssetMapping = {
  "0x1": {
    symbol: "zUSDT",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0x2": {
    symbol: "zUSDC",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0x3": {
    symbol: "SAT",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0x4": {
    symbol: "zETH",
    min_amount: 0.001,
    per_amount: 1,
    point_daily: 3000,
  },
  "0x5": {
    symbol: "BTC",
    min_amount: 0.0001,
    per_amount: 1,
    point_daily: 60000,
  },
};

export const getCalculateMapping = () => {
  if (process.env.network === "testnet") {
    return calculateMappingTest;
  } else {
    return calculateMapping;
  }
};
