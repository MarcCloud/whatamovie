import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Movie {
    id: Int!
    adult: Boolean!
    title: String!
    backdropPath: String
    budget: Int!
    genres: [Genre!]!
    originalLanguage: String!
    originalTitle: String!
    overview: String
    populariti: Int!
    posterPath: String
    productionCompanies: [ProductionCompany!]!
    runtime: Int!
    cast: [Actor!]
  }

  type ProductionCompany {
    name: String!
    logoPath: String
    originCountry: String!
  }

  type Genre {
    id: Int!
    name: String!
  }

  type Actor {
    id: Int!
    name: String!
    gender: String
    profilePath: String
    character: String!
  }

  type Query {
    movie(id: Int!): Movie
    popularMovies(page: Int!): [Movie!]!
    relatedMovies(movieId: Int!, page: Int!): [Movie!]!
    searchMovies(title: String!, page: Int!): [Movie!]!
  }
`;

export default typeDefs;
