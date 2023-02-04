import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import HomePage from "./containers/HomePage";
import HomeListing from "./components/home/HomeListing";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomeListing />} path={"/"} />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<HomeListing />} path="/homelisting" />
      </Routes>
    </div>
  );
};

export default Router;
