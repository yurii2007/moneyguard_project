import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayOutBox } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navbar/Navbar';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <LayOutBox>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </LayOutBox>
    </>
  );
};

export default Layout;