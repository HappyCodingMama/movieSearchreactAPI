import React, { useState, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import './searchbar.css';

const Searchbar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div className='searchbar'>
      <div className='search-input-container'>
        <BiSearch className='search-icon' />
        <input
          type='text'
          placeholder='Search Movie'
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </div>
    </div>
  );
};

export default Searchbar;
