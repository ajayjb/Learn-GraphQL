const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/type-def");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return req;
  },
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
