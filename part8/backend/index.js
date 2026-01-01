
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `
  type Book {
    title: String!
    author: String!
  }

  type Query {
    allBooks: [Book!]!
  }
`

const resolvers = {
  Query: {
    allBooks: () => [
      { title: "Clean Code", author: "Robert Martin" },
      { title: "Refactoring", author: "Martin Fowler" }
    ]
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
