import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayOutBox } from './Layout.styled';
import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Navigation />
      <LayOutBox>
        <Suspense fallback={<p>Loading ... </p>}>
          <Outlet />
        </Suspense>
      </LayOutBox>
    </div>
  );
};

export default Layout;
