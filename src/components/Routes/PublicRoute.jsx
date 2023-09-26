import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const auth = useSelector(state => state.auth.isAuth);
  if (auth) {
    return <Navigate to="/statistics" />;
  }
  return <div>{children}</div>;
};

export default PublicRoute;
