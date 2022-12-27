import React from 'react';
import { Link } from 'react-router-dom';
import './movieTitle.css';

const MovieTitle = ({ movieTitle }) => {
  return (
    <div className='movieTitle-container'>
      <Link to='/'>
        <span>Home </span>
      </Link>
      <span> | </span>
      <span>{movieTitle}</span>
    </div>
  );
};

export default MovieTitle;
