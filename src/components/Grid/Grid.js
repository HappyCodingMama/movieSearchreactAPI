import React from 'react';
import './grid.css';
import { Link } from 'react-router-dom';

const Grid = ({ image, movieId, clickable }) => {
  return (
    <>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} alt='movie-thumb' />
        </Link>
      ) : (
        <img src={image} alt='movie-thumb' />
      )}
    </>
  );
};

export default Grid;
