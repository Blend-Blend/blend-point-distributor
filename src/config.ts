import dotenv from "dotenv";

dotenv.config();

const calculateMappingTest = {
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

const calculateMapping = {
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
