import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false, redirectTo }) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const shouldRedirect = isAuth && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
