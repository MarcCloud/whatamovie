import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MovieList from './MovieList';

const movies = [
  {
    id: 1234,
    title: 'Jhon Cena Revenge',
    posterPath: '/somehashtoafile.jpg',
    adult: false,
    releaseDate: '11-11-2011'
  }
];

describe('MovieList', () => {
  it('should show movies title and poster', async () => {
    const { getByText, getByAltText } = render(<MovieList movies={movies} />);
    const poster: any = getByAltText(movies[0].title);
    expect(getByText(movies[0].title)).toBeInTheDocument();
    expect(poster.src).toBe(`https://image.tmdb.org/t/p/w500/${movies[0].posterPath}`);
  });
});
