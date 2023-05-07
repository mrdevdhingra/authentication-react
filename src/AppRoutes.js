import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PublicRoute />} >
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/home" element={<PrivateRoute />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </Router>
);
  
  export default AppRoutes;
  