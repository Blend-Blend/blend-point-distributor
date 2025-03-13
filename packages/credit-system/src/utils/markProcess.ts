import path from "path";
import fs from "fs";
import { getLogger } from "./config";
const logger = getLogger();

let configFil = path.resolve(__dirname, "../../config/config.json");

export const initConfig = (path: string) => {
  logger.info("config file path : %s ", path);
  configFil = path;
};

export const readProcesssedIndex = (): number => {
  const config = require(configFil);
  return config.processed_index;
};

export const sleep = async (seconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const writeProcesssedIndex = (index: number) => {
  const config = require(configFil);
  config.processed_index = index;
  const data = JSON.stringify(config, null, 4);
  fs.writeFile(configFil, data, (error: any) => {
    if (error) {
      console.error("writeProcesssedHeight error", index, error);
      throw error;
    }
    console.log("writeProcesssedHeight correct, index: ", index);
  });
};
