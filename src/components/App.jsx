import Home from 'pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './Routes/PublicRoute';
import Layout from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import PrivateRoute from './Routes/PrivateRoute';
import StatisticsPage from 'pages/StatisticsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/home">
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
            <PublicRoute redirectTo="/contacts" restricted>
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
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
