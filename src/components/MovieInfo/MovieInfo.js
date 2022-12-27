import React, { useContext } from 'react';
import './movieInfo.css';
import API from '../../API';
import Grid from '../Grid/Grid';
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
import Actor from '../Actor/Actor';
import Rate from '../Rate/Rate';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import NoImage from '../../images/image-not-found.png';
import { Context } from '../../context';

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);
  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId.movie.id, value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='movieInfo-container'
    >
      <div className='movieInfo-contents'>
        <div className='movieInfo-img'>
          <Grid
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
          />
        </div>
        <div className='movieInfo_text'>
          <h3>{movie.title}</h3>
          <h5>PLOT</h5>
          <p>{movie.overview}</p>

          <div className='rating-directors'>
            <div className='rating'>
              <h5>
                RATING | <span> {movie.vote_average}</span>
              </h5>
              <div className='score'></div>
            </div>
            <div className='director'>
              <h5>
                DIRECTOR{movie.directors?.length > 1 ? 'S' : ''} |{' '}
                {movie.directors?.map((director) => (
                  <span key={director.credit_id}>{director.name}</span>
                ))}
              </h5>
            </div>
          </div>
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />
          {user && (
            <div className='rate-container'>
              <h5>RATE MOVIE</h5>
              <Rate callback={handleRating} />
            </div>
          )}

          <div className='actors-container'>
            <h5>ACTORS</h5>
            <div className='actorsImage'>
              {movie.actors?.map(
                (actor, index) =>
                  index < 6 && (
                    <Actor
                      key={actor.credit_id}
                      name={actor.name}
                      character={actor.character}
                      imageUrl={
                        actor.profile_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                          : NoImage
                      }
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
