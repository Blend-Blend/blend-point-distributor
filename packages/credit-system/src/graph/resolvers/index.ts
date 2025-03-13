import { GraphQLScalarType } from "graphql";
import { Hello, StreamUpdate, Headers, validate } from "./default";
import { Point, Points } from "./points";

export const resolvers = {
  Query: {
    Headers,
    Points,
    Point,
  },
  Mutation: {},
  Subscription: {},
};
