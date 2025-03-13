import { ethers } from "ethers";
import { coinIDs, oracleAddress } from "./config";
import { protocalOracleABI } from "./abis";

export const fetchOraclePrice = async (tokenId: string): Promise<number> => {
  const rpc_url = process.env.RPC_URL;
  const provider = new ethers.JsonRpcProvider(rpc_url);

  const coinID = coinIDs[tokenId as keyof typeof coinIDs];
  if (coinID == "usd") {
    return 1;
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
