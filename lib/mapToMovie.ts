import { Movie } from '../types';
export default function mapToMovie(apiResult: any) {
  const movie: Movie = {
    id: apiResult.id,
    posterPath: apiResult.poster_path,
    backdropPath: apiResult.backdrop_path,
    adult: apiResult.adult,
    title: apiResult.title
  };

  return movie;
}
