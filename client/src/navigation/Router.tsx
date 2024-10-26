import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Main/Home';
import Profile from '../components/Main/Profile';
import EditProfile from '../components/Main/EditProfile';
const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated() ? "/home" : "/login"} />} />
        <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={isAuthenticated() ? <Navigate to="/home" /> : <Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
