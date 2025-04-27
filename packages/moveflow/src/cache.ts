import NodeCache from "node-cache";
import { getLogger } from "./utils";

const logger = getLogger();

const cache = new NodeCache({
  stdTTL: 60 * 60,
  checkperiod: 10,
});

export const getCache = <T>(key: string): T | undefined => {
  const value = cache.get(key);
  logger.info(`getCache: ${key} ${typeof value} ${value}`);
  return value as T | undefined;
};

export const setCache = (key: string, value: any, ttl = 60 * 60 * 24) => {
  cache.set(key, value, ttl);
};
