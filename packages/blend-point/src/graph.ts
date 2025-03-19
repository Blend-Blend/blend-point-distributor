import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
  gql,
} from "@apollo/client/core";
import { getLogger, sleep } from "./utils";
import fs from "fs";
const logger = getLogger();
import { graphUrl } from "./config";

interface User {
  user: {
    id: string;
  };
  lastUpdateTimestamp: number;
}

interface UserReserve {
  user: {
    id: string;
  };
  reserve: {
    underlyingAsset: string;
    name: string;
    bToken: {
      id: string;
    };
    decimals: number;
  };
  bTokenBalanceHistory: {
    timestamp: number;
    currentBTokenBalance: string;
    scaledBTokenBalance: string;
  }[];
  vTokenBalanceHistory: {
    timestamp: number;
    currentVariableDebt: string;
    scaledVariableDebt: string;
  }[];
  lastUpdateTimestamp: number;
}

const getClient = (baseUrl: string) => {
  logger.info(`baseUrl: ${baseUrl}`);
  return new ApolloClient({
    uri: baseUrl,
    cache: new InMemoryCache(),
  });
};

// Create an Apollo Client instance
const client = getClient(graphUrl);

export const getUserTokenReserve = gql`
  query GetUserReserves($user: String!, $token: String!, $timestamp: Int!) {
    userReserves(
      where: { user_: { id: $user }, reserve_: { underlyingAsset: $token } }
    ) {
      user {
        id
      }
      bTokenBalanceHistory(
        first: 1
        orderBy: timestamp
        orderDirection: desc
        where: { timestamp_lt: $timestamp }
      ) {
        timestamp
        currentBTokenBalance
        scaledBTokenBalance
      }
      vTokenBalanceHistory(
        first: 1
        orderBy: timestamp
        orderDirection: desc
        where: { timestamp_lt: $timestamp }
      ) {
        timestamp
        currentVariableDebt
        scaledVariableDebt
      }
      lastUpdateTimestamp
    }
  }
`;

export const queryGraph = async <T>(
  query: any,
  variables: any
): Promise<ApolloQueryResult<T>> => {
  return await client.query<T>({
    query,
    variables,
    fetchPolicy: "network-only", // 禁用缓存
  });
};

// // Function to fetch and export data
// async function fetchDataAndExport() {
//   try {
//     let lastTimestamp = 0;
//     let hasMoreData = true;

//     while (hasMoreData) {
//       // Fetch data using Apollo Client
//       const result = await queryGraph(GET_USER_RESERVES, {
//         first: 100,
//         before: lastTimestamp,
//       });

//       const userReserves = result.data.userReserves as UserReserve[];

//       if (userReserves.length === 0) {
//         hasMoreData = false;
//         break;
//       }

//       // Export data (e.g., print to console)
//       //
//       logger.info(`userReserves: ${userReserves.length} dumped!!`);

//       for (let reserve of userReserves) {
//         logger.info(`=========== userAddress: ${reserve.user.id} ============`);
//         let reserveName = reserve.reserve.name;
//         let reserveAddress = reserve.reserve.bToken.id;
//         let reserveDecimals = reserve.reserve.decimals;
//         let bTokenBalanceHistory = reserve.bTokenBalanceHistory;
//         let vTokenBalanceHistory = reserve.vTokenBalanceHistory;

//         logger.info(`reserveName: ${reserveName}`);
//         logger.info(`reserveAddress: ${reserveAddress}`);
//         logger.info(`reserveDecimals: ${reserveDecimals}`);
//         logger.info(`bTokenBalanceHistory: ${bTokenBalanceHistory.length}`);
//         logger.info(`vTokenBalanceHistory: ${vTokenBalanceHistory.length}`);
//       }

//       // Update the lastTimestamp for the next batch
//       lastTimestamp = userReserves[userReserves.length - 1].lastUpdateTimestamp;
//       let formattedLastTimestamp = new Date(lastTimestamp * 1000).toISOString();
//       logger.info(`lastTimestamp: ${formattedLastTimestamp}`);
//     }

//     logger.info("Data export completed.");
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchDataAndExport();

const GET_USER = gql`
  query GetUserReserves($first: Int, $before: Int) {
    userReserves(
      first: $first
      orderBy: lastUpdateTimestamp
      orderDirection: asc
      where: { lastUpdateTimestamp_gt: $before }
    ) {
      user {
        id
      }
      lastUpdateTimestamp
    }
  }
`;

export const loadUsers = () => {
  try {
    const users = fs.readFileSync("users.json", "utf8");
    return JSON.parse(users);
  } catch (error) {
    return [];
  }
};

// Function to fetch and export data
export async function fetchUsers() {
  try {
    let lastTimestamp = 0;
    let hasMoreData = true;
    const users = loadUsers();

    while (hasMoreData) {
      // Fetch data using Apollo Client
      const result = await queryGraph<{ userReserves: User[] }>(GET_USER, {
        first: 300,
        before: lastTimestamp,
      });

      const userReserves = result.data.userReserves as User[];

      if (userReserves.length === 0) {
        hasMoreData = false;
        break;
      }

      // Export data (e.g., print to console)
      //
      logger.info(`userReserves: ${userReserves.length} dumped!!`);

      for (let user of userReserves) {
        if (users.indexOf(user.user.id) === -1) {
          users.push(user.user.id);
        }
      }

      // Update the lastTimestamp for the next batch
      lastTimestamp = userReserves[userReserves.length - 1].lastUpdateTimestamp;
      let formattedLastTimestamp = new Date(lastTimestamp * 1000).toISOString();
      logger.info(`lastTimestamp: ${formattedLastTimestamp}`);

      await sleep(2000);
    }

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    logger.info("Data export completed.");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export const getUserReserve = async (
  user: string,
  token: string,
  historyTimeStamp: number
): Promise<UserReserve[]> => {
  try {
    const result = await queryGraph<{
      userReserves: UserReserve[];
    }>(getUserTokenReserve, {
      user,
      token,
      timestamp: historyTimeStamp,
    });
    return result.data.userReserves;
  } catch (error) {
    logger.error(`getUserReserve error: ${error}`);
    await sleep(3000);
    return getUserReserve(user, token, historyTimeStamp);
  }
};

// fetchUsers();
