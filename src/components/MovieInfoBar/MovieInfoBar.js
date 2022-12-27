import React from 'react';
import { calcTime, convertMoney } from '../../helpers';
import './movieInfoBar.css';

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <div className='infoBar-container'>
      <div className='infoBar-column'>
        <p>Runtime : {calcTime(time)}</p>
      </div>
      <div className='infoBar-column'>
        <p>Budget : {convertMoney(budget)}</p>
      </div>
      <div className='infoBar-column'>
        <p>Revenue : {convertMoney(revenue)}</p>
      </div>
    </div>
  );
};

export default MovieInfoBar;
