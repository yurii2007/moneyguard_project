import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { refreshUser } from 'redux/auth/AuthThunk';
import { LayoutContainer } from './LayoutContainer/LayoutContainer';
const Home = React.lazy(() => import('pages/Home'));
const StatisticsPage = React.lazy(() => import('pages/StatisticsPage'));
const Currency = React.lazy(() => import('pages/Currency'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/register"
        element={
          <PublicRoute redirectTo="/dashboard/home" restricted>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute redirectTo="/dashboard/home" restricted>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="/dashboard" element={<LayoutContainer />}>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="home"
          element={
            <PrivateRoute redirectTo="/login">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="statistics"
          element={
            <PrivateRoute redirectTo="/login">
              <StatisticsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="currency"
          element={
            <PrivateRoute redirectTo="/login">
              <Currency />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="*"
        element={<Navigate to="dashboard/home" replace={true} />}
      />
    </Routes>
  );
};
