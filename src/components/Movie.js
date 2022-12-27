import React from 'react';
import { useParams } from 'react-router-dom';
import MovieTitle from './MovieTitle/MovieTitle';
import { useMovieFetch } from '../hooks/useMovieFetch';
import MovieInfo from './MovieInfo/MovieInfo';

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie } = useMovieFetch(movieId);
  return (
    <div>
      <MovieTitle movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </div>
  );
};

export default Movie;
