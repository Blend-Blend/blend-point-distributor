import { ethers } from "ethers";
import {
  coingecko_token,
  coinIDBLEND,
  coinIDs,
  coinIDUSD,
  oracleAddress,
} from "./config";
import { protocalOracleABI } from "./abis";
import { getLogger } from "./utils";
import axios from "axios";

const logger = getLogger();

export const fetchOraclePrice = async (tokenId: string): Promise<number> => {
  const rpc_url = process.env.RPC_URL;
  const provider = new ethers.JsonRpcProvider(rpc_url);

  const coinID = coinIDs[tokenId as keyof typeof coinIDs];
  if (coinID == "usd") {
    return 1;
  }

  if (coinID == coinIDBLEND) {
    const now = Math.floor(Date.now() / 1000);
    const price = await fetchCoingeckoPrice(coinID, now - 3600 * 5, now);
    return price.price;
  }

  const contract = new ethers.Contract(
    oracleAddress,
    protocalOracleABI,
    provider
  );

  const price = await contract.getAssetPrice(tokenId);
  // logger.info(`oracle price : ${price}`);
  return Number(price) / 10 ** 8;
};

export interface HistoryPrice {
  coinId: string;
  timestamp: number;
  price: number;
}

interface PriceResponse {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
}

export const fetchCoingeckoPrice = async (
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
  logger.debug(`visit : ${url}`);
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
