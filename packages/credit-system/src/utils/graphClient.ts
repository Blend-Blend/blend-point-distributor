import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import dotenv from "dotenv";

if (process.env.run_from == "third_party") {
} else {
  dotenv.config();
}

// https://github.com/microsoftgraph/msgraph-sdk-javascript
const getClient = (baseUrl: string, accessToken: string) => {
  console.log(`baseUrl: ${baseUrl}`);
  return new ApolloClient({
    uri: baseUrl,
    cache: new InMemoryCache(),
  });
};

export const defaultClient = getClient(
  process.env.graph_base || "",
  process.env.graph_token || ""
);

export const queryGraph = async (query: any, variables: any) => {
  return await defaultClient.query({
    query,
    variables,
    fetchPolicy: "network-only", // 禁用缓存
  });
};

export const supplieQuery = gql`
  query MyQuery($first: Int, $timestamp_gt: Int) {
    supplies(
      orderBy: timestamp
      orderDirection: asc
      first: $first
      where: { timestamp_gt: $timestamp_gt }
    ) {
      amount
      id
      timestamp
      user {
        id
      }
      reserve {
        underlyingAsset
        symbol
        decimals
      }
    }
  }
`;

export const redeemQuery = gql`
  query MyQuery($first: Int, $timestamp_gt: Int) {
    redeemUnderlyings(
      orderBy: timestamp
      orderDirection: asc
      first: $first
      where: { timestamp_gt: $timestamp_gt }
    ) {
      action
      amount
      id
      reserve {
        symbol
        underlyingAsset
        decimals
      }
      timestamp
      user {
        id
      }
    }
  }
`;
