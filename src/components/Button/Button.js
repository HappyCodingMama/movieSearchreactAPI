import React from 'react';
import './button.css';

const Button = ({ text, callback }) => {
  return (
    <div className='load-container'>
      <div type='button' onClick={callback} className='btn'>
        {text}
      </div>
    </div>
  );
};

export default Button;
