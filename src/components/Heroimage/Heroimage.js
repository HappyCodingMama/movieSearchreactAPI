import React from 'react';
import './heroimage.css';

const Heroimage = ({ image, title, text }) => {
  return (
    <div className='heroimage container'>
      <img src={image} />
      <div className='heroimage-info'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Heroimage;
