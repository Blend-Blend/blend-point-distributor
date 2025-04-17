import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { graghURL } from "./config";
import { todayUTC8Zero } from "./utils";

const client = new ApolloClient({
  uri: graghURL,
  cache: new InMemoryCache(),
});

interface Stream {
  id: string;
  sender: {
    id: string;
  };
  recipient: {
    id: string;
  };
  startTime: string;
  stopTime: string;
  interval: string;
  deposit: string;
  cliffAmount: string;
  token: {
    decimals: number;
    id: string;
    name: string;
    symbol: string;
  };
}

export const loadSendingStreams = async (
  currentTime: string | null | undefined = null
) => {
  const streams = [];

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

    const { data } = await client.query<{ streamLists: Stream[] }>({
      query: gql`
        query MyQuery($currentTime: String, $lastId: String) {
          streamLists(
            where: { stopTime_gt: $currentTime, id_gt: $lastId }
            orderBy: id
            orderDirection: asc
            first: $pageSize
          ) {
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
      variables: params,
    });

    streams.push(...data.streamLists);

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
