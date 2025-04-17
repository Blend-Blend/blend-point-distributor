import NodeCache from "node-cache";

const cache = new NodeCache({
  stdTTL: 60 * 60,
  checkperiod: 10,
});

export const getCache = <T>(key: string): T | undefined => {
  return cache.get(key) as T | undefined;
};

export const setCache = (key: string, value: any, ttl = 60 * 60 * 24) => {
  cache.set(key, value, ttl);
};
