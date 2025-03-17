import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const graghURL =
  "https://api.goldsky.com/api/public/project_cm040smxin6ju01x481kh0o8l/subgraphs/stream-edu/1.0.1/gn";

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
