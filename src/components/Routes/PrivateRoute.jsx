import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useSelector(state => state.auth.token);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
