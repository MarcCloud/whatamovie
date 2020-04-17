import gql from 'graphql-tag';

export const POPULAR_MOVIES = gql`
  query GetPopular($page: Int!) {
    popularMovies(page: $page) {
      id
      title
      backdropPath
      posterPath
    }
  }
`;

export const SEARCH_MOVIE_TITLE = gql`
  query SearchByTitle($title: String!, $page: Int!) {
    searchMovies(title: $title, page: $page) {
      id
      title
      backdropPath
      posterPath
    }
  }
`;
