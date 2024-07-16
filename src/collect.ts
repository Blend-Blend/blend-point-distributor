import { ApolloServer } from "@apollo/server";
import { getLogger } from "./utils/config";
import dotenv from "dotenv";
import { GraphQLError } from "graphql";
import { resolvers, typeDefs } from "./graph";
import { PrismaClient } from "@prisma/client";
import { MyContext } from "./utils/context";
import cors from "cors";
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { sendLarkMessage } from "./utils/lark";
import fs from "fs";
import { queryGraph } from "./utils/graphClient";

const logger = getLogger();
const main = async () => {
  while (true) {
    const query = `
    query MyQuery {
  supplies(orderBy: timestamp, orderDirection: desc, skip: 0) { 
    timestamp
  }
}
    `;
    const data = await queryGraph(query);
    console.log(data);
    break;
  }
};

main().catch((err) => {
  logger.error(err);
});
