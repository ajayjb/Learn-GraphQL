const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favoriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    inTheater: Boolean!
  }

  input createUserInput {
    name: String!
    userName: String!
    age: Int
    nationality: Nationality = IndiaIn
  }

  input updateUserNameInput {
    id: ID!
    newUserName: String!
  }

  input deleteUserInput {
    id: ID!
  }

  type Mutation {
    createUser(input: createUserInput!): User!
    updateUserName(input: updateUserNameInput!): User!
    deleteUser(input: deleteUserInput!): User
  }

  type Query {
    users: [User!]!
    user(id: ID): User
    movies: [Movie!]!
    movie(name: String!): Movie
  }

  enum Nationality {
    India
    USA
    Brazil
    South
    Africa
    England
  }
`;

module.exports = typeDefs;
