import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

const Header = () => {
  const [user] = useContext(Context);
  return (
    <header className='nav-container'>
      <Link to={'/'}>
        <p>
          Movie<span>holic</span>{' '}
        </p>
      </Link>
      {/* {user ? (
        <span className='loggedIn'>Logged in as: {user.username}</span>
      ) : (
        <Link to='/login'>
          <span className='btn'>Sign In</span>
        </Link>
      )} */}
    </header>
  );
};

export default Header;
