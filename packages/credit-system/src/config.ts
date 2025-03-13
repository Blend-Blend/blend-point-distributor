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

// wBTC：0xB5136FEba197f5fF4B765E5b50c74db717796dcD
// SAT: 0xF2692468666E459D87052f68aE474E36C1a34fbB
// bUSDT: 0xa67ed736649f2958a35fd249a584151056b4b745
// bUSDC: 0x915247bf09471922e2c6da6f69fc9114708e8a26
// bETH: 0x948def74953a18ebd854a5b015f63b0910be58cc

const calculateMapping: AssetMapping = {
  "0xa67ed736649f2958a35fd249a584151056b4b745": {
    symbol: "bUSDT",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0x915247bf09471922e2c6da6f69fc9114708e8a26": {
    symbol: "bUSDC",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0xf2692468666e459d87052f68ae474e36c1a34fbb": {
    symbol: "SAT",
    min_amount: 1,
    per_amount: 100,
    point_daily: 100,
  },
  "0x948def74953a18ebd854a5b015f63b0910be58cc": {
    symbol: "bETH",
    min_amount: 0.001,
    per_amount: 1,
    point_daily: 3000,
  },
  "0xb5136feba197f5ff4b765e5b50c74db717796dcd": {
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
