import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// PrivateRoute component to protect routes
const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  // If the user is authenticated, render the provided component (element),
  // else redirect to login page.
  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
