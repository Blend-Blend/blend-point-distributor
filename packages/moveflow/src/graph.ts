import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { graghURL } from "./config";
import { getLogger, todayUTC8Zero } from "./utils";
import { getStreamStatus } from "./streamStatus";
import BigNumber from "bignumber.js";
const client = new ApolloClient({
  uri: graghURL,
  cache: new InMemoryCache(),
});

const logger = getLogger();

interface Token {
  name: string;
  symbol: string;
  decimals: number;
  id: string;
}

interface Recipient {
  id: string;
}

interface OperationLog {
  id: string;
  type: string;
}

export interface StreamData {
  autoWithdraw: boolean;
  autoWithdrawInterval: number;
  cliffAmount: string;
  cliffDone: boolean;
  cliffTime: number;
  closeable: boolean;
  closed: boolean;
  createAt: number;
  deposit: string;
  feeBalance: string;
  id: string;
  interval: number;
  isPaused: boolean;
  lastWithdrawTime: number;
  recipient: Recipient;
  accPauseTime: number;
  stopTime: number;
  startTime: number;
  ratePerInterval: string;
  pauseable: boolean;
  pauseBy: string;
  pauseAt: number;
  withdrawnBalance: string;
  remainingBalance: string;
  recipientModifiable: boolean;
  token: Token;
  sender: Recipient;
  operationLog: OperationLog[];
}

export interface Stream {
  streamData: StreamData;
  hash: string;
  id: string;
  streamDirection: string;
  status: string;
  createTime: number;
  depositAmount: string;
  assetType: string;
  streamId: string;
  interval: number;
  last_withdraw_time: number;
  ratePerInterval: string;
  recipientId: string;
  remaining_amount: string;
  sender: string;
  stopTime: Date;
  startTime: Date;
  startDate: Date;
  streamedAmount: string;
  withdrawableAmount: string;
  withdrawnAmount: string;
  escrowAddress?: string;
  remark?: string;
  auto_withdraw: boolean;
  auto_withdraw_interval: number;
  cliff_amount: string;
  cliff_done: boolean;
  cliff_time: number;
  closed: boolean;
  unit: number;
  token: Token;
  pause_info: {
    stream_id: string;
    pause_at: string;
    acc_paused_time: string;
    pause_by: string;
    paused: boolean;
  };
  feature_info: {
    stream_id: string;
    closeable: string;
    pauseable: string;
    recipient_modifiable: string;
  };
  name?: string;
}

