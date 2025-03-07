export const coingecko_token = "CG-meDzc6tbX3crBh4XRDjunyZi";
export const oracleAddress = "0x2186a6cEe4CBbde6a9E16E44C4d615f86A913DE7";

export const graphUrl =
  "https://api.goldsky.com/api/public/project_cm040smxin6ju01x481kh0o8l/subgraphs/blend-edu/1.0.1/gn";

export const coinIDEDU = "edu-coin";
export const coinIDETH = "ethereum";
export const coinIDBitcoin = "bitcoin";
export const coinIDUSD = "usd";

export const USDC_ADDRESS = "0x836d275563bAb5E93Fd6Ca62a95dB7065Da94342";
export const USDT_ADDRESS = "0x7277Cc818e3F3FfBb169c6Da9CC77Fc2d2a34895";
export const WBTC_ADDRESS = "0xAC0313F97398b585F23F8E50952F10d62350697C";
export const WEDU_ADDRESS = "0xd02E8c38a8E3db71f8b2ae30B8186d7874934e12";
export const WETH_ADDRESS = "0xa572BF655F61930B6f0d4546A67cD1376220081a";

export const tokenDecimals = {
  [USDC_ADDRESS]: 6,
  [USDT_ADDRESS]: 6,
  [WBTC_ADDRESS]: 8,
  [WEDU_ADDRESS]: 18,
  [WETH_ADDRESS]: 18,
};

export const coinIDs = {
  [USDC_ADDRESS]: coinIDUSD,
  [USDT_ADDRESS]: coinIDUSD,
  [WBTC_ADDRESS]: coinIDBitcoin,
  [WEDU_ADDRESS]: coinIDEDU,
  [WETH_ADDRESS]: coinIDETH,
};

// 存取1美元每天积分
const btokenPointRatePerDay = 1 / 90;
const vtokenPointRatePerDay = 1.5 / 90;
