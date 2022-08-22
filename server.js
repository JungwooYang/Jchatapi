import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({}); //throw Error('Apollo Server requires either an existing schema, modules or typeDefs');

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