export const loadSendingStreams = async (
  currentTime: string | null | undefined = null
) => {
  const streams: Stream[] = [];

  let lastId = "0";
  let hasMore = true;
  let pageSize = 10;

  currentTime = currentTime ? currentTime : todayUTC8Zero().toString();

  while (hasMore) {
    const params = {
      currentTime,
      lastId,
      pageSize,
    };

    const { data } = await client.query({
      query: gql`
        query MyQuery($currentTime: String, $lastId: String) {
          streamLists(
            where: { stopTime_gt: $currentTime, id_gt: $lastId }
            orderBy: id
            orderDirection: asc
            first: $pageSize
          ) {
            autoWithdraw
            autoWithdrawInterval
            cliffAmount
            cliffDone
            cliffTime
            closeable
            closed
            createAt
            deposit
            feeBalance
            id
            interval
            isPaused
            lastWithdrawTime
            recipient {
              id
            }
            accPauseTime
            stopTime
            startTime
            ratePerInterval
            pauseable
            pauseBy
            pauseAt
            withdrawnBalance
            remainingBalance
            recipientModifiable
            token {
              name
              symbol
              decimals
              id
            }
            sender {
              id
            }
            operationLog {
              id
              type
            }
          }
        }
      `,
      variables: params,
    });

    const list: Stream[] = data.streamLists.map((item: StreamData) => {
      const streamStatus = getStreamStatus({
        closed: item.closed,
        isPaused: item.isPaused,
        startTime: item.startTime,
        stopTime: item.stopTime,
        pauseInfo: {
          paused: item.isPaused,
        },
      });

      const streamedAmount = 0;
      const hash = item.operationLog
        .find((item) => item.type === "create")
        ?.id.split("-")[0];

      return {
        streamData: item,
        ...item,
        token: item.token,
        id: item.id,
        hash,
        streamDirection: "Incoming",
        status: streamStatus,
        createTime: item.createAt,
        depositAmount: item.deposit,
        assetType: item.token.symbol,
        streamId: item.id,
        interval: item.interval,
        last_withdraw_time: item.lastWithdrawTime,
        ratePerInterval: item.ratePerInterval,
        recipientId: item.recipient.id,
        remaining_amount: item.remainingBalance,
        sender: item.sender.id,
        stopTime: new Date(Number(item.stopTime) * 1000),
        startTime: new Date(Number(item.startTime) * 1000),
        startDate: new Date(Number(item.startTime) * 1000),
        streamedAmount,
        withdrawableAmount: "0",
        withdrawnAmount: item.withdrawnBalance,
        escrowAddress: undefined,
        remark: undefined,
        auto_withdraw: item.autoWithdraw,
        auto_withdraw_interval: item.autoWithdrawInterval,
        cliff_amount: item.cliffAmount,
        cliff_done: item.cliffDone,
        cliff_time: item.cliffTime,
        closed: item.closed,
        unit: item.token.decimals,
        pause_info: {
          stream_id: item.id,
          pause_at: item.pauseAt,
          acc_paused_time: item.accPauseTime,
          pause_by: item.pauseBy,
          paused: item.isPaused,
        },
        feature_info: {
          stream_id: item.id,
          closeable: item.closeable,
          pauseable: item.pauseable,
          recipient_modifiable: item.recipientModifiable,
        },
      };
    });

    streams.push(...list);

    if (data.streamLists.length < pageSize) {
      hasMore = false;
    } else {
      lastId = data.streamLists[data.streamLists.length - 1].id;
    }
  }

  return streams;
};

export const loadStreams = async () => {
  const { data } = await client.query<{ streamLists: Stream[] }>({
    query: gql`
      query MyQuery {
        streamLists(orderBy: id, orderDirection: desc, first: 100) {
          id
          sender {
            id
          }
          recipient {
            id
          }
          startTime
          stopTime
          interval
          deposit
          cliffAmount
          token {
            decimals
            id
            name
            symbol
          }
        }
      }
    `,
  });

  // console.log(data.streamLists);
  return data.streamLists;
};

export const processStreamAmountByTime = (
  currentTime: string,
  item: StreamData,
  streamStatus: string,
  direction: "Incoming" | "Outgoing"
) => {
  return getCurTimeStreamedByTime(currentTime, {
    id: item.id,
    depositAmount: item.deposit,
    streamId: item.id,
    interval: item.interval,
    ratePerInterval: item.ratePerInterval,
    startTime: new Date(Number(item.startTime) * 1000),
    stopTime: new Date(Number(item.stopTime) * 1000),
    remaining_amount: item.remainingBalance,
    withdrawnAmount: item.withdrawnBalance,
    streamDirection: direction,
    status: streamStatus,
    createTime: item.createAt,
    last_withdraw_time: item.lastWithdrawTime,
    assetType: item.token.symbol,
    recipientId: item.recipient.id,
    sender: item.sender.id,
    streamedAmount: "0", // Initial placeholder
    withdrawableAmount: "0", // Initial placeholder
    escrowAddress: undefined,
    remark: undefined,
    auto_withdraw: item.autoWithdraw,
    auto_withdraw_interval: item.autoWithdrawInterval,
    cliff_amount: item.cliffAmount,
    cliff_done: item.cliffDone,
    cliff_time: item.cliffTime,
    closed: item.closed,
    unit: item.token.decimals,
    pause_info: {
      stream_id: item.id,
      pause_at: item.pauseAt,
      acc_paused_time: item.accPauseTime,
      pause_by: item.pauseBy,
      paused: item.isPaused,
    },
    feature_info: {
      stream_id: item.id,
      closeable: item.closeable,
      pauseable: item.pauseable,
      recipient_modifiable: item.recipientModifiable,
    },
    name: item.id, // Default to id, will be updated with title later
  });
};

