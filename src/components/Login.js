import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
import Button from './Button/Button';
import { Context } from '../context';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );

      setUser({ sessionId: sessionId.session_id, username });

      navigate('/');
    } catch (error) {
      setError(true);
    }
  };
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <form>
          <h2>Login</h2>
          {error && <div className='error'>There was an error!</div>}
          <label>Username : </label>
          <input
            type='text'
            value={username}
            name='username'
            placeholder='Username'
            onChange={handleInput}
          />

          <label>Password : </label>
          <input
            type='password'
            value={password}
            name='password'
            placeholder='Password'
            onChange={handleInput}
          />

          <Button text='Login' callback={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
