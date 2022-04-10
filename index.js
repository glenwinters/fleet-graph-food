const { ApolloServer, gql } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql`
  type Recipe {
    title: String
    author: String
    source: String
  }

  type Query {
    recipes: [Recipe]
  }
`;

const recipes = [
    {
        title: "Takeout-Style Kung Pao Chicken",
        author: "Kenji López-Alt",
        source: "The Wok"
    },
    {
        title: "Sichuan Kung Pao Chicken (Gong Bao Ji Ding)",
        author: "Kenji López-Alt",
        source: "The Wok"
    },
    {
        title: "Instant Pot Beef Barbacoa",
        author: "Amanda from The Chunky Chef",
        source: "https://www.thechunkychef.com/ultimate-instant-pot-beef-barbacoa/"
    },
];

const resolvers = {
    Query: {
        recipes: () => recipes,
    },
};

const server = new ApolloServer({
    schema: buildSubgraphSchema({typeDefs, resolvers }),
});

server.listen({
    port: 4010
}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
});
