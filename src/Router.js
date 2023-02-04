import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import HomeListing from './components/home/HomeListing';
import DetailPage from './containers/DetailPage';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path={'/'} />
        <Route element={<DetailPage />} path={'/details/:id'} />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />
        <Route element={<HomeListing />} path='/homelisting' />
      </Routes>
    </div>
  );
};

export default Router;