const getCurTimeStreamedByTime = (currentTime: string, stream: any) => {
  const lastTime =
    Number(
      calculateLastUnlockDate(
        new Date(stream.startTime)?.getTime() ?? 0,
        parseInt(stream.interval?.toString() ?? 0),
        new Date(stream.stopTime)?.getTime() ?? 0
      )
    ) / 1000;

  const curTime = currentTime;
  let startTime = (new Date(stream.startTime)?.getTime() / 1000).toString();
  const endTime = (new Date(stream.stopTime)?.getTime() / 1000).toString();
  let cliff_amount = stream.cliff_amount;

  if (startTime && curTime < startTime) {
    logger.info(
      `stream not started yet , will begin in ${startTime} - ${curTime} = ${
        Number(startTime) - Number(curTime)
      } seconds `
    );
    return "0";
  }

  if (stream.status === "Paused" || stream.status === "Canceled") {
    logger.info(`stream ${stream.id} is ${stream.status}`);
    return "0";
  }

  if (stream.last_withdraw_time) {
    // Safely handle acc_paused_time by providing a default of 0
    const accPausedTime = stream.pause_info?.acc_paused_time ?? "0";
    startTime = BigNumber(stream.last_withdraw_time)
      .plus(accPausedTime)
      .toString();
  }

  if (endTime && curTime > endTime) {
    logger.info(`stream ended`);
    return stream.depositAmount;
  }

  if (parseFloat(stream.withdrawnAmount) > 0) {
    cliff_amount = stream.withdrawnAmount;
  }

  const curTimeBN = new BigNumber(lastTime);
  const startTimeBN = new BigNumber(startTime ?? "0");
  const intervalBN = new BigNumber(stream.interval);
  const ratePerIntervalBN = new BigNumber(
    parseFloat(stream.ratePerInterval) / (stream.unit ?? 1)
  );
  const cliffAmountBN = new BigNumber(cliff_amount);

  let timeElapsed = curTimeBN.minus(startTimeBN);
  if (Number(timeElapsed) < 0) {
    timeElapsed = BigNumber(0);
  }
  const periods = timeElapsed.dividedBy(intervalBN);
  const earned = periods.times(ratePerIntervalBN);
  logger.info(`earned: ${earned.toString()}`);
  return cliffAmountBN.plus(earned).toString();
};

export const calculateLastUnlockDate = (
  startTime: number, // expected to be in milliseconds
  intervalInSeconds: number, // interval specified in seconds
  endTime: number // end time in milliseconds
): string => {
  const startTimeInSeconds = startTime / 1000;
  const endTimeInSeconds = endTime / 1000;
  const currentTime = Math.floor(Date.now() / 1000);

  // Rest of the function remains the same...
  if (currentTime < startTimeInSeconds) {
    return startTime.toString();
  }

  const elapsed = currentTime - startTimeInSeconds;
  const intervalsPassed = Math.floor(elapsed / intervalInSeconds);
  let lastUnlockTimeInSeconds = startTimeInSeconds;

  if (intervalsPassed > 0) {
    lastUnlockTimeInSeconds =
      startTimeInSeconds + intervalsPassed * intervalInSeconds;
  }

  if (lastUnlockTimeInSeconds > endTimeInSeconds) {
    lastUnlockTimeInSeconds = endTimeInSeconds;
  }

  return (lastUnlockTimeInSeconds * 1000).toString();
};
