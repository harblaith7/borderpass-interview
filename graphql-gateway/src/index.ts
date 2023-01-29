import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Query } from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});
