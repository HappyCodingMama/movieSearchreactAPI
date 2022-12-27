import React from 'react';
import PropTypes from 'prop-types';
import './actor.css';

const Actor = ({ name, character, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt='actor-thumb' />
      <p>{name}</p>
      <small>{character}</small>
    </div>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
