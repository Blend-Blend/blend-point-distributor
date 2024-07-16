import { Client } from "@microsoft/microsoft-graph-client";
import dotenv from "dotenv";

if (process.env.run_from == "third_party") {
} else {
  dotenv.config();
}

// https://github.com/microsoftgraph/msgraph-sdk-javascript
const getClient = (baseUrl: string, accessToken: string) => {
  console.log(`baseUrl: ${baseUrl}`);
  return Client.init({
    baseUrl,
    authProvider: (done) => {
      done(null, accessToken);
    },
  });
};

export const defaultClient = getClient(
  process.env.graph_base || "",
  process.env.graph_token || ""
);

export const queryGraph = async (query: string) => {
  return await defaultClient.api("").post({ query });
};
