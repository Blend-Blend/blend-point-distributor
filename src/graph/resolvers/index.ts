import { GraphQLScalarType } from "graphql";
import { Hello, StreamUpdate, Headers, validate } from "./default";

export const resolvers = {
  Query: {
    Headers,
  },
  Mutation: {},
  Subscription: {},
};
