import gql from 'graphql-tag';

export const MOVIE_WITH_RELATED_MOVIES = gql`
  fragment MovieBasic on Movie {
    id
    title
    backdropPath
    posterPath
  }

  query GetMovieWithSimilarMovies($movieId: Int!) {
    movie(id: $movieId) {
      ...MovieBasic
      overview
      runtime
      releaseDate
      cast {
        name
        character
        profile_path
      }
    }
    relatedMovies(movieId: $movieId, page: 1) {
      ...MovieBasic
    }
  }
`;
