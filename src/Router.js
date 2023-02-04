import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path={'/'} />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
      </Routes>
    </div>
  );
};

export default Router;
