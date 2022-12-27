import React from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/image-not-found.png';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Heroimage from './Heroimage/Heroimage';
import Grid from './Grid/Grid';
import Searchbar from './Searchbar/Searchbar';
import Spinner from './Spinner/Spinner';
import Button from './Button/Button';
import './home.css';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <div className='home container'>
        {state.results[0] ? (
          <Heroimage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        ) : null}
        <Searchbar setSearchTerm={setSearchTerm} />
        <div className='grid'>
          <h5>{searchTerm ? 'Search Result' : 'Popular Movies'}</h5>
          <div className='grid-movie-container'>
            {state.results.map((movie) => (
              <Grid
                key={movie.id}
                clickable
                image={
                  movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage
                }
                movieId={movie.id}
              />
            ))}
          </div>
        </div>
      </div>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <div className='loadmore-btn'>
          <Button text='Load More' callback={() => setIsLoadingMore(true)} />
        </div>
      )}
    </>
  );
};

export default Home;
