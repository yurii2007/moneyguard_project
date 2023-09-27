import Home from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './Routes/PublicRoute';
import Layout from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import PrivateRoute from './Routes/PrivateRoute';
import StatisticsPage from 'pages/StatisticsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/AuthThunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />}></Route>
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/login">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/home" restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/home" restricted>
              <LoginPage />
            </PublicRoute>
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
      </Route>
      <Route path="*" element={<Navigate to="/home" replace={true} />} />
    </Routes>
  );
};
