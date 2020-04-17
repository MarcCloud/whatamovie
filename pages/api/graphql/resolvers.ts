import request from '../../../lib/request';
import mapToMovie from '../../../lib/mapToMovie';
const resolvers = {
  Query: {
    movie: (_: any, { id }: { id: number }) => {
      return null;
    },

    popularMovies: (_: any, { page }: { page: number }) => {
      return request(`movie/popular?page=${page}`)
        .then((data) => {
          return data.results.map(mapToMovie);
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
    },
    relatedMovies: (_: any, { page, movieId }: { page: number; movieId: number }) => {
      return [];
    },
    searchMovies: (_: any, { page, title }: { page: number; title: string }) => {
      const encodedTitle = encodeURIComponent(title);
      return request(`/search/movie?query=${encodedTitle}&page=${page}`)
        .then((data) => {
          return data.results.map(mapToMovie);
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
    }
  }
};

export default resolvers;
