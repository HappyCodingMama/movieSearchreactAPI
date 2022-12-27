import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import UserProvider from './context';
import Login from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
